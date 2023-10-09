const flashCards = document.getElementsByClassName("flash-cards")[0];
const flashBox = document.getElementsByClassName("flash-box")[0];
const question = document.getElementById("floatingTextarea2");
const answer = document.getElementById("floatingTextarea");


/* content will be parsed from the local storage if there's any
 * key name is "items"
 */
let contentFromArray = localStorage.getItem("items") ?
JSON.parse(localStorage.getItem("items")) : [];


/* after adding the content to the local storage, a new div .flash-card (check css property) will display on the screen
 * new card saved and placed below the flash-box when you press "Save" button
 */
divMaker = (text) => {
    let div = document.createElement("div");
    let question_h2 = document.createElement("h2");
    let answer_h2 = document.createElement("h2");

    div.className = "flash-card";

    question_h2.setAttribute("style",
    "border-top: 1px solid red; padding: 15px; margin-top: 30px");
    question_h2.innerHTML = text.myQuestion; // styles inside the div

    answer_h2.setAttribute("style",
    "text-align: center; display: none; color: red");
    answer_h2.innerHTML = text.myAnswer; // styles for answer text

    div.appendChild(question_h2);
    div.appendChild(answer_h2);

    // reveals the correct answer inside the flash-cards after the "click" event
    div.addEventListener("click", function() {
        return answer_h2.style.display == "none" ? answer_h2.style.display = "block" 
        : answer_h2.style.display = "none";
    });

    flashCards.appendChild(div);
};

contentFromArray.forEach(divMaker); // all elements in the array (contentFromArray) is called


/* object properties are placed in key values
 * all of the input content will be stored as arrays in the local storage 
 */
saveNewCard = () => {
    let flashBoxInfo = {
        "myQuestion" : question.value,
        "myAnswer" : answer.value
    }

    contentFromArray.push(flashBoxInfo);
    localStorage.setItem("items", JSON.stringify(contentFromArray));
    divMaker(contentFromArray[contentFromArray.length - 1]);

    // the textarea with labels "question" and "answer" will reset to empty field
    question.value = "";
    answer.value = "";
};


// all cards will be deleted when you press "Del Cards" button
deleteAllCards = () => {
    localStorage.clear();
    flashCards.innerHTML = "";
    contentFromArray = [];
};


// flash-box will display when you press "New Card" button
addNewCard = () => {
    flashBox.style.display = "block";
};


// flash-box display will be removed when you press "Close" button
closeCard = () => {
    flashBox.style.display = "none";
};