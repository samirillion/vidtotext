import {Observable} from "rxjs";

// This Will be How the text is passed back to popujs where it will be copied to user clipboard
chrome.runtime.sendMessage({
    action: "getSource",
    source: 'this is text that you got from turning an image into text'
});

let mousetracker = document.createElement("div");
	mousetracker.id = "mouseTracker";
	document.body.appendChild(mousetracker);

function mouseTracker(document, value) {
	mousetracker.innerText = value.clientX + ", " + value.clientY;
}

let source = Observable.fromEvent(document, 'mouseover');

source.subscribe(
	// next() function
	value => mouseTracker(document, value),
	// error function
	e => mouseTracker(document, error),
	// complete function
	() => mouseTracker(document, 'complete')
);

// let mousedown$ = Observable.fromEvent(document, 'mousedown');
// let mousemove$ = Observable.fromEvent(document, "mousemove");
// let mouseup$ = Observable.fromEvent(document, "mouseup");

// let mousedrag$ = mousedown$.switchMap(down => {
// 			down.preventDefault();
//             let prevX = down.clientX;
//             let prevY = down.clientY;

//             return mousemove$
//                 .map(move => {
//                     move.preventDefault();

//                     let delta = {
//                         dx: event.clientX - prevX,
//                         dy: event.clientY - prevY
//                     };
//                     prevX = event.clientX;
//                     prevY = event.clientY;

//                     return delta;
//                 })
//                 .takeUntil(mouseup$);
//         })

//         mousedrag$.subscribe(
//             this.moveX(delta.dx);
//             this.moveY(delta.dy);
//         });

// function onNext(value) {
// 	mousetracker.style.left = value.x;
// 	mousetracker.style.top = value.y;
// }