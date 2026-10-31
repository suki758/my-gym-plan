# My Gym Plan — installable offline PWA

This is the existing Gym A / Gym B workout page, with an installable app manifest, icons, and offline cache. No account or backend required.

## Publish with GitHub Pages

1. Create a **public** GitHub repository, e.g. `my-gym-plan`. Public GitHub Pages content is visible to anyone; do not commit private workout records.
2. Upload the **contents** of this folder to the repository root: `index.html`, `sw.js`, `manifest.webmanifest`, `.nojekyll`, and the `icons` folder. (Alternatively upload these via Git.)
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**. Choose `main` and `/ (root)`; save.
4. Wait for Pages to publish and open `https://YOUR-USERNAME.github.io/my-gym-plan/` on your Android phone in Chrome.
5. From Chrome's menu choose **Install app** or **Add to Home screen**. Launch from the new icon. Visit the app once while online before using offline; then test in airplane mode.

The app works at any HTTPS subpath because all asset links are relative. Do not open the HTML file from Downloads to install it as a PWA.

## Data and privacy

Workout entries are stored in the browser's localStorage on **that device and origin**. No data is sent to GitHub. Use **Export backup** regularly. Uninstalling or clearing site data may erase workout history. The old local HTML file and new hosted PWA have separate storage; history does not transfer automatically.

## Updates

When editing the application or cached assets, change `my-gym-plan-v1` in `sw.js` to `my-gym-plan-v2`, then push the changed files. Reopen the installed app online to receive the update. For a simple fitness tracker, keep regular JSON backups before updates.

## Local preview

Run `python -m http.server 8080` from this folder and open `http://localhost:8080` on your laptop. Service workers work on localhost or HTTPS. Opening a file with `file://` is not equivalent to installing the PWA.
