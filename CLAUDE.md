# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Basem Ibrahim's personal portfolio site (basemgit.github.io) — plain static HTML/CSS/JS, no
build step, no framework, no package.json. Hosted on GitHub Pages, served directly from this
repo. **Deploys are done by the user, not Claude** — never push/deploy on their behalf.

## Architecture

Each content page (`games.html`, `music.html`, `arabic-stories.html`, `comix.html`, `awards.html`,
`apps.html`, `dance.html`, `english-stories.html`, `experience-mecca.html`, `jamming.html`,
`other.html`) follows the same pattern:

- The `.html` file is a static shell: header, side-menu nav (identical `<nav class="side-menu">`
  block copy-pasted across every page), and an empty content container (e.g. `<div id="game-list">`).
- A matching `js/<page>.js` holds a plain JS array of data objects (title, image, video ID, store
  links, etc.) and a renderer that builds the DOM from that array on load. **To add/edit content
  (a new game, book, comic, etc.), edit the data array in the relevant `js/*.js` file — don't
  hand-write markup in the `.html` file.**
- `js/menu.js` is shared by every page: wires up the burger-menu open/close and highlights the
  current page's link in the side menu via `window.location.pathname`.
- `css/style.css` is one shared stylesheet, appended to over time with a clearly commented
  section per page (`===== MUSIC PAGE =====`, `===== APPS page =====`, etc.). Each section notes
  which page(s) use it and whether it's self-contained or reuses another page's classes. Follow
  this convention: add new page-specific styles as a new labeled section at the end rather than
  interleaving with existing sections.
- Store/platform logos live in `images/stores/` and are referenced by a `storeLogos` key map in
  each page's JS (e.g. `googleplay`, `meta`, `itch`, `kongregate`, `ggj`) rather than hardcoded
  paths per item.
- YouTube videos are click-to-load: a thumbnail (`img.youtube.com/vi/<id>/mqdefault.jpg`) swaps
  to an `<iframe>` embed on click, rather than embedding iframes upfront (keeps pages light).

`index.html` is the only page that doesn't follow the list-rendering pattern — it's a static hero
section with profile image and social links, no corresponding JS data file.

## Adding a new content page

1. Copy the structure of an existing similar page (e.g. `comix.html` for a simple image+link list,
   `experience-mecca.html`/`dance.html` for a single-subject page with big images).
2. Add the nav link to the `.side-menu` block in **every** existing HTML file (no shared
   header/nav include exists — it's duplicated per page).
3. Create `js/<page>.js` with a data array + renderer, and append a labeled section to
   `css/style.css` if new styling is needed.
4. Update `sitemap.xml` with the new page.

## No build/test/lint tooling

There are no npm scripts, bundler, linter, or test suite — just open the HTML files directly or
serve the folder with any static file server to preview.
