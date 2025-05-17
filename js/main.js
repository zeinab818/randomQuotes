var outputQuote=document.getElementById("output");
var author=document.getElementById("author");
var button = document.querySelector("button");
var quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        author: "― Albert Einstein"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "― Nelson Mandela"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "― John Lennon"
    },
    {
        quote: "So many books, so little time.",
        author: "― Frank Zappa"
    }
];
// function getQuote(){
//     var randomIndex = Math.floor(Math.random() * quotes.length);
//     var randomQuote = quotes[randomIndex];
//     outputQuote.style.display = "block";
//     author.style.display = "block";
//     outputQuote.innerHTML = `"${randomQuote.quote}"`;
//     author.innerHTML = randomQuote.author;
// }
// button.addEventListener("click", getQuote);

var lastIndex = -1;

function getQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    var randomQuote = quotes[randomIndex];
    outputQuote.innerHTML = `"${randomQuote.quote}"`;
    author.innerHTML = randomQuote.author;

    outputQuote.style.display = "block";
    author.style.display = "block";
}
