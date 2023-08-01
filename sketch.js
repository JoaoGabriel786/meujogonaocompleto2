const Engine = Matter.Engine;
const World = Matter.World;
Matter.Bodies;const Constraint = Matter.Constraint;
var engine,world,backgroungImg

function preload(){
alface  = loadImage("assets/alface.webp")
amexa = loadImage ("assets/amexa.png")
boca = loadImage("assets/boca.png")
//hamburge = loadImage("assets/hamburge.avif")
cookie = loadImage ("assets/cookie.webp")
frango = loadImage ("assets/frago.jpg")
jaca = loadImage ("assets/jaca.jpg")
kiwi = loadImage ("assets/kiwi.png")
pizza =loadImage ("assets/pizza.png")
//bolo = loadImage ("assets/bolo.avif")//
//cozinha = loadImage ("assets/cozinha.avif")//

}



function setup () {
    createCanvas(1000,500);
var alface1 = createSprite(400,400,30,10)
var amexa2 = createSprite (200,300,40,5)
var boca3 = createSprite (100,100,50,12)
var hamburge4 = createSprite (500,200,20,15)
var cookie5 = createSprite (600,250,23,12)
var frango6 = createSprite (700,130,25,14)
var kiwi7 = createSprite (230,160,30,16)
var pizza8 = createSprite (300,100,46,20)
var bolo9 = createSprite (200,127,28,30)
var cozinha10 =  createSprite (1000,500,100,100)
 var jaca11 = createSprite (300,200,10,30)
alface1.addImage(alface)
amexa2.addImage (amexa)
boca3.addImage (boca)
//hamburge4.addImage (hamburge)
cookie5.addImage (cookie)
frango6.addImage (frango)
jaca11.addImage (jaca)
kiwi7.addImage (kiwi)
pizza8.addImage (pizza)
//bolo9.addImage (bolo)
//cozinha10.addImage (cozinha)
}

function Draw  () {
    background("gray")
    drawSprites()
}
