//variavel de colisao
let colidiu = false;

//dimensao criacao bola
let xBola = 300;
let yBola = 200;
let dBola = 15;
let raio = dBola / 2;

//velocidade criacao bola
let velocidadeXBola = 6;
let velocidadeYBola = 6;

//dimensao criacao raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//dimensao criacao oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let trilha;
let raquetada;
let ponto;


function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  dimensoesBola();
  velocidadeBola();
  movimentacaoBola();
  dimensoesRaquete(xRaquete, yRaquete);
  movimentacaoRaquete();
  movimentacaoRaqueteDois();
  colisaoRaquete (xRaquete, yRaquete);
  dimensoesRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentacaoOponente ();
  colisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  placar();
  pontuacao();
  bolinhaNaoFicaPresa();
  
  
  
  
  

}      

function dimensoesBola(){
  circle (xBola,yBola,dBola);
}

function velocidadeBola(){
  xBola += velocidadeXBola
  yBola += velocidadeYBola
}

function movimentacaoBola(){
  if (xBola + raio > width ||
   xBola - raio < 0)
  velocidadeXBola *= -1;

    
  if (yBola + raio > height ||
   yBola - raio < 0)
  velocidadeYBola *= -1;
}

function dimensoesRaquete(x, y){
  rect (x, y, larguraRaquete, alturaRaquete);
  
}

function movimentacaoRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
  
}

function movimentacaoRaqueteDois(){
  if (keyIsDown (87)){
    yRaqueteOponente -= 10;
  }
  
  if (keyIsDown (83)){
    yRaqueteOponente += 10;
  }
}

function colisaoRaquete (x, y){
  colidiu = 
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBola, yBola, raio);
  if (colidiu){
    velocidadeXBola *= -1;
    raquetada.play();
  }
  
}

function movimentacaoOponente(){
  velocidadeOponente = yBola - yRaqueteOponente - larguraRaquete / 2 - 30
  yRaqueteOponente += velocidadeOponente
}
 
function placar(){
  stroke (255);
  textAlign (CENTER);
  textSize (18);
  fill(color(255, 0, 0));
  rect (255, 10, 40, 20);
  fill(255);
  text (meusPontos, 275, 26);
  fill (color(70, 130, 180));
  rect (345, 10, 40, 20);
  fill(255);
  text (pontosOponente, 365, 26);
  
}

function pontuacao(){
  if (xBola > 590) {
    meusPontos += 1
    ponto.play();
  }
  if (xBola < 10){
    pontosOponente += 1
    ponto.play();
  } 
  }


function bolinhaNaoFicaPresa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}
