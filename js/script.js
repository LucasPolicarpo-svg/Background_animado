//o for cria a repetição de bloco que queremos para as pequenas divs.
//portanto colocamos o numero de divs que ele deve criar e chamamos o createElemente pra adicionar essas divs no html.
// o querySelector chama qual classe pai vamos utilizar e em seguida como deve ser a class filha.
for(let i = 1; i <= 434; i++){
    let box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.new').appendChild(box);
}

//nessa função utilizamos o Math.random pra gerar um numero pseudo aleatório, onde multiplicamos ele pela variavel boxes.
//basicamente essa função ira criar a pseudo aleatoriedade que as cores irão aparecer.
function ani01(){
    let boxes = document.querySelectorAll(".box");
    let num = Math.floor(Math.random()*boxes.length);
    boxes[num].classList.toggle('anima01')
}

//essa é afunção que dita em qual intervalo a função ani01 vai acontecer, você pode manipula-la.
setInterval(ani01);