document.addEventListener('input', calc);

var paragraphs = document.querySelectorAll('#shop .count p');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('click', changeInput);
    }

function changeInput() {
    if(this.textContent == '-' && this.nextElementSibling.value > 0) this.nextElementSibling.value -= 1;
    if(this.textContent == '+') this.previousElementSibling.value = Number(this.previousElementSibling.value) + 1;
    calc();
}

function calc() {
    const remote = document.querySelector('#remote').value;
    const premium = document.querySelector('#premium').value;
    const egginc = document.querySelector('#egginc').value;
    const superinc = document.querySelector('#superinc').value;
    const poffin = document.querySelector('#poffin').value;
    pokeball = document.querySelector('#pokeball').value;
    const incense = document.querySelector('#incense').value;
    const rocket = document.querySelector('#rocket').value;
    const star = document.querySelector('#star').value;
    const luckyegg = document.querySelector('#luckyegg').value;
    const potion = document.querySelector('#potion').value;
    const revive = document.querySelector('#revive').value;
    const glacial = document.querySelector('#glacial').value;
    const mossy = document.querySelector('#mossy').value;
    const magnetic = document.querySelector('#magnetic').value;
    const rainy = document.querySelector('#rainy').value;
    const lure = document.querySelector('#lure').value;
    const itembag = document.querySelector('#itembag').value;
    const storage = document.querySelector('#storage').value;
    const postcard = document.querySelector('#postcard').value;
    const sticker = document.querySelector('#sticker').value;
   
    cost = egginc*150 + superinc*200 + poffin*100 + rocket*200 + potion*20 + revive*30 + glacial*180 + mossy*180 + magnetic*180 + rainy*180 + itembag*200 + storage*200 + postcard*100;
    cost += (Math.floor(remote/3)*525 + (remote%3)*195);
    cost += (Math.floor(premium/3)*250 + (premium%3)*100);
    if(pokeball/200 >= 1) {
        cost += Math.floor(pokeball/200)*800;
        pokeball = pokeball - (Math.floor(pokeball/200)*200);
    }
    if(pokeball/100 >= 1) {
        cost += Math.floor(pokeball/100)*460;
        pokeball = pokeball - (Math.floor(pokeball/100)*100);
    } 
    cost += pokeball*5;
    cost += (Math.floor(incense/8)*250 + (incense%8)*40);
    cost += (Math.floor(star/8)*640 + (star%8)*100);
    cost += (Math.floor(luckyegg/8)*500 + (star%8)*80);
    cost += (Math.floor(lure/8)*680 + (lure%8)*100);
    cost += (Math.floor(sticker/30)*80 + (sticker%30)*3.5);

    if(cost == 0) costText=`<p>TOTAL</p><div id="outputcoins"><img src='https://github.com/PokeMiners/pogo_assets/blob/master/Images/Items/Item_COIN_01.png?raw=true'><span>0</span></div>`;
    else costText = `<p>TOTAL</p><div id="outputcoins"><img src='https://github.com/PokeMiners/pogo_assets/blob/master/Images/Items/Item_COIN_01.png?raw=true'><span>`+ cost + '</span></div>';
    document.querySelector('#output').innerHTML = costText;
    
    
    const boxValue = document.querySelector('#boxcost').value;
    if(boxValue != '') {
        if(cost == 0) document.querySelector('#saving').innerHTML = '';
        else if(boxValue == cost) document.querySelector('#saving').innerHTML = '0%';
        else if(boxValue < cost) document.querySelector('#saving').innerHTML = '<span style="color: green;">-' + (100 - (boxValue/cost * 100).toFixed(0)) +'%</span>';
        else document.querySelector('#saving').innerHTML = '<span style="color: red;">+' + (boxValue/cost * 100).toFixed(0) +'%</span>';
    }
}