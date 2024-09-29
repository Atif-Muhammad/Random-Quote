/* You can either use API call to generate a random qoute 
    or use built in method to choose among defined quote alternates
*/

// API call

/* const API =  ""
const options = {
    method: 'GET'
};
try {
    const response = await fetch(API, options);
    document.getElementById("quoteDiv").innerHTML =  await response.text();
} catch (error) {
    console.error(error);
} */

// Quote array
const quotes = [
    { "Steve Jobs": "The only way to do great work is to love what you do." },
    { "Martin Luther King Jr.": "In the end, we will remember not the words of our enemies, but the silence of our friends." },
    { "John Lennon": "Life is what happens when you're busy making other plans." },
    { "Winston Churchill": "Success is not final, failure is not fatal: It is the courage to continue that counts." },
    { "Martin Luther King Jr.": "Injustice anywhere is a threat to justice everywhere." },
    { "Dalai Lama": "Happiness is not something ready made. It comes from your own actions." },
    { "Ralph Waldo Emerson": "Do not go where the path may lead, go instead where there is no path and leave a trail." },
    { "Albert Einstein": "Strive not to be a success, but rather to be of value." },
    { "Lao Tzu": "The journey of a thousand miles begins with one step." },
    { "Peter Drucker": "The best way to predict the future is to create it." },
    { "Sam Levenson": "Don’t watch the clock; do what it does. Keep going." },
    { "Wayne Gretzky": "You miss 100% of the shots you don’t take." },
    { "Confucius": "It does not matter how slowly you go as long as you do not stop." },
    { "Theodore Roosevelt": "Believe you can and you’re halfway there." },
    { "Muhammad Ali": "Don’t count the days, make the days count." },
    { "Dalai Lama": "The purpose of our lives is to be happy." },
    { "Franklin D. Roosevelt": "The only limit to our realization of tomorrow is our doubts of today." },
    { "Booker T. Washington": "If you want to lift yourself up, lift up someone else." },
    { "Oscar Wilde": "Be yourself; everyone else is already taken." },
    { "William James": "Act as if what you do makes a difference. It does." }
];

let index = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quoteDiv").innerHTML = index[Object.keys(index)];
document.getElementById("Name").innerHTML = `~${Object.keys(index)}`;
