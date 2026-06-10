```javascript
// Controle de fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", () => {

    tamanhoFonte -= 2;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
});

// Alto contraste

document.getElementById("altoContraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Quiz

document.getElementById("verificarQuiz").addEventListener("click", () => {

    let pontos = 0;

    const perguntas = ["q1", "q2", "q3"];

    perguntas.forEach(pergunta => {

        const resposta =
            document.querySelector(`input[name="${pergunta}"]:checked`);

        if (resposta && resposta.value === "certo") {
            pontos++;
        }
    });

    let mensagem = "";

    if (pontos === 3) {
        mensagem =
            "Parabéns! Você conhece muito bem os benefícios da energia solar!";
    }
    else if (pontos === 2) {
        mensagem =
            "Muito bem! Você já possui bons conhecimentos sobre energia solar.";
    }
    else if (pontos === 1) {
        mensagem =
            "Você acertou algumas questões. Continue aprendendo sobre sustentabilidade.";
    }
    else {
        mensagem =
            "Continue estudando. A energia solar é uma grande aliada do meio ambiente!";
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Pontuação Final</h3>
        <p>Você acertou <strong>${pontos}</strong> de 3 perguntas.</p>
        <p>${mensagem}</p>
        <p><strong>🌞 Cada escolha sustentável ajuda a construir um futuro melhor para o campo e para o planeta!</strong></p>
    `;
});
```

