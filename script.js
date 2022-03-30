window.addEventListener('load', () => {
    let lon;
    let lat;

    const city = document.getElementById('city');
    const degree = document.getElementById('degree')
    const summary = document.getElementById('summary')
    const icon = document.getElementById('icon')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            
            //openweather api key
            let key = '9a4aa4da44c72132f455fafa96b4a94e'

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${key}`
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    city.textContent = data.name;
                    degree.textContent = `${data.main.temp} °C`;
                    summary.textContent = data.weather[0].description;
                    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    console.log(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
                })
        })
    }
})