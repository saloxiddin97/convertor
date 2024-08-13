const btn = document.querySelector('button');
const fromSelect = document.querySelector('#fromSelect');
const toSelect = document.querySelector('#toSelect');
const convert = document.querySelector('#convert');
const inputVal = document.querySelector('input');

btn.addEventListener('click', async (e) => {
  e.preventDefault();

  let fromVal = fromSelect.value;
  let toVal = toSelect.value;
  let amount = +inputVal.value || 0;

  console.log(fromVal, toVal);

  let response = await fetch(
    `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromVal}&currencies=${toVal}`,
    {
      headers: {
        'x-rapidapi-key': 'fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617',
      },
    }
  );

  let data = await response.json();
  console.log(data);

  let result = amount * data.result[toVal.toUpperCase()];

  convert.textContent = `${result.toFixed(2)} ${toVal.toUpperCase()}`;
});