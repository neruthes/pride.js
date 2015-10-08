(function (MSG) {
    if (6 <= MSG.date.getMonth() && MSG.date.getMonth() <= 7) {
        // Create <style> tag
        var styleTag = MSG.inputStyleTag || MSG.d.createElement('style');
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
        '.replace(/__BG_URL_1__/g, MSG.backgroundUrl1)
        .replace(/__BG_URL_2__/g, MSG.backgroundUrl2)
        .replace(/__DEFAULT_HEIGHT__/g, MSG.defaultHeight)
        .replace(/__HOVER_HEIGHT__/g, MSG.hoverHeight);
        MSG.d.head.appendChild(MSG.styleTag);

        // Create <div> tag
        var divTag = MSG.inputDivTag || MSG.d.createElement('div');
        divTag.setAttribute('id', 'gay-pride-js-div');

        // Create <a> tag
        var aTag = MSG.inputAnrhorTag || MSG.d.createElement('a');
        aTag.setAttribute('id', 'gay-pride-js-anchor');
        aTag.setAttribute('target', '_blank');
        aTag.href = 'https://en.wikipedia.org/wiki/Gay_pride';

        // Create <span> tag
        var span = MSG.d.createElement('span');
        span.setAttribute('style', 'opacity: 0;');
        span.innerHTML = 'LGBT Pride';

        aTag.appendChild(span);
        divTag.appendChild(aTag);
        document.body.insertBefore(divTag, document.body.firstChild);
    };
})({
    backgroundUrl1: '/JN-Lab/other-images/rainbow-sign.svg',
    backgroundUrl2: '//joyneop.parseapp.com/JN-Lab/other-images/rainbow-sign.svg',
    date: (new Date()),
    d: document,
    inputDivTag: document.getElementById('gay-pride-js-div'),
    inputStyleTag: document.getElementById('gay-pride-js-style-tag'),
    inputAnrhorTag: document.getElementById('gay-pride-js-anchor'),
    defaultHeight: 5,
    hoverHeight: 20
});

// The first two parameters define primary and secondary URLs of `rainbow-sign.svg` privided within this repository, respectively.
// The last two parameters define height of the rainbow sign on default and on hover, respectively.
