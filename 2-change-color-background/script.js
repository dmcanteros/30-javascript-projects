let index = 0;

function changeColors() {
    let colors = ["blue", "orange", "pink", "yellow", "purple", "red"];

    document.getElementsByTagName("main")[0].
    style.background = colors[index++];

    if (index > colors.length - 1) 
        index = 0;
}