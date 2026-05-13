// Text variables (Dutch)
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL =
	"De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";

// Text variables (French)
let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR =
	"La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let titel = document.querySelector("#title");
let subtitle = document.querySelector("#subtitle");
let content = document.querySelector("#text");
let article = document.querySelector(".article");
let buttonFR = document.querySelector("#btn-fr");
let buttonNL = document.querySelector("#btn-nl");

let image = document.createElement("img"); //“Computer, make me a new image object…but don’t show it anywhere yet.”
// -> It’s like holding a photo in your hand — you have it, but it’s not on the wall.

//2. Set initial content on load

titel.innerText = titleNL;
subtitle.innerText = subtitleNL;
content.innerText = textNL;

//3. Select buttons

//4. Add event listeners
buttonNL.addEventListener("click", function () {
	titel.innerText = titleNL; // Changes the titel in html to titleNL when the button clicks on NL
	subtitle.innerText = subtitleNL;
	content.innerText = textNL;
	console.log("click");

	buttonFR.disabled = false; //Turn ON the French button to be able to switch it to fr later
	buttonNL.disabled = true; //Turn OFF the Dutch button (so you can’t click it again)
});

buttonFR.addEventListener("click", function () {
	titel.innerText = titleFR;
	subtitle.innerText = subtitleFR;
	content.innerText = textFR;

	buttonFR.disabled = true;
	buttonNL.disabled = false;
});

//5. Create, configure and append image

image.src = "./appel.jpg"; //Use this picture file
image.alt = "Een rode appel"; //If the picture can’t load, show this text
article.insertBefore(image, subtitle); //Put the image before the subtitle -> To actually place the image on the webpage, you must tell the computer where to put it.
// document.querryselector(".article").prepend(imgElement);
