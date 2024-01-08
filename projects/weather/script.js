function ask1(){
    key = document.getElementById('api').value;
    town = document.getElementById('qe').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&q=${town}`)
        .then( res => {
            return res.json();
        })
        .then( data => {
            town = data.name;
            lon = data.coord.lon;
            lat = data.coord.lat;
            temp = data.main.temp;
            feels = data.main.feels_like;
            humidity = data.main.humidity;
            pressure = data.main.pressure;
            img = data.weather[0].icon;
            document.getElementById('mainresp').innerHTML=`
                <section id="space">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </section>
                <section id="resp">
                    <p id="namep"></p>
                    <img id="obrazek">
                    <p id="lonlat"></p>
                    <p id="temp"></p>
                    <p id="feels"></p>
                    <p id="humidity"></p>
                    <p id="pressure"></p>
                </section>`;
            document.getElementById('namep').innerHTML='Weather in...<br><br><span id="name">'+town+'</span>';
            document.getElementById('obrazek').src='./photos/'+img+'.png';
            document.getElementById('lonlat').innerHTML= lon+" "+lat;
            document.getElementById('temp').innerHTML=`Temperature: <span class='bold'>${Math.round(temp)}&deg;C</span>`;
            document.getElementById('feels').innerHTML=`Feels like: <span class='bold'>${Math.round(feels)}&deg;C</span>`;
            document.getElementById('humidity').innerHTML=`Humidity: <span class='bold'>${humidity}%</span>`;
            document.getElementById('pressure').innerHTML=`Pressure: <span class='bold'>${pressure}hPa</span>`;
        })
        .catch(function error(){
            document.getElementById('mainresp').innerHTML=`<section id="space">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                </section>
                <section id="resp">
                <p>error</p>
                </section>`;
        })
}
function ask2(){
    key = document.getElementById('api').value;
    lon = document.getElementById('lon').value;
    lat = document.getElementById('lat').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&lon=${lon}&lat=${lat}`)
        .then( res => {
            return res.json();
        })
        .then( data => {
            town = data.name;
            lon = data.coord.lon;
            lat = data.coord.lat;
            temp = data.main.temp;
            feels = data.main.feels_like;
            humidity = data.main.humidity;
            pressure = data.main.pressure;
            img = data.weather[0].icon;
            document.getElementById('mainresp').innerHTML=`   
                <section id="space">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </section>
                <section id="resp">
                    <p id="namep"></p>
                    <img id="obrazek">
                    <p id="lonlat"></p>
                    <p id="temp"></p>
                    <p id="feels"></p>
                    <p id="humidity"></p>
                    <p id="pressure"></p>
                </section>`;
            document.getElementById('namep').innerHTML='Weather in...<br><br><span id="name">'+town+'</span>';
            document.getElementById('obrazek').src='./photos/'+img+'.png';
            document.getElementById('lonlat').innerHTML= lon+" "+lat;
            document.getElementById('temp').innerHTML=`Temperature: <span class='bold'>${Math.round(temp)}&deg;C</span>`;
            document.getElementById('feels').innerHTML=`Feels like: <span class='bold'>${Math.round(feels)}&deg;C</span>`;
            document.getElementById('humidity').innerHTML=`Humidity: <span class='bold'>${humidity}%</span>`;
            document.getElementById('pressure').innerHTML=`Pressure: <span class='bold'>${pressure}hPa</span>`;
        })
        .catch(function error(){
            document.getElementById('mainresp').innerHTML=`<section id="space">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                </section>
                <section id="resp">
                <p>error</p>
                </section>`;
        })
}