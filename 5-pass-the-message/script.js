const inputMessage = document.getElementById("input-message");

inputMessage.addEventListener("keydown", (event) => {
    if (event.key == "Enter")
    promptMessage();
});

const promptMessage = () => {
    document.getElementById("output-message").innerHTML = inputMessage.value;
    inputMessage.value = "";
};