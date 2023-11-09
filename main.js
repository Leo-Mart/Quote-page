// array of objects to hold the quotes. For now I only have author and the actual quote as properties
// could add say a source of the quote and year as well, but let's start simply
quotes = [
  {
    author: "Oscar Wilde",
    quote: "The truth is rarely pure and never simple.",
  },
  {
    author: "Oscar Wilde",
    quote: "I am not young enough to know everything.",
  },
  {
    author: "Oscar Wilde",
    quote: "Experience is merely the name men gave to their mistakes.",
  },
  {
    author: "Delamain (although technically the writers of Cyberpunk 2077)",
    quote:
      "When you live among humans, it's essential to find a shared, fundamental point of understanding. Truth and Good are values proven to cause division, whereas beauty is universal.",
  },
  {
    author: "Shakespeare, spoken by Macbeth",
    quote: `Tomorrow, and tomorrow, and tomorrow,
      Creeps in this petty pace from day to day,
      To the last syllable of recorded time;
      And all our yesterdays have lighted fools
      The way to dusty death. Out, out, brief candle!
      Life\'s but a walking shadow, a poor player,
      That struts and frets his hour upon the stage,
      And then is heard no more. It is a tale
      Told by an idiot, full of sound and fury,
      Signifying nothing.`,
  },
  {
    author: "David Foster Wallace",
    quote: `None of this is about morality, or religion, or dogma, or big fancy questions of life after death. the capital-T Truth is about life before death.
      It is about making it to thirty, or maybe even fifty, without wanting to shoot yourself in the head.
      It is about the real value of a real education, which has nothing to do with grades or degrees and everything to do with simple awareness -- awareness of what is so real and essential, so hidden in plain sight all around us, that we have to keep reminding ourselves over and over:
      This is Water.
      This is Water.`,
  },
];

//fecthing some stuff from the dom for manipulation
let authorName = document.querySelector(".author");
let quoteText = document.querySelector(".quote");
let clearBtn = document.querySelector(".clear-quote");
let getQuoteBtn = document.querySelector(".get-quote");
let getRandomQuoteBtn = document.querySelector(".random-quote");
// this counter for the function has to be in the global scope instead of inside the function, but i'm not sure why?
let index = 0;

quoteText.innerText = quotes[0].quote;
authorName.innerText = quotes[0].author;

// clicking the clear button to clear the quote. Not sure there is any value to this, but why not
clearBtn.addEventListener("click", clearQuote);

//click the get new quote button to load in a quote
getQuoteBtn.addEventListener("click", getNextQuote);

// click this button to randomize the quote that is presented. This works well enough but sometimes I can return the same value twice, so got to figure out a way for it to not do that. Probably an if statement of some kind
getRandomQuoteBtn.addEventListener("click", function () {
  random = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[random].quote;
  authorName.innerText = quotes[random].author;
});

// functions

// clear the quote
function clearQuote() {
  quoteText.innerText = "";
  authorName.innerText = "";
  index = 0;
}

// get next quote

function getNextQuote() {
  // had the let index = 0; in here at first, but that did not work, only increase it by one and then stayed on one
  // maybe I have to pass the array of quotes and the counter as parameters/arguments?
  index++;
  console.log(index);
  quoteText.innerText = quotes[index].quote;
  authorName.innerText = quotes[index].author;
  // trying to catch the error that happens when the counter goes beyond the length of the array, but not working
  if (index > quotes.length) {
    index = 0;
  }
}

// probably don't need this function, but maybe it would be better to build a function for it, escpecially if I want to build in a way for it to not show the same quote twice in a row if it randoms out the same number
//function getRandomQuote() {
// If i remember random numbers in javascript right math.random gives me a random number between 0-1 so if i want to use it to randomize an index for an array I have to round it down the nearest full integer and then multiply with the current value of a counter/iteration "i"
// random = Math.random();
// console.log(random);
//}

/* function getNewQuoteLoop(){
    for (i = 0; i < quotes.length; i++) {
        author = quotes[i].author;
        quote = quotes[i].quote;
        console.log(author);
        quoteText.textContent = quote;
        authorName.textContent = author;
    }
} */
