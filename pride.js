(function (MSG) {
    var enablementCondition = [6,7].indexOf(MSG.date.getMonth()+1) === -1 ? false : true;
    if (document.querySelectorAll('meta[name="pridejs-config-duration"]').length !== 0) {
        // If the developer has a config for this lib
        var configDuration = document.querySelectorAll('meta[name="pridejs-config-duration"]')[0].getAttribute('content');
        switch (configDuration) {
            case 'regular':
                break;
            case 'extended':
                enablementCondition = [6,7].indexOf(MSG.date.getMonth) === 0 ? true : false;
                break;
            case 'always':
                enablementCondition = true;
                break;
            case 'never':
                // Who the hell will need this???
                enablementCondition = false;
                break;
            default:
                enablementCondition = true;
        };
    };
    if (enablementCondition) {
        // Create <style> tag
        var styleTag = MSG.inputStyleTag ? MSG.inputStyleTag : document.createElement('style');
        styleTag.setAttribute('id', 'gay-pride-js-style-tag');
        styleTag.setAttribute('type', 'text/css');
        var styleTagInnerHTML = '\
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
        '.replace(/__BG_URL__/g, MSG.backgroundUrl)
        .replace(/__DEFAULT_HEIGHT__/g, MSG.defaultHeight)
        .replace(/__HOVER_HEIGHT__/g, MSG.hoverHeight);
        styleTag.appendChild(document.createTextNode(styleTagInnerHTML));
        document.head.appendChild(styleTag);

        // Create <div> tag
        var divTag = MSG.inputDivTag ? MSG.inputDivTag : document.createElement('div');
        divTag.setAttribute('id', 'gay-pride-js-div');

        // Create <a> tag
        var aTag = MSG.inputAnrhorTag ? MSG.inputAnrhorTag : document.createElement('a');
        aTag.setAttribute('id', 'gay-pride-js-anchor');
        aTag.setAttribute('target', '_blank');
        aTag.href = 'https://en.wikipedia.org/wiki/Gay_pride';

        // Create <span> tag
        var span = document.createElement('span');
        span.setAttribute('style', 'opacity: 0;');
        span.innerHTML = 'LGBT Pride';

        aTag.appendChild(span);
        divTag.appendChild(aTag);
        document.body.insertBefore(divTag, document.body.firstChild);
    };
})({
    backgroundUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCA2MCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+cmFpbmJvdy1zaWduPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGMDAiIGQ9Ik0wIDBoMTB2MTBIMHoiLz48cGF0aCBmaWxsPSIjRkY5QjE3IiBkPSJNMTAgMGgxMHYxMEgxMHoiLz48cGF0aCBmaWxsPSIjRjJGRjAwIiBkPSJNMjAgMGgxMHYxMEgyMHoiLz48cGF0aCBmaWxsPSIjMjJGQzUxIiBkPSJNMzAgMGgxMHYxMEgzMHoiLz48cGF0aCBmaWxsPSIjMTQ1MkZGIiBkPSJNNDAgMGgxMHYxMEg0MHoiLz48cGF0aCBmaWxsPSIjRDgwMEZGIiBkPSJNNTAgMGgxMHYxMEg1MHoiLz48L2c+PC9zdmc+',
    date: (new Date()),
    d: document,
    inputDivTag: document.getElementById('gay-pride-js-div'),
    inputStyleTag: document.getElementById('gay-pride-js-style-tag'),
    inputAnrhorTag: document.getElementById('gay-pride-js-anchor'),
    defaultHeight: 4,
    hoverHeight: 10
});
