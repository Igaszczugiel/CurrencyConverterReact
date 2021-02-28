import { convertCurrency } from "ConvertCurrency.js";

let result = document.getElementById("result");
let form = document.querySelector('#convertIt');

form.addEventListener("submit", convertCurrency);

