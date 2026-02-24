<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Simulado IBFC</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Simulado IBFC - SAEB BA</h1>

<div>
  <label>Disciplina:</label>
  <select id="disciplina"></select>

  <label>Quantidade:</label>
  <input type="number" id="quantidade" value="5" min="1">

  <button onclick="gerarSimulado()">Gerar 🎲</button>
</div>

<div id="prova"></div>
<div id="resultado"></div>

<script src="script.js"></script>
</body>
</html>
