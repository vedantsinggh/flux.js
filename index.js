import Widget from "./flux.js";

const widget = new Widget("div", {});
console.log(widget);
const entry = document.getElementById("entry");
entry.appendChild(widget.createTag());

