const input = document.querySelector('#unit');
const button = document.querySelector('button');

const length = document.getElementById('meter-feet');
const volume = document.getElementById('liter-gallon');
const mass = document.getElementById('kilo-pound');

button.addEventListener('click', function () {
  convert(Number(input.value));
});

function convert(x) {
  let feet = (x * 3.281).toFixed(3);
  let meter = (x / 3.281).toFixed(3);
  let gallon = (x * 0.264).toFixed(3);
  let liter = (x / 0.264).toFixed(3);
  let pound = (x * 2.204).toFixed(3);
  let kilogram = (x / 2.204).toFixed(3);

  length.textContent = `${x} meters = ${feet} feet | ${x} feet = ${meter} meters`;
  volume.textContent = `${x} liters = ${gallon} gallons | ${x} gallons = ${liter} liters`;
  mass.textContent = `${x} kilos = ${pound} pounds | ${x} pounds = ${kilogram} kilos`;
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
