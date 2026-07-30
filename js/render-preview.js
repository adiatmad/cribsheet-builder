// Turns the block array into plain text and writes it into the
// preview panel. This function only READS `blocks` — it never
// changes it. That separation is what keeps "data" and "rendering"
// from turning into one tangled mess later.

function renderPreview(blockList, outputElement) {
  const lines = blockList
    .filter(block => block.active)
    .map(block => renderBlockAsText(block));

  outputElement.textContent = lines.join("\n\n");
}

function renderBlockAsText(block) {
  // Right now we only understand "paragraph". As we add more block
  // types (checkbox, radio-group, text-input...) this function grows
  // one new "case" per type — nothing else in the app has to change.
  switch (block.type) {
    case "paragraph":
      return block.text;
    default:
      return `[Unknown block type: ${block.type}]`;
  }
}
