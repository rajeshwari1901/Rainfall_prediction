🌧️ Rainfall Prediction App

🧱 HTML Structure
- The app is built using a simple HTML form inside a `<div class="container">`.
- It collects four key weather inputs:
  - **Temperature (°C)**
  - **Humidity (%)**
  - **Pressure (hPa)**
  - **Wind Speed (km/h)**
- A button labeled **Predict Rainfall** triggers the prediction.
- The result is displayed in the `<div id="result">`.

🎨 CSS Styling
- The **background image** is applied to the entire `body` using a weather-themed photo from Unsplash.
- The page is styled to center the form using `flexbox`, with a clean white container and subtle shadows.
- Inputs and buttons are styled for a modern, user-friendly look:
  - Rounded corners
  - Hover effects
  - Responsive layout

 🧠 JavaScript Logic
- When the form is submitted, JavaScript intercepts the default behavior using `e.preventDefault()`.
- It reads the values from the form, converts them to numbers, and applies a **simple formula** to simulate rainfall prediction:

```javascript
let predictedRain = (humidity * 0.3 + (1000 - pressure) * 0.2 + windspeed * 0.1).toFixed(2);
```

- This formula is a basic simulation:
  - Higher **humidity** increases rainfall likelihood.
  - Lower **pressure** often signals stormy weather.
  - Higher **wind speed** can contribute to rain formation.
- The result is displayed as:  
  **Predicted Rainfall: X mm**


📝 Summary
This app is a beginner-friendly weather tool that uses basic meteorological inputs to simulate rainfall prediction. It combines clean design, interactive form handling, and a simple algorithm to deliver a functional and educational experience.


