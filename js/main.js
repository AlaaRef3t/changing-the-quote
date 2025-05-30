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
    {
        writer: "― الفنان القدير حكيم",
        quote: "بكره الايام تبين مين قاسي ومين حنين وساعتها هتعرفوني لما الايام تبييين لما الااياااام تبببييين"
    },
    {
        writer: "― Bill Keane",
        quote: "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”"
    },
    {
        writer: "― سقراط عم الناس",
        quote: "ان الحياة التي لم ندرسها لا تستحق ان نعيشها"
    },
    {
        writer: "وليام شكسبير",
        quote: "ان اكون او لا اكون هذا هو السؤال"
    },
    {
        writer: "هيراقليطس ",
        quote: "الشئ الوحيد الثابت فالحياه هو التغيير"
    },
    {
        writer: "رالف والدو إيمرسون ",
        quote: "ليس هدف الحياة أن تكون سعيدًا، بل أن تكون مفيدًا، شريفًا، رحيمًا، وأن تُحدث فرقًا في حياتك، وأن تعيش حياةً طيبة"
    },
]


var lastQuote;

function funcToGenerate() {

    do {
      index = Math.floor(Math.random() * myQuotes.length);
    } 
    while (index === lastQuote)


    getQuote.innerHTML = myQuotes[index].quote;
    getWriter.innerHTML = myQuotes[index].writer;


    lastQuote = index ;


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


