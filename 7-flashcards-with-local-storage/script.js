const flashCards = document.getElementsByClassName("flash-cards")[0];
const flashBox = document.getElementsByClassName("flash-box")[0];
const question = document.getElementById("floatingTextarea2");
const answer = document.getElementById("floatingTextarea");


// content will be fetched from the local storage if there's any
let contentFromArray = localStorage.getItem("items") ?
JSON.parse(localStorage.getItem("items")) : [];


// all cards will be deleted when you press "Del Cards" button
deleteAllCards = () => {
    localStorage.clear();
    flashCards.innerHTML = "";
    contentFromArray = [];
};


// flash-box will display when you press "New Card" button
addNewCard = () => {
    flashBox.style.display = "block";
}


// flash-box display will be removed when you press "Close" button
closeCard = () => {
    flashBox.style.display = "none";
};