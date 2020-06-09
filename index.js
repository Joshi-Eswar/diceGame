/*var player1=0;
var player2=0;
for(i=0;i<=1;i++){
 var randomNum =Math.random()*6;
 randomNum=Math.floor(randomNum)+1;
if(i==0){player1=randomNum;}
if(i==1){player2=randomNum;}

 if(randomNum==1){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice1.png");

 }
 else if(randomNum==2){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice2.png");
 }
 else if(randomNum==3){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice2.png");
 }
 else if(randomNum==4){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice4.png");
}
else if(randomNum==5){
    document.querySelectorAll("img")[i].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[i].setAttribute("src","images/dice6.png");
}
}*/
var randomVariable1=Math.floor(Math.random()*6)+1;

var imageSourcer1="dice"+randomVariable1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSourcer1);

var randomVariable2=Math.floor(Math.random()*6)+1;

var imageSourcer2 ="dice"+randomVariable2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imageSourcer2);

if(randomVariable1==randomVariable2){
    document.querySelector("h1").textContent="Draw";
}
else if(randomVariable1>randomVariable2){
    document.querySelector("h1").textContent="🎇 player1 Wins🎇";
}
else {
    document.querySelector("h1").textContent="🎇 player2 Wins🎇";
}
 