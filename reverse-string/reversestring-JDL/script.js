const input = document.getElementById("inputText");
const output = document.getElementById("outputText");
const button = document.getElementById("invertButton");

function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

input.addEventListener("input", () => {
  const valor = input.value;

  // Mostrar u ocultar el botón
  if (valor.length > 3) {
    button.style.display = "inline-block";
  } else {
    button.style.display = "none";
  }

  // Inversión en tiempo real
  output.textContent = invertirCadena(valor);
});

// Funcionalidad adicional del botón (si quieres usarlo para algo más)
button.addEventListener("click", () => {
  alert(`Texto invertido: ${output.textContent}`);
});