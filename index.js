//For first dice 
var randomNumber1 = Math.floor(Math.random()*6)+1;  //random  number between 1 and 6
var randomDiceImage = "dice"+randomNumber1+".png"; //dice1.png to dice2.png
var randomImageSource = "images/"+ randomDiceImage; //images/dice1.png to images/dice2.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//For second dice
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+ randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//For heading
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else 
{
    document.querySelector("h1").innerHTML = "It's a draw!"
}