const registros = JSON.parse(localStorage.getItem('registros')) || [];

function renderizarRegistros() {
    const lista = document.getElementById('listaRegistros');
    lista.innerHTML = '';
    registros.forEach((registro, index) => {
        const li = document.createElement('li');
        li.textContent = `${registro.nome}: Entrada - ${registro.entrada}, Saída - ${registro.saida}, Total: ${registro.total} horas`;
        lista.appendChild(li);
    });
}

document.getElementById('registroForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const entrada = new Date(document.getElementById('entrada').value);
    const saida = new Date(document.getElementById('saida').value);
    const total = (saida - entrada) / (1000 * 60 * 60); // horas

    const novoRegistro = { nome, entrada: entrada.toISOString(), saida: saida.toISOString(), total };
    registros.push(novoRegistro);
    localStorage.setItem('registros', JSON.stringify(registros));
    renderizarRegistros();
    document.getElementById('registroForm').reset();
});

renderizarRegistros();
