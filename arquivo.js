
function calcularIMC() {
    var peso = parseFloat(document.getElementById('weight').value);
    var altura = parseFloat(document.getElementById('height').value);
    
    var imc = peso / (altura * altura);
    
    var resultado = document.getElementById('result');
    
    resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>';
    
    if (imc < 18.5) {
        resultado.innerHTML += 'Você está abaixo do peso normal.';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += 'Seu peso está normal.';
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado.innerHTML += 'Você está com sobrepeso.';
    } else {
        resultado.innerHTML += 'Você está obeso.';
    }
    
    return false;
}

document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    calcularIMC();
});
