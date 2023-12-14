function verificarMaior(numero1, numero2) {
    if (numero1 > numero2) {
        alert("O número " + numero1 + " é maior que " + numero2);
        return numero1;
    } else if (numero2 > numero1) {
        alert("O número " + numero2 + " é maior que " + numero1);
        return numero2;
    } else {
        alert("O número " + numero1 + " é igual a " + numero2);
        return null;  // Ou qualquer valor que você preferir para indicar igualdade
    }
}

// Exemplos de uso:
var numero1 = 5;
var numero2 = 8;
verificarMaior(numero1, numero2);
