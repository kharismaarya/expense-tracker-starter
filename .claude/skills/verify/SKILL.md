---
name: verify
description: Verify a change to the expense tracker actually works — lint, production build, then launch the Vite dev server and confirm the app loads. Use after editing src/ or when asked to check that the app still runs.
---

There is no test suite in this repo, so verification is lint + build + a live load of the app.

1. Run `npm run lint`. Report any errors with file:line; do not fix unrelated pre-existing issues (this is a training repo with intentional flaws).
2. Run `npm run build`. A failure here means a compile/import error — report it.
3. Start the dev server in the background: `npm run dev`. Wait until its output shows `Local: http://localhost:5173/` (the port may differ if 5173 is taken — use the one printed).
4. Smoke-check it:
   - `curl -s http://localhost:5173/` returns HTML containing `<div id="root">`.
   - `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/src/main.jsx` and `.../src/App.jsx` both return `200` (Vite returns 500 on transform errors).
   - If a browser tool (Claude in Chrome / Playwright) is available, open the page, screenshot it, and check the change is visible and the console is free of errors.
5. Stop the dev server you started.
6. Summarize: lint result, build result, what was checked live, and anything you could not verify.
