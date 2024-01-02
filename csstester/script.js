window.addEventListener('load',insertContent);
window.addEventListener('load',insertStyle);

document.querySelector('#contenteditable').addEventListener('input', insertContent);
document.querySelector('#styleeditable').addEventListener('input', insertStyle);

function insertContent() {
    content = document.querySelector('#contenteditable').value;
    document.querySelector('#content').innerHTML=content;
}
function insertStyle() {
    style = document.querySelector('#styleeditable').value;
    document.querySelector('style').innerHTML=style;
}
