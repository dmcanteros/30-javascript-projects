function generateQuote() {
    let quotes = {
        "- John Romero": '"You might not think that programmers are artists, but programming is an extremely creative profession. It\'s logic-based creativity."',
        "- Sercan Leylek": '"Every programmer is an author."',
        "- Arianna Huffington": '"Learning to code is useful no matter what your career ambitions are."',
        "- Bill Gates": '"Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."',
        "- Takayoshi Y.": '"I learned the fundamentals for programming, which is just what I needed as a first step for my career change!"',
        "- Arianna Huffington": '"Learning to code is useful no matter what your career ambitions are."',
        "- Reshma Saujani": '"Coding is the language of the future, and every girl should learn it. As I’ve learned from watching girls grow and learn in our classrooms, coding is fun, collaborative and creative."',
        "- Cory Booker": '"Computer programming is quickly becoming an essential career skill. Learning to code is a fantastic opportunity equalizer — if you’re good at it, it can help you achieve your dreams."',
        "- Elias C.": '"I learned a lot and finally confronted my fear of programming. Now I feel much more confident."',
        "- Enda Kenny": '"Learning to code is learning to create and innovate."',
        "- Stephen Hawking": '"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn."',
        "- Jon Bentley": '"In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all."',
        "- Gerry Geek": '"A code is like love, it has created with clear intentions at the beginning, but it can get complicated."',
        "- Eagleson’s Law": '"Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else."',
        "- Bjarne Stroustrup": '"There are only two kinds of languages: the ones people complain about and the ones nobody uses."',
        "- Andy Hunt": '"No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first."',
        "- Fred Brooks": '"What one programmer can do in one month, two programmers can do in two months."',
        "- Edsger W. Dijkstra": '"Simplicity is prerequisite for reliability."',
        "- Edsger W. Dijkstra": '"Progress is possible only if we train ourselves to think about programs without thinking of them as pieces of executable code."',
        "- Alan Cooper": '"The value of a prototype is in the education it gives you, not in the code itself."',
        "- Jim Benson": '"Software being \'Done\' is like lawn being \'Mowed\'."',
        "- Ryan Singer": '"So much complexity in software comes from trying to make one thing do two things."',
        "- John Johnson": '"First, solve the problem. Then, write the code."',
        "- Ted Nelson": '"A user interface should be so simple that a beginner in an emergency can understand it within ten seconds."',
        "- Ralph Johnson": '"Before software can be reusable it first has to be usable."',
        "- Alan J. Perlis": '"One man’s constant is another man’s variable."',
        "- Oscar Godson": '"One of the best programming skills you can have is knowing when to walk away for awhile."',
        "- Louis Srygley": '"Without requirements or design, programming is the art of adding bugs to an empty text file."',
        "- Martin Fowler": '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
        "- Harold Abelson": '"Programs must be written for people to read, and only incidentally for machines to execute."',
        "- Kent Beck": '"I\'m not a great programmer; I\'m just a good programmer with great habits."',
        "- Alan Kay": '"The most disastrous thing that you can ever learn is your first programming language."',
        "- C.A.R. Hoare": '"The most important property of a program is whether it accomplishes the intention of its user."',
        "- Joshua Bloch": '"Learning the art of programming, like most other disciplines, consists of first learning the rules and then learning when to break them."',
        "- Bruce Eckel": '"Programming is about managing complexity: the complexity of the problem, laid upon the complexity of the machine. Because of this complexity, most of our programming projects fail."',
        "- Suzy Kassem": '"A conscious human is driven by their conscience, not popular opinion."'
    };

    let authors = Object.keys(quotes);

    
    let authorKey = authors[Math.floor(Math.random() * authors.length)];
    let quoteValue = quotes[authorKey];

    document.getElementById("quote").innerHTML = quoteValue;
    document.getElementById("author").innerHTML = authorKey;

}