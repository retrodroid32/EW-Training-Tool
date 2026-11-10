const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');
cp.execFileSync(process.execPath,['tests/check.cjs'],{stdio:'inherit'});
cp.execFileSync(process.execPath,['--check','app.js'],{stdio:'inherit'});
const out = 'dist';
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
for (const name of ['index.html','app.js','workbook.md']) {
  fs.copyFileSync(name,path.join(out,name));
}
fs.writeFileSync(path.join(out,'BUILD_INFO.txt'),
  'EW Academy web training tool\n'+
  'Build commit: '+(process.env.GITHUB_SHA || 'local')+'\n'+
  'Open index.html in a browser. No backend or RF hardware needed.\n'+
  '8 modules; synthetic waveforms and spectrum; 400 question variants.\n');
console.log('Build complete: dist/');
