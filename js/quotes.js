const quotes = [
  { quote: 'To laugh at yourself is to love yourself.', author: '미키마우스' },
  {
    quote: "I'll decide how I feel. I'll be happy today.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
  {
    quote: "If you don't know where you want to go,then it doesn't matter which path you take.",
    author: '이상한 나라의 앨리스',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
