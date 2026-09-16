# Home Lab Village Website

Static GitHub Pages-ready site for **homelabvillage.org**.

## Quick preview
Open `index.html` in any browser.

## GitHub Pages
1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub: Settings → Pages → Deploy from a branch.
4. Select `main` and `/ (root)`.
5. Configure your domain/DNS after the Pages site works.

## Before launch
- The CTF button currently points to `https://liljuicetin.org/ctf`.
- Verify event wording/details before public launch.
- When the original CTF files are available, verify the embedded filename `Phase3.pdf` before migration.
- The logo and hero art are CSS/text approximations so the package has no dependency on generated raster artwork.

## Files
- `index.html` — site content
- `css/style.css` — responsive visual design
- `js/main.js` — mobile navigation
- `CNAME` — custom domain

## Community
Discord invite: https://discord.gg/tCtT5bwjMw

## V3 changes
- Hero copy changed to "A community for tinkerers."
- Hero poster changed to Build / Break / Learn.
- CTF is now hosted locally under `/ctf/`.
- `/ctf/Phase2.jpg` contains a ZIP payload whose internal filename is `Phase3.pdf`.
- The header logo remains a temporary placeholder until an original/licensed logo asset is supplied.

## V4 changes
- Added the supplied Home Lab Village house/flask logo.
- Replaced the temporary text-symbol logo in the header/footer and hero terminal.
- Added a favicon from the same logo.
- V4 is a complete upload package including CNAME, CSS, JS, CTF page, and Phase2.jpg.

## V5 fix
- Fixed oversized logo rendering in the header, hero, and footer.
- Added hard dimensions plus CSS `!important` fallbacks.
- Added `?v=5` stylesheet cache-busting so browsers load the updated CSS immediately.
