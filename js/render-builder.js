// Turns the block array into an editable checklist in the builder
// panel. Each checkbox is wired directly to that block's `active`
// flag: flipping it updates the shared data, then calls `onChange`
// so the preview panel can redraw with the new state.
//
// This file never touches the preview panel directly — it just
// reports "something changed" and lets main.js decide what to do
// about it. That keeps this file reusable even if, later, we want
// something other than a preview to react to edits.

function renderBuilder(blockList, containerElement, onChange) {
  containerElement.innerHTML = "";

  blockList.forEach(block => {
    // Only "paragraph" blocks are checkbox-toggleable for now.
    // As we add more block types, this will grow into a switch,
    // same shape as renderBlockAsText() in render-preview.js.
    if (block.type !== "paragraph") return;

    const row = document.createElement("label");
    row.className = "block-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = block.active;

    checkbox.addEventListener("change", () => {
      block.active = checkbox.checked;
      onChange();
    });

    const text = document.createElement("span");
    text.textContent = block.text;

    row.append(checkbox, text);
    containerElement.append(row);
  });
}
