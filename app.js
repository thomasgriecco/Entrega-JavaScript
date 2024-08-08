function verificarParidad() {
    const numero = document.getElementById('numeroParidad').value;
    const resultado = numero % 2 === 0 ? `${numero} es par.` : `${numero} es impar.`;
    document.getElementById('resultadoParidad').textContent = resultado;
}

function compararNumeros() {
    const num1 = document.getElementById('num1Comparar').value;
    const num2 = document.getElementById('num2Comparar').value;
    let resultado;
    if (num1 > num2) {
        resultado = `${num1} es mayor que ${num2}.`;
    } else if (num2 > num1) {
        resultado = `${num2} es mayor que ${num1}.`;
    } else {
        resultado = `${num1} y ${num2} son iguales.`;
    }
    document.getElementById('resultadoComparar').textContent = resultado;
}

function esMultiploDeCinco() {
    const numero = document.getElementById('numeroMultiplo5').value;
    const resultado = numero % 5 === 0 ? `${numero} es múltiplo de 5.` : `${numero} no es múltiplo de 5.`;
    document.getElementById('resultadoMultiplo5').textContent = resultado;
}

function imprimirNumerosHasta() {
    const numero = document.getElementById('numeroHasta').value;
    let resultado = '';
    for (let i = 0; i <= numero; i++) {
        resultado += i + ' ';
    }
    document.getElementById('resultadoImprimirHasta').textContent = resultado;
}

function imprimirPalabraVeces() {
    const palabra = document.getElementById('palabraRepetir').value;
    const veces = document.getElementById('vecesRepetir').value;
    let resultado = '';
    for (let i = 0; i < veces; i++) {
        resultado += palabra + ' ';
    }
    document.getElementById('resultadoRepetirPalabra').textContent = resultado;
}

function imprimirArray() {
    const valores = document.getElementById('arrayValores').value.split(',');
    const resultado = valores.join(' ');
    document.getElementById('resultadoArray').textContent = resultado;
}

function imprimirArrayExceptoQuinto() {
    const valores = document.getElementById('arrayValoresExcepto').value.split(',');
    const resultado = valores.filter((_, indice) => indice !== 4).join(' ');
    document.getElementById('resultadoArrayExcepto').textContent = resultado;
}

function multiplicarArrayPorNumero() {
    const valores = document.getElementById('arrayMultiplicar').value.split(',');
    const numero = document.getElementById('multiplicador').value;
    const resultado = valores.map(val => val * numero).join(' ');
    document.getElementById('resultadoMultiplicar').textContent = resultado;
}