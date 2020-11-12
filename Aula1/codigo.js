function soma () {
    valorUm = document.getElementById('valorUm').value;
    valorDois = document.getElementById('valorDois').value;
    document.getElementById('resultado').value = parseInt(valorUm)+parseInt(valorDois);
}

function subtracao () {
    valorUm = document.getElementById('valorUm').value;
    valorDois = document.getElementById('valorDois').value;
    document.getElementById('resultado').value = parseInt(valorUm)-parseInt(valorDois);
}

function multiplicacao () {
    valorUm = document.getElementById('valorUm').value;
    valorDois = document.getElementById('valorDois').value;
    document.getElementById('resultado').value = parseInt(valorUm)*parseInt(valorDois);
}

function divisao () {
    valorUm = document.getElementById('valorUm').value;
    valorDois = document.getElementById('valorDois').value;
    document.getElementById('resultado').value = parseInt(valorUm)/parseInt(valorDois);
}
