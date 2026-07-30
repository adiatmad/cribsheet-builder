// The single source of truth: an array of "block" objects.
// Every other file in this app only READS this array (or, later,
// changes it through main.js) — nothing else is allowed to invent
// its own copy of this data.

const blocks = [
  {
    id: "block-1",
    type: "paragraph",
    active: true,
    text: "Thanks for looking at this task."
  },
  {
    id: "block-2",
    type: "paragraph",
    active: false,
    text: "This paragraph is turned OFF, so it should NOT show up in the preview."
  },
  {
    id: "block-3",
    type: "paragraph",
    active: true,
    text: "Keep on mapping!"
  }
];
