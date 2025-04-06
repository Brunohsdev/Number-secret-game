alert('Boas vindas ao jogo do Número Secreto');
let numeroSecreto = 4;
let chute = prompt('Escolha um número entrer 1 e 10');
console.log('A resposta é '+(numeroSecreto));

// se o chute for igual ao número igual
if(chute == numeroSecreto){
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto}`);
}

// se o chute não for igual
else {
    console.log('Ah não! Você errou o número secreto, tente outra vez.');
    alert('Você errou :(')
}