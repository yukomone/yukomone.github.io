const colorsArray = {
    "#FAFAFA": "Alabaster",
    "#FFC107": "Amber",
    "#00FFFF": "Aqua",
    "#F0FFFF": "Azure",
    "#F5F5DC": "Beige",
    "#FFE4C4": "Bisque",
    "#000000": "Black",
    "#0000FF": "Blue",
    "#DE5D83": "Blush",
    "#8C3A3A": "Brick",
    "#CD7F32": "Bronze",
    "#A52A2A": "Brown",
    "#F0DC82": "Buff",
    "#800020": "Burgundy",
    "#007BA7": "Cerulean",
    "#F7E7CE": "Champagne",
    "#36454F": "Charcoal",
    "#7FFF00": "Chartreuse",
    "#D2691E": "Chocolate",
    "#0047AB": "Cobalt",
    "#FF7F50": "Coral",
    "#DC143C": "Crimson",
    "#1560BD": "Denim",
    "#50C878": "Emerald",
    "#E5AA70": "Fawn",
    "#EEDC82": "Flax",
    "#FF00FF": "Fuchsia",
    "#FFD700": "Gold",
    "#808080": "Gray",
    "#008000": "Green",
    "#90796E": "Hazelnut",
    "#4B0082": "Indigo",
    "#FFFFF0": "Ivory",
    "#00A86B": "Jade",
    "#E6E6FA": "Lavender",
    "#FFF700": "Lemon",
    "#C8A2C8": "Lilac",
    "#00FF00": "Lime",
    "#C04000": "Mahogany",
    "#EAA221": "Marigold",
    "#800000": "Maroon",
    "#E0B0FF": "Mauve",
    "#BDFCC9": "Mint",
    "#AD4F09": "Mocha",
    "#000080": "Navy",
    "#808000": "Olive",
    "#353839": "Onyx",
    "#FFA500": "Orange",
    "#FFE5B4": "Peach",
    "#EAE0C8": "Pearl",
    "#CCCCFF": "Periwinkle",
    "#8BA8B7": "Pewter",
    "#FFC0CB": "Pink",
    "#DDA0DD": "Plum",
    "#800080": "Purple",
    "#E30B5D": "Raspberry",
    "#FF0000": "Red",
    "#FF007F": "Rose",
    "#E0115F": "Ruby",
    "#F4C430": "Saffron",
    "#BCB88A": "Sage",
    "#FA8072": "Salmon",
    "#0F52BA": "Sapphire",
    "#FF2400": "Scarlet",
    "#704214": "Sepia",
    "#A0522D": "Sienna",
    "#C0C0C0": "Silver",
    "#708090": "Slate",
    "#738595": "Steel",
    "#D2B48C": "Tan",
    "#483C32": "Taupe",
    "#008080": "Teal",
    "#E2725B": "Terracotta",
    "#40E0D0": "Turquoise",
    "#EE82EE": "Violet",
    "#F5DEB3": "Wheat",
    "#FFFFFF": "White",
    "#FFFF00": "Yellow",
    "#FFF0F5": "Lavender Blush",
    "#7CFC00": "Lawn Green",
    "#FFFACD": "Lemon Chiffon",
    "#ADD8E6": "Light Blue",
    "#F08080": "Light Coral",
    "#E0FFFF": "Light Cyan",
    "#FAFAD2": "Light Golden Rod Yellow",
    "#D3D3D3": "Light Gray",
    "#90EE90": "Light Green",
    "#FFB6C1": "Light Pink",
    "#FFA07A": "Light Salmon",
    "#20B2AA": "Light Sea Green",
    "#87CEFA": "Light Sky Blue",
    "#778899": "Light Slate Gray",
    "#B0C4DE": "Light Steel Blue",
    "#FFFFE0": "Light Yellow",
    "#32CD32": "Lime Green",
    "#FAF0E6": "Linen",
    "#66CDAA": "Medium Aqua Marine",
    "#0000CD": "Medium Blue",
    "#BA55D3": "Medium Orchid",
    "#9370DB": "Medium Purple",
    "#3CB371": "Medium Sea Green",
    "#7B68EE": "Medium Slate Blue",
    "#00FA9A": "Medium Spring Green",
    "#48D1CC": "Medium Turquoise",
    "#C71585": "Medium Violet Red",
    "#191970": "Midnight Blue",
    "#F5FFFA": "Mint Cream",
    "#FFE4E1": "Misty Rose",
    "#FFE4B5": "Moccasin",
    "#FFDEAD": "Navajo White",
    "#FDF5E6": "Old Lace",
    "#6B8E23": "Olive Drab",
    "#FF4500": "Orange Red",
    "#DA70D6": "Orchid",
    "#EEE8AA": "Pale Golden Rod",
    "#98FB98": "Pale Green",
    "#AFEEEE": "Pale Turquoise",
    "#DB7093": "Pale Violet Red",
    "#FFEFD5": "Papaya Whip",
    "#FFDAB9": "Peach Puff",
    "#CD853F": "Peru",
    "#B0E0E6": "Powder Blue",
    "#663399": "Rebecca Purple",
    "#BC8F8F": "Rosy Brown",
    "#4169E1": "Royal Blue",
    "#8B4513": "Saddle Brown",
    "#F4A460": "Sandy Brown",
    "#2E8B57": "Sea Green",
    "#FFF5EE": "Sea Shell",
    "#A0522D": "Sienna",
    "#C0C0C0": "Silver",
    "#87CEEB": "Sky Blue",
    "#6A5ACD": "Slate Blue",
    "#708090": "Slate Gray",
    "#FFFAFA": "Snow",
    "#00FF7F": "Spring Green",
    "#4682B4": "Steel Blue",
    "#D8BFD8": "Thistle",
    "#FF6347": "Tomato",
    "#40E0D0": "Turquoise",
    "#EE82EE": "Violet",
    "#F5DEB3": "Wheat",
    "#F5F5F5": "White Smoke",
    "#9ACD32": "Yellow Green",
  };
const numbersEveryFive = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
onload = setColor("#000000");

  document.querySelector('#colorpicker').addEventListener('input', pickerColor);
  document.querySelector('#hex').addEventListener('input', inputColor);
  
function inputColor() {
    let color = document.querySelector('#hex').value;
    document.querySelector('#colorpicker').value = color;
    setColor(color);
}
function pickerColor() {
    let color = document.querySelector('#colorpicker').value;
    document.querySelector('#hex').value = color;
    setColor(color);
}
function setColor(color) {
    color = color.toUpperCase();
    let name = "Black";
    if (color in colorsArray) {
        name = colorsArray[color];
      } else {
        name = "Name undefined<div id='note'>Only some of the colors have their own names(try #FF0000)</div>";
      }
    document.querySelector('.pname').innerHTML = name;
    document.querySelector('.phex').innerHTML = color;
    let chColorText = document.querySelector('.chcolortext');
    document.querySelectorAll('.chcolortext').forEach(chColorText => chColorText.style.color = color);
    let chColorBackground = document.querySelector('.chcolorbackground');
    document.querySelectorAll('.chcolorbackground').forEach(chColorBackground => chColorBackground.style.backgroundColor = color);
    document.querySelector('h1').style.textDecorationColor = color;
    let chColorShadow = document.querySelector('.chcolorshadow');
    document.querySelectorAll('.chcolorshadow').forEach(chColorShadow => chColorShadow.style.textShadow = '0px 2px 10px '+color);
    let chColorShadow2 = document.querySelector('.chcolorshadow2');
    document.querySelectorAll('.chcolorshadow2').forEach(chColorShadow2 => chColorShadow2.style.textShadow = '5px 3px '+color);
    let chColorBorder = document.querySelector('.chcolorborder');
    document.querySelectorAll('.chcolorborder').forEach(chColorBorder => chColorBorder.style.border = '10px '+color+' dashed');


    color = color.replace(/^#/, '');
    r = color.substr(0, 2);
    g = color.substr(2, 2);
    b = color.substr(4, 2);
    r = parseInt(r,16);
    g = parseInt(g,16);
    b = parseInt(b,16);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('.prgb').innerHTML = rgb;
    color = "#"+color;
    let hslArray = HEXToHSL(r,g,b);
    let h = hslArray[0];
    let s = hslArray[1];
    let l = hslArray[2];
    let hsl = `hsl(${h}, ${s}%, ${l}%)`;
    function HEXToHSL(r,g,b){
        r = r / 255;
        g = g / 255;
        b = b / 255;

        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        delta = max - min;

        let h, s, l;
        if (delta === 0) {
            h = 0;
        } else if (max === r) {
            h = ((g - b) / delta) % 6;
        } else if (max === g) {
            h = (b - r) / delta + 2;
        } else {
            h = (r - g) / delta + 4;
        }

        h = Math.round(h * 60);
        if (h < 0) h += 360;

        l = (max + min) / 2;

        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(0);
        l = +(l * 100).toFixed(0);
        let hslArray = [h, s, l];
        return hslArray;
    }
    //hue 0-359
    let hue="";
    for(i=0; i<360;i=i+15){
        if(h>=i && h<i+15){
            let hueOperation = `
            <div class="small" style="background-color: lightgray;">
                <div class="smallcolor" style="background-color: ${rgb};"></div>
                <p class="smallp">${hsl}</p>
            </div>
            `;
            hue = hue + hueOperation;
        }
        else {
            let hueOperation = `
            <div class="small">
                <div class="smallcolor" style="background-color: hsl(${i}, ${s}%, ${l}%);"></div>
                <p class="smallp">hsl(${i}, ${s}%, ${l}%)</p>
            </div>
            `;
            hue = hue + hueOperation;
        }
    }
    document.querySelector('#hue').innerHTML = hue;

    //saturation 0-100
    let saturation="";
    for(i=0; i<=100;i=i+5){
        if(s>=i && s<i+5){
            let saturationOperation = `
            <div class="small" style="background-color: lightgray;">
                <div class="smallcolor" style="background-color: ${rgb};"></div>
                <p class="smallp">${hsl}</p>
            </div>
            `;
            saturation = saturation + saturationOperation;
        }
        else {
            let saturationOperation = `
            <div class="small">
                <div class="smallcolor" style="background-color: hsl(${h}, ${i}%, ${l}%);"></div>
                <p class="smallp">hsl(${h}, ${i}%, ${l}%)</p>
            </div>
            `;
            saturation = saturation + saturationOperation;
        }
    }
    document.querySelector('#saturation').innerHTML = saturation;

    //lightness 0-100
    let lightness="";
    for(i=0; i<=100;i=i+5){
        if(l>=i && l<i+5){
            let lightnessOperation = `
            <div class="small" style="background-color: lightgray;">
                <div class="smallcolor" style="background-color: ${rgb};"></div>
                <p class="smallp">${hsl}</p>
            </div>
            `;
            lightness = lightness + lightnessOperation;
        }
        else {
            let lightnessOperation = `
            <div class="small">
                <div class="smallcolor" style="background-color: hsl(${h}, ${s}%, ${i}%);"></div>
                <p class="smallp">hsl(${h}, ${s}%, ${i}%)</p>
            </div>
            `;
            lightness = lightness + lightnessOperation;
        }
    }
    document.querySelector('#lightness').innerHTML = lightness;


    //red,green,blue
    let redSlider = (r/255 * 100)+"%";
    let greenSlider = (g/255 * 100)+"%";
    let blueSlider =  (b/255 * 100)+"%";
    document.querySelector('#red').innerHTML = `<span class='rgbnumber'>${r}</span><div style='background-color: red; height: 100%; width: ${redSlider}; border-radius: 10px;'></div>`;
    document.querySelector('#green').innerHTML = `<span class='rgbnumber'>${g}</span><div style='background-color: green; height: 100%; width: ${greenSlider}; border-radius: 10px;'></div>`;
    document.querySelector('#blue').innerHTML = `<span class='rgbnumber'>${b}</span><div style='background-color: blue; height: 100%; width: ${blueSlider}; border-radius: 10px;'></div>`;

}

