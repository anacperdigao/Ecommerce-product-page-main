//Aqui foi para fazer o botao contador de quantidade

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
    updateCartState(quantidadeTotal);
    updateTag(quantidade);

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

botaoAdd.addEventListener('click', mostrarCarrinho);


//Aqui é pra mudar o estado do carrinho de vazio pra cheio

const checkoutState = {
    'default': `    <div class="carrinho">
                        <p class="carrinho__titulo">Cart</p>
                    </div>
                <div class="conteudo__vazio">
                <p class="carrinho__conteudo">Your cart is empty</p>
                </div>`,
    'full': `   <div class="carrinho">
                    <p class="carrinho__titulo">Cart</p>
                </div>
                <div class="container__conteudo-cheio"> 
                <div class="conteudo__cheio">
                    <img src="/assets/images/image-product-1-thumbnail.jpg" class="img__produto-miniatura">
                    <div class="paragrafos_carrinho">  
                        <p class="conteudo__produto-carrinho-p1">Fall Limited Edition Sneakers</p>
                        <p class="conteudo__produto-carrinho-p2">
                            <span>$125.00</span>
                            <span>&times;</span>
                            <span id="qtd">3</span>
                            <span id="total">$375</span>
                            <button class="lixeira">
                                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                            </button>
                        </p>
                    </div>  
                </div>
                <div class="botao__conteudo-cheio">
                    <button type="submit" class="botao-checkout">Checkout</button>  
                </div>  
            </div>`
}

const containerCarrinho = document.querySelector('.container__carrinho')

function updateCartState(num){
    if(num == 0){
        containerCarrinho.innerHTML = checkoutState.default;
        quantidadeTotal = 0;
        quantidade.textContent = 0;

    } else{
        containerCarrinho.innerHTML = checkoutState.full;
        const qtd = document.querySelector('#qtd');
        const totalCarrinho = document.querySelector('#total');
        const preco = 125;
        qtd.textContent = num;
        totalCarrinho.textContent = `$${num * preco}.00`;
    }
}

//Aqui é o botao da lixeira

painelCarrinho.addEventListener('click',(e) => {
    e.currentTarget === e.target && mostrarCarrinho();
    e.target === document.querySelector('.lixeira') &&
    updateCartState(0);
    carrinhoTag.textContent = 0;
}); 


//Mostrando a tag do carrinho

const carrinhoTag = document.querySelector(".tag__quantidade");

botaoAdd.addEventListener('click', mostraTag);

function mostraTag(e){
    
    if(e.currentTarget.getAttribute('aria-expanded') === 'false'){
        carrinhoTag.removeAttribute('disabled')
    }
}

//Atualizando a quantidade da tag do carrinho

function updateTag(){
    
    if(quantidade < 1){
        carrinhoTag = removeAttribute;
    }else{
        carrinhoTag.textContent = quantidade.textContent; 
    }
}

