var produtos = [
    {
        nome: 'Notebook Samsung',
        descricao: 'Notebook Samsung Galaxy Book2 NP550XED-KF2BR Intel CORE I5 8GB 256 GB SSD Tela 15.6  Windows 11 Home',
        preco: 3000,
        quantidade: 15,
        imagem: 'imgs/notebook.webp'
    },


    {
        nome: 'Câmera CANON',
        descricao: 'Câmera Digital Canon R100 18-45 IS STM',
        preco: 5000,
        quantidade: 15,
        imagem: 'imgs/camera.jpg'
    },


    {
        nome: 'Smartwatch',
        descricao: 'Amazfit GTS 4 mini smartwatch para homens e mulheres, Alexa GPS, rastreador de fitness com 120+ modos de exercício, duração da bateria de 15 dias, compatível com telefones Android e iPhone preto',
        preco: 1000,
        quantidade: 15,
        imagem: 'imgs/relogio.jpg'
    },


    {
        nome: 'Fone De Ouvido Bluetooth',
        descricao: 'JBL, Fone de Ouvido Sem Fio, Tune Buds, Bluetooth 5.3, À Prova Dágua - Preto',
        preco: 500,
        quantidade: 15,
        imagem: 'imgs/fone.jpg'
    },



    {
        nome: 'Smartphone Samsung Galaxy S24+',
        descricao: 'Smartphone Samsung Galaxy S24+, Galaxy AI, Selfie de 12MP, Tela de 6.7" 1-120Hz, 512GB, 12GB RAM - Preto',
        preco: 2000,
        quantidade: 15,
        imagem: 'imgs/telefone.jpg'
    }
];

const vitrineLoja = document.getElementById('vitrine-loja');
const qtdTh = document.getElementById('qtdTh');
const carrinhoTh = document.getElementById('carrinhoTh');
const titulo = document.getElementById('titulo');

let carrinho = [];

function carregarProdutos() {

    // Verificar se o usuário é um cliente
    const loginCliente = JSON.parse(localStorage.getItem('LoginCliente'));
    var tbody = document.querySelector('#tabelaProdutos tbody');



    if (loginCliente) {
        let exibir = 0;
        // Montar a tela completa da vitrine da loja
        const clienteInfo = `
        <div class="cliente-info">
            <img src="${loginCliente.urlAvatar}"  class="avatar">
            <p>${loginCliente.nome}</p>
        </div>
    `;
        vitrineLoja.innerHTML = clienteInfo;
        titulo.textContent = "Produtos";

        produtos.forEach(function (produto, index) {
            var tr = document.createElement('tr');
            var tdNome = document.createElement('td');
            tdNome.textContent = produto.nome;
            tr.appendChild(tdNome);

            var tdDescricao = document.createElement('td');
            tdDescricao.textContent = produto.descricao;
            tr.appendChild(tdDescricao);

            var tdPreco = document.createElement('td');
            tdPreco.textContent = "R$" + produto.preco;
            tr.appendChild(tdPreco);

            var tdQuantidade = document.createElement('td');
            tdQuantidade.textContent = produto.quantidade;
            tr.appendChild(tdQuantidade);

            var tdImagem = document.createElement('td');
            var img = document.createElement('img');
            img.src = produto.imagem;
            tdImagem.appendChild(img);
            tr.appendChild(tdImagem);

            var tdAcoes = document.createElement('td');
            var btnAdicionar = document.createElement('button');
            btnAdicionar.textContent = 'Adicionar ao carrinho';
            btnAdicionar.onclick = function () {
                // Adicionar produto ao carrinho de compras
                adicionarAoCarrinho(produto);
            };
            tdAcoes.appendChild(btnAdicionar);

            tr.appendChild(tdAcoes);

            tbody.appendChild(tr);
        });

        // Função para adicionar produto ao carrinho de compras
        function adicionarAoCarrinho(produto) {

            // Recuperar o array de usuários do Local Storage
            const carrinhoStorage = localStorage.getItem('carrinho');
            let carrinho = carrinhoStorage ? JSON.parse(carrinhoStorage) : [];

            // Adicionar produto ao carrinho
            carrinho.push(produto);

            // Salvar o array modificado no Local Storage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));

            alert("produto adicionado no carrinho");


        }

    } else {
        const clienteInfo = `
        <div class="cliente-info">
        <button onclick="window.location.href='cadastro.html'">Cadastrar</button>
        </div>
    `;
        vitrineLoja.innerHTML = clienteInfo;

        qtdTh.style.display = "none";
        carrinhoTh.style.display = "none";
        titulo.textContent = "Vitrine";

        produtos.forEach(function (produto, index) {
            var tr = document.createElement('tr');
            var tdNome = document.createElement('td');
            tdNome.textContent = produto.nome;
            tr.appendChild(tdNome);

            var tdDescricao = document.createElement('td');
            tdDescricao.textContent = produto.descricao;
            tr.appendChild(tdDescricao);

            var tdPreco = document.createElement('td');
            tdPreco.textContent = "R$" + produto.preco;
            tr.appendChild(tdPreco);


            var tdImagem = document.createElement('td');
            var img = document.createElement('img');
            img.src = produto.imagem;
            tdImagem.appendChild(img);
            tr.appendChild(tdImagem);

            tbody.appendChild(tr);
        });
    }
}

carregarProdutos();