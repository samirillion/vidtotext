import { fromEvent } from "rxjs/observable/fromEvent";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/takeUntil";
import { drawSquare } from "./drawsquare.js";

// This Will be How the text is passed back to popujs where it will be copied to user clipboard
chrome.runtime.sendMessage({
	action: "getText",
	source: "this is where text that you get from converting the image goes"
});

let source = fromEvent(document, "mouseover");
let mouseup = fromEvent(document, "mouseup");
let mousemove = fromEvent(document, "mousemove");
let mousedown = fromEvent(document, "mousedown");

let mousedrag = mousedown.switchMap((event) => {
	let prevX = event.clientX;
	let prevY = event.clientY;

	return mousemove
		.map((event) => {
			event.preventDefault();
			console.log(event);
			let delta = {
				x: prevX,
				y: prevY,
				dx: event.clientX - prevX,
				dy: event.clientY - prevY
			};

			if ( delta.dx <= 0 ) {
				prevX += delta.dx
			}

			if (delta.dy <= 0 ) {
				prevY += delta.dy
			}

			return delta;
		}).takeUntil(mouseup);
});

mousedrag.subscribe(
	(delta) => {
	if (delta.dx === 0 || delta.dy === 0) {
		return;
	}
		drawSquare(document, delta);
	}
	

);

// let obs = fromEvent(document, 'mouseover').subscribe(
// 		(event) => 
// 	)