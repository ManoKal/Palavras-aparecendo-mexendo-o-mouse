let palavra;

function setup() {
  createCanvas(800, 600);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["Brasil", "Brasilia", "Barco", "Berlim", "Aprendendo na escola com java script", "Alura"];
  
  return random(palavras);
}

function inicializaCores() {
  background("Green");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 2, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let parcial = palavraParcial(2, width);
    
  text(parcial, 300, 300);
  
}