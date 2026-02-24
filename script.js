let bancoQuestoes = [];
let questoesSelecionadas = [];

fetch("questoes.json")
  .then(res => res.json())
  .then(data => {
    bancoQuestoes = data;
    carregarDisciplinas();
  });

function carregarDisciplinas() {
  const select = document.getElementById("disciplina");
  const disciplinas = [...new Set(bancoQuestoes.map(q => q.disciplina))];

  select.innerHTML = '<option value="todas">Todas</option>';

  disciplinas.forEach(d => {
    select.innerHTML += `<option value="${d}">${d}</option>`;
  });
}

function gerarSimulado() {
  const disciplina = document.getElementById("disciplina").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const provaDiv = document.getElementById("prova");
  const resultadoDiv = document.getElementById("resultado");

  provaDiv.innerHTML = "";
  resultadoDiv.innerHTML = "";

  let filtradas = bancoQuestoes.filter(q =>
    disciplina === "todas" || q.disciplina === disciplina
  );

  filtradas = filtradas.sort(() => 0.5 - Math.random());

  questoesSelecionadas = filtradas.slice(0, quantidade);

  questoesSelecionadas.forEach((q, index) => {
    let html = `<div class="questao">
      <p><strong>${index + 1}. (${q.disciplina})</strong> ${q.pergunta}</p>`;

    q.alternativas.forEach((alt, i) => {
      html += `
        <label>
          <input type="radio" name="q${index}" value="${i}">
          ${alt}
        </label><br>`;
    });

    html += "</div>";
    provaDiv.innerHTML += html;
  });

  provaDiv.innerHTML += `<button onclick="corrigir()">Finalizar 🏆</button>`;
}

function corrigir() {
  let acertos = 0;

  questoesSelecionadas.forEach((q, index) => {
    const resposta = document.querySelector(`input[name="q${index}"]:checked`);
    if (resposta && parseInt(resposta.value) === q.correta) {
      acertos++;
    }
  });

  document.getElementById("resultado").innerHTML =
    `Você acertou ${acertos} de ${questoesSelecionadas.length} 🎯`;
}
