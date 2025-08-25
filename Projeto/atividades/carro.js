carro = {
  modelo: "Mustang GT 500",
  ano: 2024,
  cor: "Branco",
  ligar(modelo) {
    console.log(modelo + " Ligou");
  },
  acelerar(modelo) {
    console.log(modelo + " Acelerou");
  },
  frear(modelo) {
    console.log(modelo + " Freou");
  },
};

carro.ligar("Dodge Challenger");
carro.acelerar("Lambo");
const mustangGt500 = carro.modelo;
carro.frear(mustangGt500);

class Carro {
  constructor(modelo, ano, cor) {
    (this.modelo = modelo), (this.ano = ano), (this.cor = cor);
    this.acelerar = this.modelo + " acelerou";
    this.frear = this.modelo + " Freou";
  }
}
dodge = new Carro("dodge", 2024, "Azul");
console.log(dodge.acelerar);
console.log(dodge.frear);
