# EW Academy — Interactive Electronic Warfare Training

**A visual-first, browser-based curriculum for beginners through advanced learners.**

[Launch the app after GitHub Pages deployment](https://retrodroid32.github.io/EW-Training-Tool/)

## Course experience

- **8 progressively structured modules** covering EW foundations, waveforms, signal analysis, noise and interference, jamming theory, radar and communications, electronic protection, and advanced interpretation.
- **Synthetic live signal lab:** change reference frequency, amplitude, phase, interference level, frequency separation, and interference representation. View clean and observed time-domain waveforms plus an illustrative frequency-domain plot.
- **400 question variants:** 50 per module, generated from ten module-specific concepts with five distinct contexts each. Every quiz attempt samples five questions without replacement and randomizes answer order. Pass at 4/5.
- **Companion workbook:** downloadable [Markdown workbook](workbook.md), plus print/PDF-ready module worksheets from the application's Workbook tab.
- Local module completion and learning notes saved in browser localStorage, no backend or login.
- Mobile-responsive dark training dashboard, keyboard-accessible controls, and GitHub Pages deployment workflow.

## Run locally

Open `index.html` directly in a modern web browser. No dependencies, build process, hosting service, or external libraries are required.

Alternatively use a simple local server:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy with GitHub Pages

After reviewing and merging the feature PR to `main`:

1. Open **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Run the **Deploy EW Academy to GitHub Pages** workflow if needed. It also runs on pushes to `main`.
4. Visit https://retrodroid32.github.io/EW-Training-Tool/ once deployment succeeds.

The workflow is deliberately restricted to `main`; an unmerged feature branch does not publish.

## Course map

| Module | Learning focus |
| --- | --- |
| 01 — EW Foundations | Support, attack, protection, emitters, receivers, context |
| 02 — RF & Waveforms | Amplitude, frequency, period, phase, modulation, bandwidth |
| 03 — Signal Analysis | Time/frequency domains, peaks, resolution, sampling, artifacts |
| 04 — Noise & Interference | Noise floor, SNR and SIR concepts, broadband and tone-like energy |
| 05 — Jamming Theory | Conceptual interference effects, spectral overlap, interpretation |
| 06 — Radar & Communications | Sensing, communications, detection, errors, receiver differences |
| 07 — Electronic Protection | Filtering, selectivity, shielding, monitoring, resilience |
| 08 — Advanced Interpretation | Corroboration, uncertainty, evidence-based analysis |

## Educational scope and limitations

**This is a synthetic, non-transmitting educational simulator.** It does not communicate with radio hardware, construct transmit waveforms for emission, implement disruption procedures, or predict real-world electronic attack performance. All signal values, spectrum plots, and the displayed *illustrative signal contrast* are simplified conceptual visualizations, not calibrated RF measurements. The interference representations are qualitative teaching examples. Use authorized passive observations and properly controlled environments for any real-world measurement training.

The app does not record user identity or send progress to a server. Browser storage can be cleared by the user.

## Development and quality checks

- Browser smoke test: overview → module → adjust all sliders → reset → switch representations → read plots.
- Quiz: start, select answers, submit, verify scoring and explanations, retake for a different random draw.
- Check exactly 50 entries for each of eight module banks, no duplicate IDs, and 5 unique IDs sampled per attempt.
- Completion persists across refresh in the same browser; workbook printing includes all eight modules.
- Test desktop/mobile breakpoints and keyboard navigation.

**Status:** Initial working educational prototype, intended for review and iterative improvements before public release.
