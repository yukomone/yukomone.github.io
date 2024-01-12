let currentTime, currentPressure;
let lat, lon, cityName, errorEmpty;  

document.querySelector('#go').addEventListener('click', search);

async function search() {
    cityName = document.querySelector('#town').value;
    await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`)
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        if (results) {
            const city = results[0];
            lat = city.latitude;
            lon = city.longitude;

            document.querySelector('#response').innerHTML = `
            <p id="title__closest-record">Closest record</p>
            <p id="current"></p>
            <p id="title__chart">Chart</p>
            <div id="chart"></div>`;
        } else {
            document.querySelector('#response').innerHTML = `<p id="title__chart">Cannot find town</p>`;
        }
    })
    .catch(error => {
        console.error('Error (with lat&lon): ', error);
    });
    document.querySelector('#response').style.display = 'flex';
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=surface_pressure&hourly=surface_pressure&past_days=3&forecast_days=4`)
    .then(response => response.json())
    .then(data => {
        const results = data;
        currentTime = new Date(results.current.time);
        var hour = currentTime.getHours();
        var minute = currentTime.getMinutes();
        currentTime = currentTime.toLocaleString('en-EN', { month: 'short'}) + " " + currentTime.getDate() + " " + hour + ':' + (minute < 10 ? '0' : '') + minute;
        currentPressure = results.current.surface_pressure;

        past3Pressure = results.hourly.surface_pressure[12];
        past2Pressure = results.hourly.surface_pressure[36];
        past1Pressure = results.hourly.surface_pressure[60];
        
        past3Time = new Date(results.hourly.time[12]);
        past3Time = past3Time.toLocaleString('en-EN', { month: 'short'}) + " " + past3Time.getDate();
        past2Time = new Date(results.hourly.time[36]);
        past2Time = past2Time.toLocaleString('en-EN', { month: 'short'}) + " " + past2Time.getDate();
        past1Time = new Date(results.hourly.time[60]);
        past1Time = past1Time.toLocaleString('en-EN', { month: 'short'}) + " " + past1Time.getDate();
        
        next3Pressure = results.hourly.surface_pressure[156];
        next2Pressure = results.hourly.surface_pressure[132];
        next1Pressure = results.hourly.surface_pressure[108];
        
        next3Time = new Date(results.hourly.time[156]);
        next3Time = next3Time.toLocaleString('en-EN', { month: 'short'}) + " " + next3Time.getDate();
        next2Time = new Date(results.hourly.time[132]);
        next2Time = next2Time.toLocaleString('en-EN', { month: 'short'}) + " " + next2Time.getDate();
        next1Time = new Date(results.hourly.time[108]);
        next1Time = next1Time.toLocaleString('en-EN', { month: 'short'}) + " " + next1Time.getDate();

        todayPressure = results.hourly.surface_pressure[84];
        todayTime = new Date(results.hourly.time[84]);
        todayTime = todayTime.toLocaleString('en-EN', { month: 'short'}) + " " + todayTime.getDate();

        document.querySelector('#current').innerHTML = `date: ${currentTime}, pressure: ${currentPressure} hPa`;

        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);


        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Date', 'Pressure (hPa)'],
            [past3Time,  next3Pressure],
            [past2Time,  next2Pressure],
            [past1Time,  next1Pressure],
            [todayTime,  todayPressure],
            [next1Time,  next1Pressure],
            [next2Time,  next2Pressure],
            [next3Time,  next3Pressure]
            ]);

            var options = {
            title: '',
            curveType: 'function',
            legend: { position: 'bottom' }
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart'));

            chart.draw(data, options);
        }
    })
    .catch(error => {
        console.error('Error: ', error);
    });
}


  
    