// Definição das variáveis
let herois = [
  { nome: "Homem-Aranha", xp: 7500 },
  { nome: "Homem de Ferro", xp: 12000 },
  { nome: "Thor", xp: 9500 },
  { nome: "Hulk", xp: 5000 },
  { nome: "Pantera Negra", xp: 3000 },
  { nome: "Doutor Estranho", xp: 8500 },
  { nome: "Capitão América", xp: 2000 }
];

// Função para determinar o nível do herói
function classificarHeroi(xp) {
  switch (true) {
      case (xp < 1000):
          return "Ferro";
      case (xp >= 1001 && xp <= 2000):
          return "Bronze";
      case (xp >= 2001 && xp <= 5000):
          return "Prata";
      case (xp >= 5001 && xp <= 7000):
          return "Ouro";
      case (xp >= 7001 && xp <= 8000):
          return "Platina";
      case (xp >= 8001 && xp <= 9000):
          return "Ascendente";
      case (xp >= 9001 && xp <= 10000):
          return "Imortal";
      default:
          return "Radiante";
  }
}

// Loop para exibir a mensagem de cada herói
herois.forEach(heroi => {
  console.log(`O Herói ${heroi.nome} está no nível de ${classificarHeroi(heroi.xp)}`);
});
