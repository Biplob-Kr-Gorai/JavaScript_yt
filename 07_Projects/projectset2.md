const form = document.querySelector('form');
// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${bmi}</span>`;
    // const r = bmi;
    const dResult = document.querySelector('#dResult');
    if (bmi > 24.9) {
      dResult.innerHTML = `Overweight! ${bmi}`;
    } else if (bmi > 18.9 && bmi < 24.9) {
      dResult.innerHTML = `Normal! ${bmi}`;
    } else {
      dResult.innerHTML = `Undererweight! ${bmi}`;
    }
  }

  // result.innerHTML = `${height}`;
});
