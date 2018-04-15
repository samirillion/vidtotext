let mousetracker = document.createElement("div");
  mousetracker.id = "mouseTracker";
  document.body.appendChild(mousetracker);

export function mouseTracker(document, value) {
  mousetracker.innerText = value.clientX + ", " + value.clientY;
}