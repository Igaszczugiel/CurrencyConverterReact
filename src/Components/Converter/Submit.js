import React from 'react';
import Converter from '../Converter';

let result = document.getElementById("result");
let form = document.querySelector('#convertIt');

form.addEventListener("submit", Submit);

function Submit(event) {
    event.preventDefault();
    // this stops form from default behaviour (page reload)
    let currencyCode = document.querySelector('#currencyListFrom').value;
    let url = `https://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`;

    fetch(url).then(resp => resp.json()).then((response) => {
        console.log(response.rates[0].mid);
        let currencyRate = response.rates[0].mid;
        let amount = document.getElementById("amount").value;
        let total = currencyRate * amount;
        result.innerHTML = total.toFixed(2);
    })
}; 

export default Submit;