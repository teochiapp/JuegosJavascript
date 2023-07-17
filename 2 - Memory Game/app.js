const cardArray = [
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    {
        name: "fries",
        img: "images/fries.png",
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "images/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "images/milkshake.png",
    },
    {
        name: "pizza",
        img: "images/pizza.png",
    },
    
];

cardArray.sort(() => 0.5 - Math.random());
const resultDisplay = document.querySelector("#result");
const erroresDisplay = document.querySelector("#errores");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let contadorErrores = 0;

const gridDisplay = document.querySelector("#grid");

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard);
        
        gridDisplay.append(card);
    }
}


function checkMatch(){
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if( optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert ("No seas boludo")
        
        contadorErrores += 1;
    }

    else if( cardsChosen[0] == cardsChosen[1]){
        alert("Bien máquina idolo crack")

        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen);
        
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        if (contadorErrores > 10){
            alert("Que memoria de mierda");
        }
        else{
            alert("Respuesta errónea");
        }

        contadorErrores += 1;
    }

    resultDisplay.textContent = cardsWon.length;
    erroresDisplay.textContent = contadorErrores.toString();
    cardsChosen = [];
    cardsChosenId = [];

    if(cardsWon.length == cardArray.length / 2){
        resultDisplay.textContent = "Felicidades, ganaste el juego!!!";
    }

}



function flipCard(){
    const cardId = this.getAttribute("data-id");

    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    

    if( cardsChosen.length === 2){
        setTimeout(checkMatch, 200);
    }


}


createBoard();