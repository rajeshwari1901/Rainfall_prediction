document.getElementById('rainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let temperature = parseFloat(this.temperature.value);
    let humidity = parseFloat(this.humidity.value);
    let pressure = parseFloat(this.pressure.value);
    let windspeed = parseFloat(this.windspeed.value);

    // Simple simulation formula for rainfall (for demo purposes)
    let predictedRain = (humidity * 0.3 + (1000 - pressure) * 0.2 + windspeed * 0.1).toFixed(2);

    document.getElementById('result').innerText = `Predicted Rainfall: ${predictedRain} mm`;
});