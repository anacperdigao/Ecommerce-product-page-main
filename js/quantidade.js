//Aqui foi para fazer o botao contador de quatidade

const botaoQuantidade = document.querySelectorAll(".botao-aumenta-diminui");
const quantidade = document.querySelector("#quantidade");

let quantidadeTotal = 0;

botaoQuantidade.forEach(b => b.addEventListener("click", cliqueBotoesQuantidade));

function cliqueBotoesQuantidade(e){
    if(e.currentTarget.id === "botao-menos"){
        quantidadeTotal === 0 ? null : quantidadeTotal--;
    }
    else{
        quantidadeTotal++;
    }

    quantidade.textContent = quantidadeTotal;
    }


// Aqui é para mostrar o carrinho de compras

const botaoCarrinho = document.querySelector(".img__cart-perfil");
const painelCarrinho = document.querySelector("#painel__carrinho");  

botaoCarrinho.addEventListener('click', mostrarCarrinho);

function mostrarCarrinho(e){
    e.currentTarget.getAttribute('aria-expanded') === 'false'
        ? e.currentTarget.setAttribute('aria-expanded','true')
        : e.currentTarget.setAttribute('aria-expanded','false')

    e.currentTarget.getAttribute('aria-expanded') === 'false'
        ? painelCarrinho.setAttribute('disabled', 'true')
        : painelCarrinho.removeAttribute('disabled')
}

//Aqui é para adicionar a quantidade no carrinho de compra

botaoAdd = document.querySelector(".botao-add");

botaoCarrinho.addEventListener('click', mostrarCarrinho);

