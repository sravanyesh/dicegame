var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg1="images/dice"+randomnumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  