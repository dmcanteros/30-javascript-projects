const input = document.getElementById("input");
const imageContents = document.getElementsByClassName("image-contents")[0];


// the images will show after pressing enter key
input.addEventListener("keydown", function(e) {
    if (e.key === "enter")
    searchImg();
});


searchImg = () => {

};


/* day theme mode is on when daylight
 * night theme mode is on at night-time
*/
dayThemeMode = () => {
    const date = new Date();
    const hour = date.getHours();
    
    if (hour >= 7 && hour <= 19) {
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "whitesmoke";
    }
};