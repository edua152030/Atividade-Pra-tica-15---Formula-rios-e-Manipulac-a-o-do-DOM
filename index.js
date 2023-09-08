
const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('Endereco').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
    const radioSelecionado = document.querySelector('input[name="radio"]:checked').value
    const checkb = document.querySelectorAll('input[type="checkbox"]:checked')
    const areasInteresse = Array.from(checkb).map(checkbox => checkbox.value)
    const miniCurriculo = document.querySelector('.txtArea input[type="textarea"]').value

    form.addEventListener('submit', function(event) {
        let isChecked = false
    
        checkb.forEach(function(checkbox) {
            if (checkbox.checked) {
                isChecked = true;
            }
        });
    
        if (!isChecked) {
            event.preventDefault();
            alert('Selecione pelo menos uma')
        }
    });

    console.log("Nome:", nome)
    console.log("Endereço:", endereco)
    console.log("Cidade:", cidade)
    console.log("Estado:", estado)
    console.log("Cargo:", radioSelecionado)
    console.log("Áreas de Interesse:", areasInteresse)
    console.log("Mini Currículo:", miniCurriculo)
});
