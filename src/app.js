import { fromEvent } from 'rxjs/observable/fromEvent';
import { map } from 'rxjs/operators';
import { mouseTracker } from './mousetracker.js';

// This Will be How the text is passed back to popujs where it will be copied to user clipboard
chrome.runtime.sendMessage({
    action: "getText",
    source: "this is where text that you get from converting the image goes"
});

const source = fromEvent(document, 'mouseover');
const mouseup = fromEvent(document, 'mouseup');
const mousemove = fromEvent(document, 'mousemove');
const mousedown = fromEvent(document, 'mousedown');

function dragSquare(document, value) {

}


source.subscribe(
	// next() function
	value => mouseTracker(document, value),
	// error function
	e => mouseTracker(document, error),
	// complete function
	() => mouseTracker(document, 'complete')
);

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