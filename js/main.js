// This is the only file that "wires things together": it grabs the
// real DOM elements and asks the renderer to draw the current state.
// It does NOT know how rendering works internally — that's
// render-preview.js's job. Keeping this separation means you can
// change how rendering looks without touching this file at all.

document.addEventListener("DOMContentLoaded", () => {
  const previewOutput = document.getElementById("preview-output");
  const builderOutput = document.getElementById("builder-output");

  // Whenever a block changes (right now: a checkbox toggles),
  // redraw the preview so the two panels stay in sync.
  function redrawPreview() {
    renderPreview(blocks, previewOutput);
  }

  renderBuilder(blocks, builderOutput, redrawPreview);
  redrawPreview();
});
