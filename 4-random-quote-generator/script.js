function generateQuote() {
    let quotes = {
        "- John Romero": '"You might not think that programmers are artists, but programming is an extremely creative profession. It\'s logic-based creativity."',
        "- Sercan Leylek": '"Every programmer is an author."',
        "- Arianna Huffington": '"Learning to code is useful no matter what your career ambitions are."'
    };

    let authors = Object.keys(quotes);

    
    let authorKey = authors[Math.floor(Math.random() * authors.length)];
    let quoteValue = quotes[authorKey];

    document.getElementById("quote").innerHTML = quoteValue;
    document.getElementById("author").innerHTML = authorKey;

}