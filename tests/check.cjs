const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const app = fs.readFileSync('app.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');
const workbook = fs.readFileSync('workbook.md', 'utf8');
const beforeDom = app.split('function navigation()')[0];
assert.ok(beforeDom.includes('function bank(i)'), 'Quiz generator must be present');

const sandbox = {
  localStorage: {getItem(){return null},setItem(){}},
  document: {getElementById(){return null}},
  console,
  Math,
};
vm.runInNewContext(beforeDom + '\n;globalThis.api={M,bank};', sandbox, {timeout:2000});
const {M,bank} = sandbox.api;
assert.equal(M.length, 8, 'Expected eight modules');
for(let i=0;i<M.length;i++){
  assert.equal(M[i][3].length,10, 'Each module needs 10 guided concepts');
  const items=bank(i);
  assert.equal(items.length, 50, 'Each quiz bank needs 50 items');
  assert.equal(new Set(items.map(x=>x.id)).size,50,'Question identifiers must be unique');
  for(const q of items){
    assert.ok(q.question.length>20,'Question must be useful');
    assert.equal(q.options.length,3,'Three answer choices required');
    assert.equal(q.options.filter(o=>o===q.correct).length,1,'Exactly one correct answer');
    assert.equal(new Set(q.options).size,3,'Options must not duplicate');
    assert.ok(q.explanation.length>20,'Question needs an explanation');
  }
  for(let trial=0;trial<30;trial++){
    const sampled=[...items].sort(()=>Math.random()-.5).slice(0,5);
    assert.equal(new Set(sampled.map(x=>x.id)).size,5);
  }
}
for(const id of ['scope','spectrum','freq','amp','noise','offset','phase','mode','quizArea','workbookSheets']){
  assert.ok(html.includes('id="'+id+'"'), 'Missing interface element '+id);
}
for(let i=1;i<=8;i++) assert.ok(workbook.includes('Module '+String(i).padStart(2,'0')+':'), 'Workbook missing module '+i);
assert.ok(!/navigator\.serial|navigator\.usb|WebSocket\(/.test(app), 'No connected transmitter controls expected');
console.log('PASS: eight course modules, 400 unique quiz items, 8 workbook chapters and required simulator controls');
