# Brand assets

| File | Size | Use |
|---|---|---|
| linkedin-banner-light.png | 1512x256 | LinkedIn company banner, paper background (primary) |
| linkedin-banner-navy.png | 1512x256 | Same layout on navy, for a bolder header |
| linkedin-banner-minimal.png | 1512x256 | Logo mark plus tagline only |
| LINKEDIN.md | | Source of truth for the LinkedIn company page copy |
| oi-logo-300.png | 300x300 | LinkedIn company profile image |
| oi-logo-transparent.png | 733x748 | Master logo, original JPEG background keyed out |
| favicon-32.png | 32x32 | Copy of the site favicon |
| apple-touch-icon.png | 180x180 | Copy of the site touch icon |

Site icons live at the repo root, because GitHub Pages serves them from `/`:
`favicon.ico` (multi-size, simplified at 16px), `favicon-32.png`, `apple-touch-icon.png`.

Palette: paper #faf9f6, navy #1f4e79, slate #5a6472, teal accent #2e8a8a.

Banner layout rule: the left 352 pixels stay empty, because LinkedIn overlays the company
logo on the bottom-left of the banner. Banner text is centered in the region to the right of
that zone, with the logo mark at the right edge.

Logo note: the source file is a JPEG on a light gray background with a soft drop shadow. It
was keyed to transparency using color distance (to keep the pale outer leaves) plus a
saturation filter (to drop the neutral shadow). Re-key from the source if a cleaner original
ever turns up.
