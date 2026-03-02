// ===============================
// MODAL CLIENTE
// ===============================

function abrirModalCliente() {
    document.getElementById('clienteModal').style.display = 'flex';
}

function fecharModalCliente() {
    document.getElementById('clienteModal').style.display = 'none';
}

// ===============================
// MODAL VER CLIENTE
// ===============================

function abrirModalVer(nome, email, status, data) {
    document.getElementById('verNome').value = nome;
    document.getElementById('verEmail').value = email;
    document.getElementById('verStatus').value = status;
    document.getElementById('verData').value = data;

    document.getElementById('verClienteModal').style.display = 'flex';
}

function fecharModalVer() {
    document.getElementById('verClienteModal').style.display = 'none';
}

// ===============================
// MODAL EDITAR CLIENTE
// ===============================

function abrirModalEditar(nome, email, status) {
    document.getElementById('editarNome').value = nome;
    document.getElementById('editarEmail').value = email;
    document.getElementById('editarStatus').value = status;

    document.getElementById('editarClienteModal').style.display = 'flex';
}

function fecharModalEditar() {
    document.getElementById('editarClienteModal').style.display = 'none';
}

// ===============================
// MODAL NOVO LIVRO
// ===============================

function abrirModalNovoLivro() {
    document.getElementById('novoLivroModal').style.display = 'flex';
}

function fecharModalNovoLivro() {
    document.getElementById('novoLivroModal').style.display = 'none';
}

// ===============================
// MODAL EDITAR LIVRO
// ===============================

function abrirModalEditarLivro(titulo, categoria, preco, estoque) {
    document.getElementById('editarLivroNome').value = titulo;
    document.getElementById('editarLivroCategoria').value = categoria;
    document.getElementById('editarLivroPreco').value = preco;
    document.getElementById('editarLivroEstoque').value = estoque;

    document.getElementById('editarLivroModal').style.display = 'flex';
}

function fecharModalEditarLivro() {
    document.getElementById('editarLivroModal').style.display = 'none';
}

// ===============================
// MODAL ADICIONAR ESTOQUE
// ===============================

function abrirModalAdicionarEstoque(nomeLivro) {
    document.getElementById('livroAdicionarNome').innerText = nomeLivro;
    document.getElementById('quantidadeAdicionar').value = '';
    document.getElementById('adicionarEstoqueModal').style.display = 'flex';
}

function fecharModalAdicionarEstoque() {
    document.getElementById('adicionarEstoqueModal').style.display = 'none';
}

// ===============================
// MODAL AJUSTAR ESTOQUE
// ===============================

function abrirModalAjustarEstoque(nomeLivro, estoqueAtual) {
    document.getElementById('livroAjustarNome').innerText = nomeLivro;
    document.getElementById('novoEstoque').value = estoqueAtual;
    document.getElementById('ajustarEstoqueModal').style.display = 'flex';
}

function fecharModalAjustarEstoque() {
    document.getElementById('ajustarEstoqueModal').style.display = 'none';
}

// ===============================
// MODAL DETALHES PEDIDO
// ===============================

function abrirModalPedido(numero, cliente, data, status, total) {

    document.getElementById('pedidoNumero').innerText = numero;
    document.getElementById('pedidoCliente').innerText = cliente;
    document.getElementById('pedidoData').innerText = data;
    document.getElementById('pedidoStatus').innerText = status;
    document.getElementById('pedidoTotal').innerText = total;

    const tabelaItens = document.getElementById('pedidoItens');
    tabelaItens.innerHTML = `
        <tr>
            <td>Clean Code</td>
            <td>1</td>
            <td>R$ 129,90</td>
            <td>R$ 129,90</td>
        </tr>
        <tr>
            <td>Refactoring</td>
            <td>1</td>
            <td>R$ 60,00</td>
            <td>R$ 60,00</td>
        </tr>
    `;

    document.getElementById('pedidoDetalheModal').style.display = 'flex';
}

function fecharModalPedido() {
    document.getElementById('pedidoDetalheModal').style.display = 'none';
}

// ===============================
// TROCAS
// ===============================

function abrirModalTroca(numero, pedido, cliente, motivo) {
    document.getElementById('trocaNumero').innerText = numero;
    document.getElementById('trocaPedido').innerText = pedido;
    document.getElementById('trocaCliente').innerText = cliente;
    document.getElementById('trocaMotivo').innerText = motivo;

    document.getElementById('analisarTrocaModal').style.display = 'flex';
}

function fecharModalTroca() {
    document.getElementById('analisarTrocaModal').style.display = 'none';
}

function abrirModalVerTroca(numero, pedido, cliente, motivo, status, data) {
    document.getElementById('verTrocaNumero').innerText = numero;
    document.getElementById('verTrocaPedido').innerText = pedido;
    document.getElementById('verTrocaCliente').innerText = cliente;
    document.getElementById('verTrocaMotivo').innerText = motivo;
    document.getElementById('verTrocaStatus').innerText = status;
    document.getElementById('verTrocaData').innerText = data;

    document.getElementById('verTrocaModal').style.display = 'flex';
}

function fecharModalVerTroca() {
    document.getElementById('verTrocaModal').style.display = 'none';
}