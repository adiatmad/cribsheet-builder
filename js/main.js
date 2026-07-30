// This is the only file that "wires things together": it grabs the
// real DOM elements and asks the renderer to draw the current state.
// It does NOT know how rendering works internally — that's
// render-preview.js's job. Keeping this separation means you can
// change how rendering looks without touching this file at all.

document.addEventListener("DOMContentLoaded", () => {
  const previewOutput = document.getElementById("preview-output");
  renderPreview(blocks, previewOutput);
});
