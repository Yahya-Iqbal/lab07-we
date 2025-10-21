const display = document.getElementById("display");
const submenu = document.getElementById("submenu");
const extraDiv = document.getElementById("extra");


document.getElementById("menu").addEventListener("click", function() {
  submenu.style.display = submenu.style.display === "block" ? "none" : "block";
});


function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  extraDiv.innerHTML = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}


function showScientific() {
  extraDiv.innerHTML = `
    <h4>Scientific Mode</h4>
    <button onclick="scientific('sqrt')">√</button>
    <button onclick="scientific('pow')">x²</button>
    <button onclick="scientific('sin')">sin</button>
    <button onclick="scientific('cos')">cos</button>
    <button onclick="scientific('tan')">tan</button>
  `;
  submenu.style.display = "none";
}

function scientific(type) {
  let val = parseFloat(display.value);
  if (isNaN(val)) return;
  if (type === 'sqrt') display.value = Math.sqrt(val);
  else if (type === 'pow') display.value = Math.pow(val, 2);
  else if (type === 'sin') display.value = Math.sin(val * Math.PI / 180).toFixed(3);
  else if (type === 'cos') display.value = Math.cos(val * Math.PI / 180).toFixed(3);
  else if (type === 'tan') display.value = Math.tan(val * Math.PI / 180).toFixed(3);
}


function showUnitConversion() {
  extraDiv.innerHTML = `
    <h4>Unit Conversion</h4>
    <p><small>(Meters ↔ Kilometers)</small></p>
    <input type="number" id="unitVal" placeholder="Enter meters">
    <button onclick="convertToKM()">To KM</button>
    <button onclick="convertToM()">To M</button>
  `;
  submenu.style.display = "none";
}

function convertToKM() {
  let val = document.getElementById("unitVal").value;
  display.value = (val / 1000) + " km";
}

function convertToM() {
  let val = document.getElementById("unitVal").value;
  display.value = (val * 1000) + " m";
}


function showCurrencyConversion() {
  extraDiv.innerHTML = `
    <h4>Currency Conversion</h4>
    <p><small>(USD ↔ PKR)</small></p>
    <input type="number" id="curVal" placeholder="Enter amount">
    <button onclick="usdToPkr()">USD → PKR</button>
    <button onclick="pkrToUsd()">PKR → USD</button>
  `;
  submenu.style.display = "none";
}

function usdToPkr() {
  let val = document.getElementById("curVal").value;
  display.value = (val * 280) + " PKR"; 
}

function pkrToUsd() {
  let val = document.getElementById("curVal").value;
  display.value = (val / 280).toFixed(2) + " USD";
}
