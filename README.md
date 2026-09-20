# Cribsheet Builder

A small client-side web application for building and previewing a cribsheet from structured content blocks.

## How it works

The application uses a single source of truth in `js/data.js`. Other JavaScript files read that block data to render:

- a builder view; and
- a live preview.

The current data model contains paragraph blocks with an active/inactive state.

## Run

This repository is plain HTML/CSS/JavaScript and has no package manager or build configuration.

You can open `index.html` directly in a browser, or serve the repository with any simple static web server.

## Structure

- `index.html` — application shell.
- `style.css` — page styling.
- `js/data.js` — source block data.
- `js/render-preview.js` — preview rendering.
- `js/render-builder.js` — builder rendering.
- `js/main.js` — application entry point.

## License

See [LICENSE](LICENSE).
