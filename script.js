var jogadorA = {
  nome: "Andressa",
  vitorias: 8,
  empates: 2,
  derrotas: 0,
  pontos: 0
};

var jogadorB = {
  nome: "Rodrigo",
  vitorias: 2,
  empates: 2,
  derrotas: 6,
  pontos: 0
};

var jogadores = [jogadorA, jogadorB];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}
jogadorA.pontos = calculaPontos(jogadorA);

function calculaVencedor(jogador) {
  if (jogadorA.pontos > jogadorB.pontos) {
    document.getElementById("vencedor").innerText =
      " '\u{1F3C6}' Vencedor atual e: " + jogadorA.nome;
  } else if (jogadorA.pontos == jogadorB.pontos) {
    document.getElementById("vencedor").innerText = "Estao empatados!";
  } else {
    document.getElementById("vencedor").innerText =
      " '\u{1F3C6}'Vencedor atual e: " + jogadorB.nome;
  }
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";

    elemento +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")' class='btn-edit'>Win</button></td>";
    elemento +=
      " <td><button onClick='adicionarEmpate(" +
      i +
      ")'class='btn-edit'>Draw</button></td>";
    elemento +=
      " <td><button onClick='adicionarDerrota(" +
      i +
      ")'class='btn-edit'>Loss</button></td>";

    elemento +=
      " <td><button onClick='deletarJogadas(" +
      i +
      ")'class='btn-edit'>Clear</button></td>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  calculaVencedor(jogador);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  calculaVencedor(jogador);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}
function deletarJogadas(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
  calculaVencedor(jogador);
}
