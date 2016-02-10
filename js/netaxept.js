function addIframe() {
    var hook = document.getElementById('iframePosition');
    hook.parentNode.replaceChild(createIframe(), hook);
}

function createIframe() {
    var _iframeHtml = document.createElement('iframe');
    _iframeHtml.src = "http://localhost:3001"
    _iframeHtml.id = 'myIframe';
    _iframeHtml.width = '100%';
    _iframeHtml.frameBorder = '0';
    _iframeHtml.style['display'] = 'block';
    _iframeHtml.sandbox = "allow-scripts allow-forms";//block access to navigation from iframe scripts
    return _iframeHtml;
}

function addFullScreenStyle(iframe) {
    iframe.style['position'] = 'fixed';
    iframe.style['top'] = '0px';
    iframe.style['left'] = '0px';
    iframe.style['right'] = '0px';
    iframe.style['bottom'] = '0px';
    iframe.style['width'] = '100%';
    iframe.style['height'] = '100%';
    iframe.style['border'] = "none";
    iframe.style['margin'] = '0';
    iframe.style['padding'] = '0';
    iframe.style['overflow'] = 'hidden';
    iframe.style['z-index'] = '999999';
    iframe.style['background-color'] = 'white';
}

function setHeight(e, iframe) {
    var iframeHeight = e.data[1];
    iframe.height = iframeHeight;
}

function replaceIframeElement(iframe) {
    var replacement = document.createElement('div');
    replacement.id = 'iframePosition';
    var replacement = iframe.parentNode.replaceChild(replacement, iframe);
}

function reactToEvent(e) {

    var iframe = document.getElementById('myIframe');
    var eventName = e.data[0];

    switch (eventName) {
        case 'setHeight':
            setHeight(e, iframe);
            break;
        case 'goFullScreen':
            addFullScreenStyle(iframe);
            break;
        case 'hideFrame':
            replaceIframeElement(iframe)
            break;
    }
}
function messageEventResponse(e) {
    reactToEvent(e);
}

window.addEventListener('message', messageEventResponse, false);
