var step = 1;
window.onload = resize;

function resize() {
    var height = document.getElementsByTagName("html")[0].scrollHeight;
    window.parent.postMessage(["setHeight", height], "*");
}

function goFullScreen() {
    window.parent.postMessage(['goFullScreen', {}], "*");
    location.href = "http://localhost:3003/test2.html";
}

function hideFrame() {
    window.parent.postMessage(['hideFrame', {}], "*")
}
function next() {
    showAndIncrement();
    resize();
}

function displayCardForm() {
    $('#creditCardForm').show();
    resize();
}

function hideAndReduce() {
    $('#section' + step).show();
}