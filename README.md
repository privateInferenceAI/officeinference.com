# officeinference.com

The Office Inference site. Rebuilt on 2026-11-07 around the AI Reset campaign: problem-solver
positioning, the free 30-minute call, and the free AI Last-Mile Checklist.

## Pages

| Path | What it is |
|---|---|
| / | Home: the problem, the call, the proof, the FAQ |
| /ai-reset/ | Landing page and request form for the free call |
| /checklist/ | Landing page and email capture for the checklist |
| /about/ | Who Office Inference is, how the work is done |
| /privacy/ | What the forms collect and why |
| /ai-reset/thank-you/ | Post-submit page, noindex |
| /checklist/thank-you/ | Post-submit page with the PDF download, noindex |

## How it works

Static HTML and CSS, served by GitHub Pages from main. No build step, no framework, no analytics,
no third-party scripts. The only script is form.js, which copies UTM tags from the address bar
into the hidden fields of the two Formspree forms so ad clicks can be attributed.

The forms post to Formspree endpoint xzezqbaz with a _next redirect to the matching thank-you
page. Both forms carry a hidden _subject so the two kinds of enquiry are distinguishable in
the inbox.

## To update

Edit the HTML directly and push to main. GitHub Pages rebuilds in under a minute. Check the live
URL after each push. The logo is /brand/oi-logo-300.png and the palette lives at the top of
styles.css.
