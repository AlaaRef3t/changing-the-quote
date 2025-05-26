var getQuote = document.getElementById("getQuote");
var getWriter = document.getElementById("getWriter");

var myQuotes = [
    {
        writer: "― Oscar Wilde",
        quote: "“Be yourself; everyone else is already taken.”"
    },
    {
        writer: "― Frank Zappa",
        quote: "“So many books, so little time.”"
    },
    {
        writer: "― Bernard M. Baruch",
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        writer: "― Mahatma Gandhi",
        quote: "“Be the change that you wish to see in the world.”"
    },
    {
        writer: "― Mark Twain",
        quote: "“If you tell the truth, you don't have to remember anything.”"
    },
    {
        writer: "― Dr. Seuss",
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    },
]


var index = -1;

function funcToGenerate() {

    var randomQuote = Math.floor(Math.random() * myQuotes.length);
    while (index === randomQuote) {
        randomQuote = Math.floor(Math.random() * myQuotes.length);

    }


    getQuote.innerHTML = myQuotes[randomQuote].quote;
    getWriter.innerHTML = myQuotes[randomQuote].writer;


    index = randomQuote;


}

// another solution =>

//     var index = -1;

// function funcToGenerate() {

//     var randomQuote = Math.floor(Math.random() * myQuotes.length);
//     while (index === randomQuote && myQuotes.length > 1) {
//         randomQuote = Math.floor(Math.random() * myQuotes.length);

//     }


//     getQuote.innerHTML = myQuotes[randomQuote].quote;
//     getWriter.innerHTML = myQuotes[randomQuote].writer;


//     index = randomQuote;


// }


