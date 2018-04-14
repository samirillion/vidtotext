# vidtotext
paused videos get OCR'd into text

## First Steps
- [Pull html](https://stackoverflow.com/questions/11684454/getting-the-source-html-of-the-current-page-from-chrome-extension)
- Find relevant video element
- If is paused, turn element into image
- Apply OCR to image
	- Tesseract.js is a possibility
	- Though tenserflow would be more versatile and, of course, more fun/cooler
- Output text from image

#### icon isn't here to stay