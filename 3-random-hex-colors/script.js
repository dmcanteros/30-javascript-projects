function showRandomHex() {
    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexCode = "";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);

        hexCode += hexNumbers[randomIndex];
    }

    document.getElementById("hex-code").innerHTML = hexCode;
    document.getElementsByTagName("main")[0].
    style.background = "#" + hexCode;
};