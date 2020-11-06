var xmenu = 150;
var ymenu1 = 145;
var ymenu2 = 205;
var ymenu3 = 265;
var tela = 0;
var largura = 200;
var altura = 50;
let img;
let img1;
let img2;
function preload() {
  img = loadImage('imagem de fundo do jogo.jpg');
  img1 = loadImage("eu créditos.jpeg")
  img2 = loadImage('herick creditos.jpg')
}


function setup() {
  createCanvas(500, 500);
 
}


function menu(){
  textStyle(BOLD);
text('NUMEMORIE', 250, 50);
  
  
  
  
  textAlign(CENTER)
  textSize(26)
  
  if( mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 && mouseY < ymenu1 + altura ){
     stroke(200)
     fill(20)
     rect(xmenu, ymenu1, largura, altura, 35)
    if(mouseIsPressed){
       tela = 1;
     }

  }
    fill(240)
  noStroke()
  text("Iniciar", 250, 180)
  
   if( mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 && mouseY < ymenu2 + altura ){
     stroke(200)
     fill(20)
     rect(xmenu, ymenu2, largura, altura, 15) 
     if(mouseIsPressed){
       tela = 2;
     }
   }
 
  fill(240)
  noStroke()
  text("Instruções", 250, 240)
  
  
   if( mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 && mouseY < ymenu3 + altura ){
     stroke(200)
     fill(20)
     rect(xmenu, ymenu3, largura, altura, 35)
    if(mouseIsPressed){
       tela = 7;
     }

  }
    fill(240)
  noStroke()
  text("Créditos", 250, 300)
  
} 

function Nivel1(){
  textSize(32)
text("Nível 1", 250, 50)
  
}



function Instrução(){
  fill(250)
  textSize(32)
text("Instruções",250 , 50)
 textSize(16)
  text("Pressione ESC para sair",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("Assim como um jogo de memória, selecione com o mouse um", 250, 130)
  text("par de cartas do jogo, se as cartas forem iguais, recolha e ", 250, 150)
  text("jogue novamente. Se forem cartas diferentes, estas devem ser", 250, 170)
  text("viradas novamente. ", 250, 190)
  text("Nesse jogo, ao invés de cartas com imagens, vão ser funções", 250, 230)
  text("matemáticas, e cada nível vai determinar como vai ser o uso", 250, 250)
  text("dessas funções", 250, 270)
  text("Pressione a tecla -> para as instruções de cada nível", 250, 320)
  
}
function Instruçãofase1(){
  if(tela == 3){
     fill(250)
  textSize(32)
text("Instruções Nível 1",250 , 50)
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 1 o jogador terá que identificar qual é a função", 250, 130)
  text("apresentada em uma carta, e achar em outra carta", 250, 150)
  text("a sua denominação.", 250, 170)
  text("Exemplo:", 250, 230)
  fill(250)
  rect(100, 290, 90, 100)
  fill(51)
  text("x + 4", 147, 342)
  fill(250)
  rect(300, 290, 90, 100)
  fill(51)
  text("Função", 345, 342)
  text("Afim", 345, 362)
  }
  
}
function Instruçãofase2(){
  fill(250)
  textSize(32)
text("Instruções Nível 2",250 , 50)
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 2 o jogador terá que encontrar qual é o valor de x", 250, 130)
  text("da função que for especificada em uma carta, ", 250, 150)
 text("e achar seu resultado em outra", 250, 170)
  text("Exemplo:", 250, 230)
  fill(250)
  rect(100, 290, 90, 100)
  fill(51)
  text("x+3=9", 147, 342)
  fill(250)
  rect(300, 290, 90, 100)
  fill(51)
  text("x=6", 345, 342)
  
}
function Instruçãofase3(){
  fill(250)
  textSize(32)
text("Instruções Nível 3",250 , 50)
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 3 o jogador terá que encontrar qual a derivada da ", 250, 130)
  text("função que for especificada em uma carta, ", 250, 150)
 text("e achar seu resultado em outra", 250, 170)
  text("Exemplo:", 250, 230)
  fill(250)
  rect(100, 290, 90, 100)
  fill(51)
  text("3x²", 147, 342)
  fill(250)
  rect(300, 290, 90, 100)
  fill(51)
  text("6x", 345, 342)
}
function Instruçãofase4(){
  fill(250)
  textSize(32)
text("Instruções Nível 4",250 , 50)
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 4 o jogador terá que encontrar qual a integral da ", 250, 130)
  text("função que for especificada em uma carta, ", 250, 150)
 text("e achar seu resultado em outra", 250, 170)
  text("Exemplo:", 250, 230)
  fill(250)
  rect(100, 290, 90, 100)
  fill(51)
  text("∫xdx", 147, 342)
  fill(250)
  rect(300, 290, 90, 100)
  fill(51)
  text("x²", 345, 342)
  text("__", 345, 342)
  text("+ c", 367, 350)
  text("2", 345, 362)
}

function Créditos(){
  textSize(32)
text("CRÉDITOS", 250, 40);
  textSize(18);
  text("Pressione ESC para sair",250, 490);
  image(img1, 65, 140, 100, 120);
  image(img2, 320, 140, 100, 120)
  textSize(15);
  text("ALUNO", 115, 130);
  text("EDUCADOR", 370, 130)
  textSize(12);
  text("VICTOR BARROS LARANJEIRA", 110, 285);
  text("HERICK CIDARTA GOMES DE OLIVEIRA", 365, 285)
  text("MESTRADO EM DEMOGRAFIA NA UFRN", 360, 305)
  text("PROFESSOR NA UFPB", 370, 325)
  text("BACHARELANDO EM C&T", 110, 305)
  text("UFRN", 115, 325)
}
function keyPressed(){
  
  if (key == "Escape" && tela == 7)
    tela = 0;
  if (key == "Escape" && tela == 2)
    tela = 0;
  if (key == "ArrowRight" && tela >= 2 && tela < 6) {
     tela = tela + 1;
  }
    
   if (key == "ArrowLeft" && tela >2 && tela < 7)
    tela = tela - 1;
   
}

function draw() {
  background(img);

  if (tela == 0){
    menu()
   
  }
   if (tela == 1){
    Nivel1()
  }
   if (tela == 2){
    Instrução()
  }
  if (tela == 3){
    Instruçãofase1()
  }
  if(tela == 4){
    Instruçãofase2()
  }
  if(tela == 5){
    Instruçãofase3()
  }
   if(tela == 6){
    Instruçãofase4()
  }
  if(tela == 7){
    Créditos()
  }
}