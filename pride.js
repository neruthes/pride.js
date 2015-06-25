(function (backgroundUrl, date, d, inputDivTag, inputStyleTag, inputAnrhorTag, defaultHeight, hoverHeight) {
	if (6 <= date.getMonth() <= 7) {
		// Create <style> tag
		var styleTag = inputStyleTag || d.createElement('style');
		styleTag.setAttribute('id', 'gay-pride-js-style-tag');
		styleTag.setAttribute('type', 'text/css');
		styleTag.innerHTML = '\
		#gay-pride-js-div {\
			height: __HOVER_HEIGHT__px;\
		}\
		#gay-pride-js-anchor {\
			background: url(__BG_URL__) no-repeat top scroll;\
			background-size: cover;\
			display: block;\
			position: absolute;\
			top: 0;\
			left: 0;\
			width: 100%;\
			width: 100vw;\
			height: __DEFAULT_HEIGHT__px;\
			z-index: 99999;\
		}\
		#gay-pride-js-div:hover #gay-pride-js-anchor {\
			height: __HOVER_HEIGHT__px;\
		}\
		#gay-pride-js-anchor:hover {\
			height: __HOVER_HEIGHT__px;\
			background-size: cover;\
		}\
		'.replace(/__BG_URL__/g, backgroundUrl)
		.replace(/__DEFAULT_HEIGHT__/g, defaultHeight)
		.replace(/__HOVER_HEIGHT__/g, hoverHeight);
		d.head.appendChild(styleTag);

		// Create <div> tag
		var divTag = inputDivTag || d.createElement('div');
		divTag.setAttribute('id', 'gay-pride-js-div');

		// Create <a> tag
		var aTag = inputAnrhorTag || d.createElement('a');
		aTag.setAttribute('id', 'gay-pride-js-anchor');
		aTag.href = 'https://en.wikipedia.org/wiki/Gay_pride';

		// Create <span> tag
		var span = d.createElement('span');
		span.setAttribute('style', 'opacity: 0;');
		span.innerHTML = 'LGBT Pride';

		aTag.appendChild(span);
		divTag.appendChild(aTag);
		document.body.insertBefore(divTag, document.body.firstChild);
	};
})('/JN-Lab/other-images/rainbow-sign.svg',
(new Date()), document,
document.getElementById('gay-pride-js-div'), document.getElementById('gay-pride-js-style-tag'), document.getElementById('gay-pride-js-anchor'),
5, 20);

/*
 The first parameter provides the URL of the `rainbow-sign.svg` included in this repository.
 The last two parameters define the height of the rainbow by default and on hover, respectively.
*/
