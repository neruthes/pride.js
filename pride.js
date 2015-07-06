(function (backgroundUrl1, backgroundUrl2, date, d, inputDivTag, inputStyleTag, inputAnrhorTag, defaultHeight, hoverHeight) {
    if (6 <= date.getMonth() <= 7) {
        // Create <style> tag
        var styleTag = inputStyleTag || d.createElement('style');
        styleTag.setAttribute('id', 'gay-pride-js-style-tag');
        styleTag.setAttribute('type', 'text/css');
        styleTag.innerHTML = '\
        @media print {\
            #gay-pride-js-div, #gay-pride-js-div * {\
                display: none !important;\
            }\
        }\
        #gay-pride-js-div {\
            position: absolute;\
            top: 0;\
            left: 0;\
            width: 100%;\
            width: 100vw;\
            height: __HOVER_HEIGHT__px;\
        }\
        #gay-pride-js-anchor {\
            background: url(__BG_URL_1__) no-repeat top scroll, url(__BG_URL_2__) no-repeat top scroll;\
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
        '.replace(/__BG_URL_1__/g, backgroundUrl1)
        .replace(/__BG_URL_2__/g, backgroundUrl2)
        .replace(/__DEFAULT_HEIGHT__/g, defaultHeight)
        .replace(/__HOVER_HEIGHT__/g, hoverHeight);
        d.head.appendChild(styleTag);

        // Create <div> tag
        var divTag = inputDivTag || d.createElement('div');
        divTag.setAttribute('id', 'gay-pride-js-div');

        // Create <a> tag
        var aTag = inputAnrhorTag || d.createElement('a');
        aTag.setAttribute('id', 'gay-pride-js-anchor');
        aTag.setAttribute('target', '_blank');
        aTag.href = 'https://en.wikipedia.org/wiki/Gay_pride';

        // Create <span> tag
        var span = d.createElement('span');
        span.setAttribute('style', 'opacity: 0;');
        span.innerHTML = 'LGBT Pride';

        aTag.appendChild(span);
        divTag.appendChild(aTag);
        document.body.insertBefore(divTag, document.body.firstChild);
    };
})('/JN-Lab/other-images/rainbow-sign.svg', '//joyneop.parseapp.com/JN-Lab/other-images/rainbow-sign.svg',
(new Date()), document,
document.getElementById('gay-pride-js-div'), document.getElementById('gay-pride-js-style-tag'), document.getElementById('gay-pride-js-anchor'),
5, 20);

// The first two parameters define primary and secondary URLs of `rainbow-sign.svg` privided within this repository, respectively.
// The last two parameters define height of the rainbow sign on default and on hover, respectively.
