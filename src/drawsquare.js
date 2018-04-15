let drugsquare = document.createElement("canvas");
	drugsquare.id = "drugSquare";
	document.body.appendChild(drugsquare);
	drugsquare.style.position = "absolute";
	drugsquare.style.border = "2px solid black";

export function drawSquare(document, coords) {
	console.log(coords);
	drugsquare.style.left = coords.x + 'px';
	drugsquare.style.top = coords.y + 'px';
	drugsquare.style.height = coords.dy + "px";
	drugsquare.style.width = coords.dx + "px";
}