# vidtotext
paused videos get OCR'd into text

## First Steps
- Get Image of Paused Video
	- [Pull html](https://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension)
	- Find relevant video element (with jQuery?)
	- [If is paused](https://stackoverflow.com/questions/6877403/how-to-tell-if-a-video-element-is-currently-playing), [turn element into image](https://stackoverflow.com/questions/10721884/render-html-to-an-image) 
	- An alternative to scraping the html for the video element would be to accept some sort of user input like a user-defined area (a click-and-drag square).
- Apply OCR to image
	- Tesseract.js is a possibility
	- Though tenserflow would be more versatile and, of course, more fun/cooler
- Output text from image

#### (icon isn't here to stay)