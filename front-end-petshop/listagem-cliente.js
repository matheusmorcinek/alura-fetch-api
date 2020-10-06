const informacoesClientes = [
    {
        cpf: 123456789,
        nome: "Matheus"
    },
    {
        cpf: 987654321,
        nome: "Bruna"
    },
    {
        cpf: 654321789,
        nome: "Maria Fernanda"
    }
];

const tabela = document.querySelector("[data-tabela]");

const exibeCliente = (cpf, nome) => {

    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    `;

    linha.innerHTML = conteudoLinha;
    return linha;
};

listarClientes().then(data => {
    data.forEach(cliente => {

        tabela.appendChild(exibeCliente(cliente.cpf, cliente.nome));
    });
});