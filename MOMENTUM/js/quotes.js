const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote:
            "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway",
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/*
๐ Math.random();
0 ๋ถํฐ 1์ฌ์ด์ ๋๋คํ ์ซ์๋ฅผ ํธ์ถ. (์์ซ์  ์์ฒญ๊น)

์ฐ๋ฆฌ๋ 0๋ถํฐ 9๊น์ง์ ์ซ์๋ฅผ ์ํ๊ธฐ ๋๋ฌธ์ 10์ ๊ณฑํด์ค๋ค.
Math.random() * 10

์ด์ ,๋ค์ ๋ถ์ ์์ซ์ ๋ค์ ์์ ์ฃผ์ด์ผํ๋ค.
์ฌ๊ธฐ์๋ 3๊ฐ์ ํจ์๊ฐ ์๋ค.
1. Math.round() โก๏ธ ๋ฐ์ฌ๋ฆผ ํด์ค.
ex) Math.round(1.4); โก๏ธ  1

2. Math.ceil() โก๏ธ ์ฌ๋ฆผ ํด์ค.
ex) Math.round(1.1); โก๏ธ  2

3. Math.floor() โก๏ธ ๋ด๋ฆผ ํด์ค.
Math.floor(1.9999); โก๏ธ  1

์ฐ๋ฆฌ๋ Math.floor์ ์ฌ์ฉํ์ฌ array quotes ์์ ๊ฐ์ ๊บผ๋ด์ฌ๊ฒ์ด๋ค.
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;