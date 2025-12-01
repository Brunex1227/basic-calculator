const display = document.getElementById("display");
let numeroAtual = "";
let numeroAnterior = "";
let operador = "";

//atualizar display
const updateDisplay = (value) => { display.textContent = value; };

document.querySelectorAll(".botoes button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
        if (!isNaN(value)) {
            numeroAtual += value;
            updateDisplay(numeroAtual);
        } else if (["+", "-", "*", "/"].includes(value)) {
            operador = value;
            numeroAnterior = numeroAtual;
            numeroAtual = "";
        } else if (value === "=") {
            if (operador && numeroAnterior && numeroAtual) {
                const resultado = calcular(numeroAnterior, numeroAtual, operador);
                updateDisplay(resultado);
                numeroAtual = resultado.toString();
                operador = null;
                numeroAnterior = "";
            }
        } else if (value === "C") {
            numeroAtual = "";
            numeroAnterior = "";
            operador = "";
            updateDisplay(0);
        }

    })
})

const calcular = (num1, num2, operador) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (operador) {
        case "+": return n1 + n2;
        case "-": return n1 - n2;
        case "*": return n1 * n2;
        case "/": return n1 / n2;
        default: return 0;
    }
}