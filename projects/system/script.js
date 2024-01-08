
function winoff(){
    document.getElementById('winpanel').style.display='none';

}
function win(){
    document.getElementById('winpanel').style.backgroundColor='rgb(31, 31, 31)';
    document.getElementById('winpanel').style.width='30%';
    document.getElementById('winpanel').style.height='60%';
    document.getElementById('winpanel').style.position='absolute';
    document.getElementById('winpanel').style.bottom='20px';
    document.getElementById('winpanel').style.display='block';

    document.getElementById('winpanel').innerHTML=`<div><img src='./images/icon.png' width='30px'><span id='winpanelelemtext'>&nbsp;Cats</span></div>`;
}
setInterval( function czas(){
data = new Date();
document.getElementById('data').innerHTML=data.toLocaleString();
},1000);