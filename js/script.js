/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * creating other quotes
***/
const quoteObj1 = {
  quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  source: "Winston S. Churchill"
}

const quoteObj2 = {
  quote: "Try not to become a man of success. Rather become a man of value.", 
  source: "Albert Einstein"
}

const quoteObj3 = {
  quote: "If you really look closely, most overnight successes took a long time.", 
  source: "Steve Jobs"
}

const quoteObj4 = {
  quote: "The only limit to our realization of tomorrow will be our doubts of today.", 
  source: "Franklin D. Roosevelt"
}

const quoteObj5 = {
  quote: "The way to get started is to quit talking and begin doing.", 
  source: "Walt Disney"
}

const quoteObj6 = {
  quote: "When something is important enough, you do it even if the odds are not in your favor.", 
  source: "Elon Musk",
  year: "2016"
}

const quoteObj7 = {
  quote: "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.", 
  source: "Jeff Bezos",
  citation: "Good one"
}

// Array of objects
const quotes = [quoteObj1, quoteObj2, quoteObj3, quoteObj4, quoteObj5, quoteObj6, quoteObj7];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  var randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  
  return quotes[randomQuoteNumber];
}



/***
 * `printQuote` function
***/
const printQuote = () => {
  let randomQuote = getRandomQuote();
  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;

  if (randomQuote.citation){
    PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
  }

  if (randomQuote.year){
    PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
  }

  PtoHTML1 += "</p>";

  document.getElementById("quote-box").innerHTML = PtoHTML1;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

