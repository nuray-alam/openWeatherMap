const loadWeather = () => {
    // getting input text
    const locationInput = document.getElementById('search-input');
    const location = locationInput.value;
    //clearing the input value
    locationInput.value = '';
    const apiKey = 'c579a044c6e0ff4ac5098cf98ad66082';
    //fetching the data
    if (location == '') {
        alert('Enter the location for weather information');
    }
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => displayData(data))
    }

}


const displayData = data => {
    const searchResultField = document.getElementById('search-result');
    if (data.cod == 200) {
        const name = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        // getting all field
        // const cityNameField = document.getElementById('city-name-field');
        // const temperatureField = document.getElementById('temperature-field');
        // const descriptionField = document.getElementById('description-field');

        // changing the field value with result

        // cityNameField.innerText = name;
        // temperatureField.innerText = temp;
        // descriptionField.innerText = description;
        // console.log(iconCode);
        // document.getElementById('icon').innerHTML = `
        // <img src="${iconUrl}"></img>
        // `;
        searchResultField.innerHTML = `
    <p id="icon">
    <img src="${iconUrl}" alt="" />
  </p>
  <h1><span id="city-name-field">${name}</span></h1>
  <h3 class="fs-2">${temp}°C</h3>
  <h1 class="fs-3">${description}</h1>
    `;
    }
    else {
        searchResultField.innerHTML = `
        <p class="text-danger fs-4"> error ${data.cod}<p>
        `;
    }

}


// c579a044c6e0ff4ac5098cf98ad66082