const convertFahrenheit = () => {
    let celsius = document.getElementById('celsius').value;
    let fahrenheitResult = (1.8 * celsius + 32);

    let result = fahrenheitResult.toFixed(2);

    document.getElementById('celsius').value = celsius;
    document.getElementById('fahrenheit').value = result;




}
const convertCelsius = () => {
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celsiusResult = (fahrenheit - 32) / 1.8;

    let result = celsiusResult.toFixed(2);

    document.getElementById('celsius').value = result;
    document.getElementById('fahrenheit').value = fahrenheit;




}

const Clear = () => {
    document.getElementById('celsius').value = " ";
    document.getElementById('fahrenheit').value = " ";

}