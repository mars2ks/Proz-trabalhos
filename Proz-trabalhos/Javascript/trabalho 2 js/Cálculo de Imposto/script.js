document.getElementById('texto').addEventListener('click', function(e) {
    e.preventDefault();

    let salario = parseFloat(document.getElementById('input-salario').value);

    if (isNaN(salario)) {
        document.getElementById('para').innerText = 'Por favor, insira um valor numérico válido para o salário.';
        return;
    }

    if (salario <= 2000.00) {
        document.getElementById('para').innerText = 'livre de imposto';
    } else if (salario > 2000.00 && salario < 5000.00) {
        let novoSalario = salario - ((salario * 10) / 100);
        document.getElementById('para').innerText = `Desconto de 10% no salário. O novo salário será R$${novoSalario.toFixed(2)}`;
    } else if (salario >= 5000.00) {
        let novoSalario = salario - ((salario * 20) / 100);
        document.getElementById('para').innerText = `Desconto de 20% no salário. O novo salário será R$${novoSalario.toFixed(2)}`;
    }
});
