//Aula 1
const perguntas = [
    {
        pergunta: "Qual é o símbolo utilizado para realizar uma atribuição em C?",
        respostas: [ //A child de perguntas.
            "=", 
            "==",
            ":=",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador utilizado para indicar a multiplicação em C?",
        respostas: [
            "*",
            "^",
            "&",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função utilizada para imprimir na tela em C?",
        respostas: [
            "print()",
            "scan()",
            "printf()",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um ponteiro em C?",
        respostas: [
            "Um tipo de variável",
            "Um operador matemático",
            "Um tipo de estrutura de controle",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador lógico para 'ou' em C?",
        respostas: [
            "&&",
            "||",
            "!",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função utilizada para ler do teclado em C?",
        respostas: [
            "read()",
            "scanf()",
            "gets()",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama a função principal em um programa em C?",
        respostas: [
            "main()",
            "start()",
            "begin()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '++' faz em C?",
        respostas: [
            "Subtrai 1 de uma variável",
            "Adiciona 1 a uma variável",
            "Nega o valor de uma variável",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o tipo de dado utilizado para armazenar caracteres em C?",
        respostas: [
            "char",
            "string",
            "character",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função utilizada para obter o tamanho de uma variável em C?",
        respostas: [
            "length()",
            "size()",
            "sizeof()",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
