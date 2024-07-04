const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O protagonista de 'Red Dead Redemption 2' é Arthur Morgan?",
        alternativas: [
            {
                texto: "Sim, o protagonista de 'Red Dead Redemption 2' é Arthur Morgan.",
                afirmacao: "Verdadeira"
            },
            {
                texto: "Falsa: Não, o protagonista de 'Red Dead Redemption 2' é John Marston.",
                afirmacao: "negação"
            }
        ]
    },
    {
        enunciado: "'Red Dead Redemption 2' se passa no Velho Oeste americano?",
        alternativas: [
            {
                texto: "Verdadeira: Sim, 'Red Dead Redemption 2' se passa no Velho Oeste americano.",
                afirmacao: "afirmação"
            },
            {
                texto: "Falsa: Não, 'Red Dead Redemption 2' se passa na Europa durante a Idade Média.",
                afirmacao: "negação"
            }
        ]
    },
    {
        enunciado: "O jogo 'Red Dead Redemption 2' foi desenvolvido pela Rockstar Games?",
        alternativas: [
            {
                texto: "Verdadeira: Sim, 'Red Dead Redemption 2' foi desenvolvido pela Rockstar Games.",
                afirmacao: "afirmação"
            },
            {
                texto: "Falsa: Não, 'Red Dead Redemption 2' foi desenvolvido pela Ubisoft.",
                afirmacao: "negação"
            }
        ]
    },
    {
        enunciado: "Em 'Red Dead Redemption 2', os jogadores podem caçar animais selvagens?",
        alternativas: [
            {
                texto: "Verdadeira: Sim, em 'Red Dead Redemption 2', os jogadores podem caçar animais selvagens.",
                afirmacao: "afirmação"
            },
            {
                texto: "Falsa: Não, em 'Red Dead Redemption 2', os jogadores não podem caçar animais selvagens.",
                afirmacao: "negação"
            }
        ]
    },
    {
        enunciado: "'Red Dead Redemption 2' oferece um modo multiplayer chamado 'Red Dead Online'?",
        alternativas: [
            {
                texto: "Verdadeira: Sim, 'Red Dead Redemption 2' oferece um modo multiplayer chamado 'Red Dead Online'.",
                afirmacao: "afirmação"
            },
            {
                texto: "Falsa: Não, 'Red Dead Redemption 2' não oferece um modo multiplayer chamado 'Red Dead Online'.",
                afirmacao: "negação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Quiz sobre 'Red Dead Redemption 2' concluído:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
