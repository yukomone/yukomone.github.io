function generate(){
    console.log("kot");
    for(let i=1;i<=5;i++){
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        
        rtemp=r;
        gtemp=g;
        btemp=b;
        r=r.toString(16);
        g=g.toString(16);
        b=b.toString(16);
        if(rtemp<16) r="0"+r;
        if(gtemp<16) g="0"+g;
        if(btemp<16) b="0"+b;
        

        colors[i] = "#"+r+g+b;
        console.log(colors[i]);
        colorword = "color"+i;
        colorHEX = "colorHEX"+i;
        c = "c"+i;
        console.log(colorword, colorHEX, c);
            document.getElementById(colorword).value = colors[i];
            document.getElementById(colorHEX).innerHTML=colors[i];
            document.getElementById(c).innerHTML=colors[i];
            document.getElementById(c).style.backgroundColor=colors[i];
    }
}
function color(numer){
    switch (numer){
        case 1:
            code = document.getElementById('color1').value;
            document.getElementById('colorHEX1').innerHTML=code;
            document.getElementById('c1').innerHTML=code;
            document.getElementById('c1').style.backgroundColor=code;
            break;
        case 2:
            code = document.getElementById('color2').value;
            document.getElementById('colorHEX2').innerHTML=code;
            document.getElementById('c2').innerHTML=code;
            document.getElementById('c2').style.backgroundColor=code;
            break;
        case 3:
            code = document.getElementById('color3').value;
            document.getElementById('colorHEX3').innerHTML=code;
            document.getElementById('c3').innerHTML=code;
            document.getElementById('c3').style.backgroundColor=code;
            break;
        case 4:
            code = document.getElementById('color4').value;
            document.getElementById('colorHEX4').innerHTML=code;
            document.getElementById('c4').innerHTML=code;
            document.getElementById('c4').style.backgroundColor=code;
            break;
        case 5:
            code = document.getElementById('color5').value;
            document.getElementById('colorHEX5').innerHTML=code;
            document.getElementById('c5').innerHTML=code;
            document.getElementById('c5').style.backgroundColor=code;
            break;
    }
    
}