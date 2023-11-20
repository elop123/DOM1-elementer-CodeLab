/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
const element=document.getElementById("redFigure");
console.log(element);

const element2=document.getElementById("yellowFigure");
console.log(element);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her
document.getElementById("redFigure").style.backgroundColor="blue";

document.getElementById("yellowFigure").style.backgroundColor="blue";




/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/


// din kode her
let elem=document.createElement("h2");
elem.innerHTML="Opgave 2.1 løsning";
document.getElementById("opgaveTwo").appendChild(elem);

let newp=document.createElement("p");
let newelem=document.createTextNode("Jeg har løst opgave 2.1");
newp.appendChild(newelem);
document.getElementById("opgaveTwo").appendChild(newp);



// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
let items=document.getElementsByClassName("purpleFigures myFigure");
console.log(items);



/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her


/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
let title=document.createElement("h3");
title.innerHTML="Tiger";
document.getElementById("opgaveFour").appendChild(title);

let image=document.createElement("img");
image.src='assets/img/standard_tiger.jpg';
document.getElementById("opgaveFour").appendChild(image);

let text=document.createElement("p");
text.innerHTML="En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer."
document.getElementById("opgaveFour").appendChild(text);






