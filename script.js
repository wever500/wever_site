document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const imc = (weight / (height * height)).toFixed(2);

    let classification;
    if (imc < 18.5) {
        classification = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classification = 'Peso normal';
    } else if (imc < 29.9) {
        classification = 'Sobrepeso';
    } else {
        classification = 'Obesidade';
    }

    document.getElementById('imcResult').innerHTML = `Seu IMC é ${imc} (${classification}).`;
});

