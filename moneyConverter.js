var divisaSelected1;
document.querySelector("#EURO1").addEventListener("click", () => {
   divisaSelected1 = "euro1";
})
document.querySelector("#DOLAR1").addEventListener("click", () => {
   divisaSelected1 = "dolar1";
})
document.querySelector("#LIBRA1").addEventListener("click", () => {
   divisaSelected1 = "libra1";
})
var divisaSelected2;
document.querySelector("#EURO2").addEventListener("click", () => {
   divisaSelected2 = "euro2";
})
document.querySelector("#DOLAR2").addEventListener("click", () => {
   divisaSelected2 = "dolar2";
})
document.querySelector("#LIBRA2").addEventListener("click", () => {
   divisaSelected2 = "libra2";
})
document.querySelector('#convertir').addEventListener("click", () => {
   // obtenemos los valores de las monedas introducidas tanto como la moneda 1 y la moneda 2
   const moneda1 = parseFloat(document.querySelector("#moneda1").value);
   const EuroDolar = 1.14;
   const Eurolibra = 0.85;
   ////////////////////////////////////////////////
   const dolarEuro = 0.87;
   const dolarLibra = 0.74;
   ////////////////////////////////////////////////
   const libraEuro = 1.17;
   const libraDolar = 1.34;
   ////////////////////////////////////////////////
   // conversion de euro a todos los valores
   if (divisaSelected1 == "euro1" && divisaSelected2 == "euro2") {
      var resultado = moneda1 + " €";
   } else if (divisaSelected1 == "euro1" && divisaSelected2 == "dolar2") {
      var resultado = moneda1 * EuroDolar + " $";
   } else if (divisaSelected1 == "euro1" && divisaSelected2 == "libra2") {
      var resultado = moneda1 * Eurolibra + " GBP";
   }
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
   // Conversion de dolar a todos los valores
   if (divisaSelected1 == "dolar1" && divisaSelected2 == "euro2") {
      var resultado = moneda1 * dolarEuro + " €";
   } else if (divisaSelected1 == "dolar1" && divisaSelected2 == "dolar2") {
      var resultado = moneda1 + " $";
   } else if (divisaSelected1 == "dolar1" && divisaSelected2 == "libra2") {
      var resultado = moneda1 * dolarLibra + " GBP";
   }
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
   // Conversion de libra a todos los valores
   if (divisaSelected1 == "libra1" && divisaSelected2 == "euro2") {
      var resultado = moneda1 * libraEuro + " €";
   } else if (divisaSelected1 == "libra1" && divisaSelected2 == "dolar2") {
      var resultado = moneda1 * libraDolar + " $";
   } else if (divisaSelected1 == "libra1" && divisaSelected2 == "libra2") {
      var resultado = moneda1 + " GBP";
   }
   ////////////////////////////////////////////////////////////////////////////////////////////////////////
   // Declaramos una variable donde se almacenara el resultado final
   var resultadoFinal = resultado;
   document.getElementById("resultadoFinal").innerHTML = resultadoFinal;
})