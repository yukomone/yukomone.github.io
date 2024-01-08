document.querySelector('#textupper').addEventListener('input',textUpper);
document.querySelector('#textlower').addEventListener('input',textLower);
document.querySelector('#textlength').addEventListener('input',textLength);
document.querySelector('#texttrimming').addEventListener('input',textTrimming);
document.querySelector('#texttrimminglength').addEventListener('input',textTrimming);

function textUpper() {
    let text = document.querySelector('#textupper').value;
    text = text.toUpperCase();
    document.querySelector('#resultupper').value = text;
    
    document.querySelector("textarea").addEventListener('input', autoResize, false);
    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        document.querySelector('#resultupper').style.height = 'auto';
        document.querySelector('#resultupper').style.height = this.scrollHeight + 'px';
    }
}
function buttonUpper() {
    let text = document.querySelector("#resultupper");
    text.select();
    document.execCommand("copy");
}

function textLower() {
    let text = document.querySelector('#textlower').value;
    text = text.toLowerCase();
    document.querySelector('#resultlower').value = text;
    
    document.querySelector("#textlower").addEventListener('input', autoResize1, false);
    function autoResize1() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        document.querySelector('#resultlower').style.height = 'auto';
        document.querySelector('#resultlower').style.height = this.scrollHeight + 'px';
    }
}
function buttonLower() {
    let text = document.querySelector("#resultlower");
    text.select();
    document.execCommand("copy");
}

function textLength() {
    let text = document.querySelector('#textlength').value;
    length = text.length;
    document.querySelector('#resultlength').value = length;
    
    document.querySelector("#textlength").addEventListener('input', autoResize2, false);
    function autoResize2() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
}
function buttonLength() {
    let text = document.querySelector("#resultlength");
    text.select();
    document.execCommand("copy");
}

function textTrimming() {
    let text = document.querySelector('#texttrimming').value;
    let length = document.querySelector('#texttrimminglength').value;
    text = text.substr(0, length);
    document.querySelector('#resulttrimming').value = text;
    
    document.querySelector("#texttrimming").addEventListener('input', autoResize3, false);
    function autoResize3() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        document.querySelector('#resulttrimming').style.height = 'auto';
        document.querySelector('#resulttrimming').style.height = this.scrollHeight + 'px';
    }
}
function buttonTrimming() {
    let text = document.querySelector("#resulttrimming");
    text.select();
    document.execCommand("copy");
}


