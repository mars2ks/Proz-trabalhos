document.getElementById('btn-enviar')
.addEventListener('click', function(e) {
  e.preventDefault();

  let idade = document.getElementById('input-idade').value;
  let veridade = document.getElementById('veridade');

        if(idade >= 18) {
                document.getElementById('veridade').innerText = ("Você é maior de Idade!");}
        
            else if (idade < 18 ) {
                veridade.innerText = ("Você ainda é menor de Idade!"); }

        
});