import React from 'react';
import './Converter.css';
import Submit from './Submit';

function Converter() {
  return (
    <div class="converter">
        <form id="convertIt">
            <input id="amount" class="number" type="number" placeholder="Type amount"></input>
            <label for="baseCurrency" class="h3">From: </label>
            <select id="currencyListFrom">
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="chf">CHF</option>
            </select>
            <label for="resultCurrency" class="h3">Convert into: </label>
            <select id="currencyListTo">
                <option value="pln" id="pln">PLN</option>
            </select>
            <button class="button" id="button">
                Convert!
            </button>
        </form>
    </div>
  );
}

export default Converter;