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