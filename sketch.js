var xmenu = 150;
var ymenu1 = 145;
var ymenu2 = 205;
var ymenu3 = 265;
var tela = 0;
var largura = 200;
var altura = 50;
var cartasValorF1 = 
    ['y = x', 'y = 4-x²', 'Modular', 'Afim', 'Exponencial', 'y = 2', 'y = 2^(3x)', 'y = |3x - 7|', 'Constante', 'Quadrática']
var cartasX = [];
var cartasY = []
var quantidadedecartas = 10
var cartaAltura = 85
var cartaLargura = 70
var viradas = []
var cartasValorF2 = 
    ['x + 2 = 4', 'x = 2', '2x + 4 = 12', 'x² + 9 = 18', 'x = 0', 'x = 3', 'x = 4', 'cos(x) = 1', 'x = 1', 'sen(x) = 1']
var cartasX2 = [];
var cartasY2 = [];

var quantidadedecartas2 = 10
var cartaAltura2 = 85
var cartaLargura2 = 70
var viradas2 = [];
var cartasValorF3 = 
    ['f´(x) = 2x', 'f´(x) = 5', 'f(x) = e^(x)', 'f(x) = 4x + 1', 'f(x) = x²', 'f(x) = 5x', 'f´(x) = 4', 'f´(x) = cos(x)', 'f´(x) = e^(x)', 'f(x) = sen(x)']
var cartasX3 = [];
var cartasY3 = [];
var quantidadedecartas3 = 10
var cartaAltura3 = 85
var cartaLargura3 = 70
var viradas3 = [];
var contagemTempo = false; 
var contTempo = 0; 
var contador = 0;
var pontos = 0;
var pontosi = 0
var contagemTempo2 = false; 
var contTempo2 = 0; 
var contador2 = 0;
var pontos2 = 0;
var contagemTempo3 = false; 
var contTempo3 = 0; 
var contador3 = 0;
var pontos3 = 0;
var pontosi2 = 0;
var pontosi3 = 0;
var cartaspontosA;
let conttotal = 3620
let contseg = 0;
let contmin = 0;
let cont = 1810;
let conttotal2 = 3620
let contseg2 = 0;
let contmin2 = 0;
let cont2 = 1810;
let conttotal3 = 3620
let contseg3 = 0;
let contmin3 = 0;
let cont3 = 1810;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
function preload() {
  img = loadImage('WhatsApp Image 2020-12-11 at 21.50.53.jpeg');
  img1 = loadImage("eu créditos.jpeg")
  img2 = loadImage('herick creditos.jpg')
  img3 = loadImage("instruções.jpeg")
  img4 = loadImage('créditos.jpeg')
  img5 = loadImage('gameover.jpeg')
  img6 = loadImage('Fase1.jpeg')
  img7 = loadImage('Fase2.jpeg')
  img8 = loadImage('Fase3.jpeg')
  img9 = loadImage('FimDeJogo.jpeg')
}
function setup(){
  createCanvas(500, 500);
 // incremento = (450 - 50)/quantidadedecartas;
 // incremento2 = (450 - 50)/quantidadedecartas2;
 // incremento3 = (450 - 50)/quantidadedecartas3;
  frameRate(30)
  incY = 120
  incX = 80
  
  incY2 = 120
  incX2 = 80
  
  incY3 = 120
  incX3 = 80
  
  
  xi = 58;
  yi = 150;
  
  xj = 58;
  yj = 150;
  
  xk = 58;
  yk = 150;
  
  for ( i = 0; i < quantidadedecartas; i++){
    cartasX[i] = xi;
    cartasY[i] = yi;
    xi = xi + incX;
    if ( xi > 380){
      yi = yi + incY;
      xi = 58;
    }
    viradas[i] = false
  }
  
  for ( j = 0; j < quantidadedecartas2; j++){
    cartasX2[j] = xj;
    cartasY2[j] = yj;
    xj = xj + incX2;
    if ( xj > 380){
      yj = yj + incY2;
      xj = 58;
    }
    viradas2[j] = false
  }
 for ( k = 0; k < quantidadedecartas3; k++){
    cartasX3[k] = xk;
    cartasY3[k] = yk;
    xj = xk + incX3;
    if ( xk > 380){
      yk = yk + incY3;
      xk = 58;
    }
    viradas3[k] = false
  }

}
function menu(){
  
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
  cont = cont - 1;
  conttotal = conttotal - 1
  textSize(22)
  fill(250)
  
  contmin = contmin - 1
  contseg = parseInt(cont/30);
  contmin = parseInt(conttotal/30/60)
  //text(cont, 250, 470)
  //text(conttotal, 250, 450)
  text(contseg, 250, 400)
  text(contmin, 220, 400)
  
  if (cont == 0){
    cont=1800
  }
 if (conttotal <= 0 ){
   tela = 8
   conttotal = 3620
   contseg = 0;
   contmin = 0;
   pontosi = 0;
 }
  
  textSize(20)
  fill(255)
  text("Qual é a função?", 250, 120)
  for (i = 0; i < quantidadedecartas; i++){
    fill(255, 204, 0)
    rect(cartasX[i], cartasY[i], cartaLargura, cartaAltura, 10);
    if (viradas[i]){
      fill(20)
      textSize(12)
      text(cartasValorF1[i], cartasX[i] + 34, cartasY[i] + 45)
    }
  }
  fill(20)
 
    if( contador == 2){
    contTempo++; 
    
    }
    // conta dois segundos 
    if ( contTempo > 60){
        contagemTempo = false; 
        desviraCartas();
        contTempo = 0; 
   }
  if (contador > 2){
    desviraCartas()
  }
  
   if(mouseX > cartasX[0] && mouseX< cartasX[0] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[0] = true;
   }
   if(mouseX > cartasX[3] && mouseX < cartasX[3] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[3] = true;
   }
     if(viradas[0] && viradas[3]){
       pontos = 10
       
       contador = 2
       cartasX[0] = viradas[i]
       cartasX[3] = viradas[i]
     }
  
   if(mouseX > cartasX[1] && mouseX< cartasX[1] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[1] = true;
   }
   if(mouseX > cartasX[9] && mouseX < cartasX[9] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[9] = true;
   }
     if(viradas[1] && viradas[9]){
       pontos = pontos + 10
       
       contador = 2
       cartasX[1] = viradas[i];
       cartasX[9] = viradas[i];
     }
  
   if(mouseX > cartasX[2] && mouseX < cartasX[2] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[2] = true;
   }
   if(mouseX > cartasX[7] && mouseX < cartasX[7] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[7] = true;
    
   }
     if(viradas[2] && viradas[7]){
       pontos = pontos + 10
       pontosi = parseInt(pontos/60)
      
       cartasX[2] = viradas[i]
       cartasX[7] = viradas[i]
     }
     
  if(mouseX > cartasX[4] && mouseX< cartasX[4] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[4] = true;
   }
   if(mouseX > cartasX[6] && mouseX < cartasX[6] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[6] = true;
    
   }
     if(viradas[4] && viradas[6]){
       pontos = pontos + 10
       pontosi = parseInt(pontos/60)
       
       cartasX[4] = viradas[i]
       cartasX[6] = viradas[i]
     }
  
  if(mouseX > cartasX[5] && mouseX< cartasX[5] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[5] = true;
   }
   if(mouseX > cartasX[8] && mouseX < cartasX[8] + cartaLargura && mouseY > cartasY[i] + cartaAltura){
     viradas[8] = true;
    
   }
     if(viradas[5] && viradas[8]){
       pontos = pontos + 10
       pontosi = parseInt(pontos/60)
       
       cartasX[5] = viradas[i]
       cartasX[8] = viradas[i]
     }
  
  if(cartasX[0] == viradas[i] && cartasX[1] == viradas[i] &&
   cartasX[2] == viradas[i] && cartasX[3] == viradas[i] && cartasX[4] == viradas[i] && cartasX[5] == viradas[i] && cartasX[6] == viradas[i] && cartasX[7] == viradas[i] && cartasX[8] == viradas[i] && cartasX[9] == viradas[i] ){
    tela = 10
    pontosi = 0
    viradas[i] = true;
    contseg = 0;
    contmin = 0;
    
  }
  
  
  
  
   textSize(22)
     fill(250)
  text("Pontos: "+pontosi, 240, 450)
  
}
function Nivel2(){
   cont2 = cont2 - 1;
  conttotal2 = conttotal2 - 1
  textSize(22)
  fill(250)
  
  contmin2 = contmin2 - 1
  contseg2 = parseInt(cont2/30);
  contmin2 = parseInt(conttotal2/30/60)
  //text(cont2, 250, 470)
  //text(conttotal2, 250, 450)
  text(contseg2, 250, 400)
  text(contmin2, 220, 400)
  
  if (cont2 == 0){
    cont2=1800
  }
 if (conttotal2 <= 0 ){
   tela = 8
   conttotal2 = 3620
   contseg2 = 0;
   contmin2 = 0;
   pontosi2 = 0;
 }
  
  textSize(20)
  fill(255)
  text("Qual é o valor de x?", 250, 120)
  for (j = 0; j < quantidadedecartas2; j++){
    fill(255, 204, 0)
    rect(cartasX2[j], cartasY2[j], cartaLargura2, cartaAltura2, 10);
    if (viradas2[j]){
      fill(20)
      textSize(12)
      text(cartasValorF2[j], cartasX2[j] + 34, cartasY2[j] + 45)
    }
  }
  fill(20)
 
    if( contador2 == 2){
    contTempo2++; 
    
    }
    // conta dois segundos 
    if ( contTempo2 > 60){
        contagemTempo2 = false; 
        desviraCartas2();
        contTempo2 = 0; 
   }
  if (contador2 > 2){
    desviraCartas2()
  }
  
   if(mouseX > cartasX2[0] && mouseX < cartasX2[0] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[0] = true;
   }
   if(mouseX > cartasX2[1] && mouseX < cartasX2[1] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[1] = true;
   }
     if(viradas2[0] && viradas2[1]){
       pontos2 = pontos2 + 10
       pontosi2 = parseInt(pontos2/60)
       contador2 = 2
       cartasX2[0] = viradas2[j]
       cartasX2[1] = viradas2[j]
     }
  
   if(mouseX > cartasX2[2] && mouseX < cartasX2[2] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[2] = true;
   }
   if(mouseX > cartasX2[6] && mouseX < cartasX2[6] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[6] = true;
   }
     if(viradas2[2] && viradas2[6]){
       pontos2 = pontos2 + 10
       pontosi2 = parseInt(pontos2/60)
      
       cartasX2[2] = viradas2[j];
       cartasX2[6] = viradas2[j];
     }
  
   if(mouseX > cartasX2[3] && mouseX< cartasX2[3] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[3] = true;
   }
   if(mouseX > cartasX2[5] && mouseX < cartasX2[5] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[5] = true;
    
   }
     if(viradas2[3] && viradas2[5]){
       pontos2 = pontos2 + 10
       pontosi2 = parseInt(pontos2/60)
      
       cartasX2[3] = viradas2[j]
       cartasX2[5] = viradas2[j]
     }
     
  if(mouseX > cartasX2[4] && mouseX< cartasX2[4] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[4] = true;
   }
   if(mouseX > cartasX2[7] && mouseX < cartasX2[7] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[7] = true;
    
   }
     if(viradas2[4] && viradas2[7]){
       pontos2 = pontos2 + 10
       pontosi2 = parseInt(pontos2/60)
       
       cartasX2[4] = viradas2[j]
       cartasX2[7] = viradas2[j]
     }
  
  if(mouseX > cartasX2[8] && mouseX< cartasX2[8] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[8] = true;
   }
   if(mouseX > cartasX2[9] && mouseX < cartasX2[9] + cartaLargura2 && mouseY > cartasY2[j] + cartaAltura2){
     viradas2[9] = true;
    
   }
     if(viradas2[8] && viradas2[9]){
       pontos2 = pontos2 + 10
       pontosi2 = parseInt(pontos2/60)
       
       cartasX2[8] = viradas2[j]
       cartasX2[9] = viradas2[j]
     }
  
  if(cartasX2[0] == viradas2[j] && cartasX2[1] == viradas2[j] &&
   cartasX2[2] == viradas2[j] && cartasX2[3] == viradas2[j] && cartasX2[4] == viradas2[j]&& cartasX2[5] == viradas2[j] && cartasX2[6] == viradas2[j] && cartasX2[7] == viradas2[j] && cartasX2[8] == viradas2[j] && cartasX2[9] == viradas2[j] ){
    tela = 15
    pontosi2 = 0
    viradas2[j] = true;
    contseg2 = 0;
    contmin2 = 0;
  }
  
  
  
  
   textSize(22)
     fill(250)
  text("Pontos: "+pontosi2, 240, 450)
  
}
function Nivel3(){
   cont3 = cont3 - 1;
  conttotal3 = conttotal3 - 1
  textSize(22)
  fill(250)
  
  contmin3 = contmin3 - 1
  contseg3 = parseInt(cont3/30);
  contmin3 = parseInt(conttotal3/30/60)
  //text(cont3, 250, 470)
  //text(conttotal3, 250, 450)
  text(contseg3, 250, 400)
  text(contmin3, 220, 400)
  
  if (cont3 == 0){
    cont3=1800
  }
 if (conttotal3 <= 0 ){
   tela = 8
   conttotal3 = 3620
   contseg3 = 0;
   contmin3 = 0;
   pontosi3 = 0;
 }
  
  textSize(20)
  fill(255)
  text("Qual é a derivada da função?", 250, 120)
  for (k = 0; k < quantidadedecartas3; k++){
    fill(255, 204, 0)
    rect(cartasX3[k], cartasY3[k], cartaLargura3,       cartaAltura3, 10);
    if (viradas3[k]){
      fill(20)
      textSize(12)
      text(cartasValorF3[k], cartasX3[k] + 34, cartasY3[k] + 45)
    }
  }
  fill(20)
 
    if( contador3 == 2){
    contTempo3++; 
    
    }
    // conta dois segundos 
    if ( contTempo3 > 60){
        contagemTempo3 = false; 
        desviraCartas3();
        contTempo3 = 0; 
   }
  if (contador3 > 2){
    desviraCartas3()
  }
  
   if(mouseX > cartasX3[0] && mouseX < cartasX3[0] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[0] = true;
   }
   if(mouseX > cartasX3[1] && mouseX < cartasX3[1] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[1] = true;
   }
     if(viradas3[0] && viradas3[1]){
       pontos3 = pontos3 + 10
       pontosi3 = parseInt(pontos3/60)
       contador3 = 2
       cartasX3[0] = viradas3[k]
       cartasX3[1] = viradas3[k]
     }
  
   if(mouseX > cartasX3[2] && mouseX < cartasX3[2] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[2] = true;
   }
   if(mouseX > cartasX3[6] && mouseX < cartasX3[6] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[6] = true;
   }
     if(viradas3[2] && viradas3[6]){
       pontos3 = pontos3 + 10
       pontosi3 = parseInt(pontos3/60)
      
       cartasX3[2] = viradas3[k];
       cartasX3[6] = viradas3[k];
     }
  
   if(mouseX > cartasX3[3] && mouseX< cartasX3[3] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[3] = true;
   }
   if(mouseX > cartasX3[5] && mouseX < cartasX3[5] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[5] = true;
    
   }
     if(viradas3[3] && viradas3[5]){
       pontos3 = pontos3 + 10
       pontosi3 = parseInt(pontos3/60)
      
       cartasX3[3] = viradas3[k]
       cartasX3[5] = viradas3[k]
     }
     
  if(mouseX > cartasX3[4] && mouseX< cartasX3[4] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[4] = true;
   }
   if(mouseX > cartasX3[7] && mouseX < cartasX3[7] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[7] = true;
    
   }
     if(viradas3[4] && viradas3[7]){
       pontos3 = pontos3 + 10
       pontosi3 = parseInt(pontos3/60)
       
       cartasX3[4] = viradas3[k]
       cartasX3[7] = viradas3[k]
     }
  
  if(mouseX > cartasX3[8] && mouseX< cartasX3[8] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[8] = true;
   }
   if(mouseX > cartasX3[9] && mouseX < cartasX3[9] + cartaLargura3 && mouseY > cartasY3[k] + cartaAltura3){
     viradas3[9] = true;
    
   }
     if(viradas3[8] && viradas3[9]){
       pontos3 = pontos3 + 10
       pontosi3 = parseInt(pontos3/60)
       
       cartasX3[8] = viradas3[k]
       cartasX3[9] = viradas3[k]
     }
  
  if(cartasX3[0] == viradas3[k] && cartasX3[1] == viradas3[k] &&
   cartasX3[2] == viradas3[k] && cartasX3[3] == viradas3[k] && cartasX3[4] == viradas3[k]&& cartasX3[5] == viradas3[k] && cartasX3[6] == viradas3[k] && cartasX3[7] == viradas3[k] && cartasX3[8] == viradas3[k] && cartasX3[9] == viradas3[k] ){
    tela = 0
    
  }
  
  
  
  
   textSize(22)
     fill(250)
  text("Pontos: "+pontosi3, 240, 450)
  
}
function Instrução(){
  background(img3)
  fill(250)
  
 textSize(16)
  text("Pressione ESC para sair",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("Assim como um jogo de memória, selecione com o mouse um", 250, 160)
  text("par de cartas do jogo, se as cartas forem iguais, recolha e ", 250, 180)
  text("jogue novamente. Se forem cartas diferentes, estas devem ser", 250, 200)
  text("viradas novamente. ", 250, 220)
  text("Nesse jogo, ao invés de cartas com imagens, vão ser funções", 250, 240)
  text("matemáticas, e cada nível vai determinar como vai ser o uso", 250, 260)
  text("dessas funções", 250, 280)
  text("Pressione a tecla -> para as instruções de cada nível", 250, 320)
  
}
function Instruçãofase1(){
  background(img3)
  if(tela == 3){
     fill(250)
 
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 1 o jogador terá que identificar qual é a função", 250, 160)
  text("apresentada em uma carta, e achar em outra carta", 250, 180)
  text("a sua denominação.", 250, 200)
  text("Exemplo:", 250, 230)
  fill(250)
  rect(100, 280, 90, 100)
  fill(51)
  text("x + 4", 147, 342)
  fill(250)
  rect(300, 280, 90, 100)
  fill(51)
  text("Função", 345, 342)
  text("Afim", 345, 362)
  }
  
}
function Instruçãofase2(){
  background(img3)
  fill(250)
 
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 2 o jogador terá que encontrar qual é o valor de x", 250, 170)
  text("da função que for especificada em uma carta, ", 250, 190)
 text("e achar seu resultado em outra", 250, 210)
  text("Exemplo:", 250, 250)
  fill(250)
  rect(100, 280, 90, 100)
  fill(51)
  text("x+3=9", 147, 342)
  fill(250)
  rect(300, 280, 90, 100)
  fill(51)
  text("x=6", 345, 342)
  
}
function Instruçãofase3(){
  background(img3)
  fill(250)
  
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 3 o jogador terá que encontrar qual a derivada da ", 250, 170)
  text("função que for especificada em uma carta, ", 250, 190)
 text("e achar seu resultado em outra", 250, 210)
  text("Exemplo:", 250, 250)
  fill(250)
  rect(100, 280, 90, 100)
  fill(51)
  text("3x²", 147, 342)
  fill(250)
  rect(300, 280, 90, 100)
  fill(51)
  text("6x", 345, 342)
}
function Instruçãofase4(){
  background(img3)
  fill(250)
 
  textSize(16)
  text("Pressione <- para voltar",110, 490)
  text("pressione -> para avançar", 390, 490)
  textSize(15)
  text("No Nível 4 o jogador terá que encontrar qual a integral da ", 250, 170)
  text("função que for especificada em uma carta, ", 250, 190)
 text("e achar seu resultado em outra", 250, 210)
  text("Exemplo:", 250, 250)
  fill(250)
  rect(100, 280, 90, 100)
  fill(51)
  text("∫xdx", 147, 342)
  fill(250)
  rect(300, 280, 90, 100)
  fill(51)
  text("x²", 345, 342)
  text("__", 345, 342)
  text("+ c", 367, 350)
  text("2", 345, 362)
}
function Créditos(){
  background(img4)
  textSize(15)

  text("Pressione ESC para sair",250, 490);
  image(img1, 65, 180, 100, 120);
  image(img2, 320, 180, 100, 120)
  textSize(15);
  text("ALUNO", 115, 170);
  text("EDUCADOR", 370, 170)
  textSize(12);
  text("VICTOR BARROS LARANJEIRA", 110, 325);
  text("HERICK CIDARTA GOMES DE OLIVEIRA", 365, 325)
  text("MESTRADO EM DEMOGRAFIA NA UFRN", 360, 345)
  text("PROFESSOR NA UFPB", 370, 365)
  text("BACHARELANDO EM C&T", 110, 345)
  text("UFRN", 115, 365)
}
function keyPressed(){
  
  if (key == "Enter" && tela == 1)
    tela = 9
  if(key =="Escape" && tela == 1)
    tela = 0
  
  if (key == "Enter" && tela == 10)
    tela = 11
  if(key =="Escape" && tela == 10)
    tela = 0
  if (key == "Enter" && tela == 12)
    tela = 13
  if(key =="Escape" && tela == 12)
    tela = 0
  
  if (key == "Escape" && tela == 7)
    tela = 0;
  if (key == "Escape" && tela == 2)
    tela = 0;
  if (key == "Escape" && tela == 8)
    tela = 0;
  
  if (key == "ArrowRight" && tela >= 2 && tela < 6) {
     tela = tela + 1;
  }
    
   if (key == "ArrowLeft" && tela >2 && tela < 7)
    tela = tela - 1;
   if(key == 'Escape' && tela == 15){
     tela = 0;
   }
}
function draw() {
  background(img);

  if (tela == 0){
    menu()
   
  }
   if (tela == 1){
    Fase1()
    
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
  if (tela == 8){
    Gameover()
  }
  if (tela == 9){
    Nivel1()
  }
  if(tela == 10){
    Fase2()
  }
  if(tela == 11){
    Nivel2()
  }
  if(tela == 12){
    Fase3()
  }
  if(tela == 13){
    Nivel3()
  }
  if(tela == 15){
    FimDeJogo()
  }
}
function mouseReleased(){
  if(tela === 9){
for (i = 0;  i < quantidadedecartas; i++){
    if(mouseX > cartasX[i] && mouseX < cartasX[i] + 
      cartaLargura && mouseY > cartasY[i] && mouseY < cartasY[i] + cartaAltura ){
      viradas[i] =  ! viradas[i]
      contagemTempo = true
      contador++
      }
    }
  } 
if(tela === 11){
    for(j = 0; j < quantidadedecartas2; j++){
       if(mouseX > cartasX2[j] && mouseX < cartasX2[j] + 
          cartaLargura2 && mouseY > cartasY2[j] && mouseY < cartasY2[j] + cartaAltura2 ){
          viradas2[j] =  !viradas2[j]
          contagemTempo2 = true
          contador2++

        }
     }
  } 
 if(tela === 13){
for (k = 0;  k < quantidadedecartas3; k++){
    if(mouseX > cartasX3[k] && mouseX < cartasX3[k] + 
      cartaLargura3 && mouseY > cartasY3[k] && mouseY < cartasY3[k] + cartaAltura3 ){
      viradas[k] =  !viradas3[k]
      contagemTempo3 = true
      contador3++
      }
    }
  } 
}
function desviraCartas(){
  for ( i = 0; i < quantidadedecartas; i++ ){
    viradas[i] = false; 
  }
  contTempo = 0
  contador = 0
}
function desviraCartas2(){
  for ( j = 0; j < quantidadedecartas2; j++ ){
    viradas2[j] = false; 
  }
  contTempo2 = 0
  contador2 = 0
}

function desviraCartas3(){
  for ( k = 0; k < quantidadedecartas3; k++ ){
    viradas3[k] = false; 
  }
  contTempo3 = 0
  contador3 = 0
}
function Gameover(){
  background(img5)
  
}
function Fase1(){
  background(img6)
}

function Fase2(){
  background(img7)
}

function Fase3(){
  background(img8)
}
function FimDeJogo(){
  background(img9)
}