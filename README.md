# EW Academy — Interactive Electronic Warfare Training

**Explore RF signals, interference, jamming theory, and electronic protection with interactive visual lessons.**

### [Launch EW Academy](https://retrodroid32.github.io/EW-Training-Tool/)

## Project status

The first application build passed GitHub Actions validation and was deployed to GitHub Pages from the development branch. The application is not yet merged to `main`; source, quiz banks, workbook, and workflows are available in [feature/interactive-ew-academy](https://github.com/retrodroid32/EW-Training-Tool/tree/feature/interactive-ew-academy). See [draft PR #1](https://github.com/retrodroid32/EW-Training-Tool/pull/1). Full browser QA is still pending.

## Features

- Eight progressive learning modules from EW foundations to advanced interpretation.
- Live synthetic time-domain and illustrative spectrum visualizations.
- Sliders for frequency, amplitude, phase, interference level, and frequency separation.
- Examples of noise-like, tone-like, and intermittent interference.
- Five randomized quiz questions per module attempt from a 50-variant bank per module (400 variants in total); 4/5 correct to pass.
- Local learning progress and notes.
- [Printable/downloadable workbook](https://github.com/retrodroid32/EW-Training-Tool/blob/feature/interactive-ew-academy/workbook.md).
- Responsive browser-based interface with no backend, registration, or RF hardware.

## Training modules

| # | Module | Topics |
|---|---|---|
| 1 | EW Foundations | Support, attack, protection, emitters and receivers |
| 2 | RF & Waveforms | Amplitude, frequency, phase, bandwidth and modulation |
| 3 | Signal Analysis | Time traces, spectra, sampling and interpretation |
| 4 | Noise & Interference | SNR, noise floor and interfering energy |
| 5 | Jamming Theory | Conceptual interference effects and limitations |
| 6 | Radar & Communications | Sensing, decoding, detection and receiver behavior |
| 7 | Electronic Protection | Filtering, shielding, resilience and diagnostics |
| 8 | Advanced Interpretation | Evidence, uncertainty and defensive assessment |

## Running the application

Use the [live training site](https://retrodroid32.github.io/EW-Training-Tool/) or download the [successful packaged build](https://github.com/retrodroid32/EW-Training-Tool/actions/runs/42872721181) from the workflow's `ew-academy-web-build` artifact. Extract it and open `index.html` in a modern browser.

To run the development branch locally:

```bash
git clone --branch feature/interactive-ew-academy https://github.com/retrodroid32/EW-Training-Tool.git
cd EW-Training-Tool
python -m http.server 8000
```

Then open http://localhost:8000. To validate the source with Node.js, run `node tests/check.cjs`, then build with `node scripts/build.cjs`.

## Safety and scope

This is an **educational, synthetic, non-transmitting simulator**. It does not control radio hardware, transmit jamming signals, or provide operational attack settings. Visualizations and contrast indicators are conceptual, not calibrated RF measurements, and should not be interpreted as predictions of real-world interference performance.

## Development

Work is tracked in [PR #1](https://github.com/retrodroid32/EW-Training-Tool/pull/1). GitHub Actions verifies JavaScript syntax, eight modules, 400 question variants, and workbook coverage. Before a production release, the UI should also be verified manually in desktop and mobile browsers.
