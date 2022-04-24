const quotes = [
    {
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author:"Mother Teresa"
},
{
    quote:"The way to get started is to quit talking and begin doing. ",
    author:"Walt Disney"
},
{
    quote:"If you really look closely, most overnight successes took a long time.",
    author:"Steve Jobs"
},
{
    quote:"You know you are on the road to success if you would do your job and not be paid for it.",
    author:"Oprah Winfrey"
},
{
    quote:"Life is what happens when you're busy making other plans.",
    author:"John Lennon"
},
{
    quote:"Love the life you live. Live the life you love.",
    author:"Bob Marley"
},
{
    quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author:"Marilyn Monroe"
},
{
    quote:"I never dreamed about success, I worked for it.",
    author:"Estee Lauder"
},
{
    quote:"Whether you think you can or you think you can't, you're right.",
    author:"Henry Ford"
},
{
    quote:"Nothing is impossible, the word itself says, ‘I'm possible!",
    author:"Audrey Hepburn"
}
]

const quete = document.querySelector("#quete span:first-child");
const author = document.querySelector("#quete span:last-child");

const todaysQuete = quotes[Math.floor(Math.random() * quotes.length)];

quete.innerText = todaysQuete.quote;
author.innerText = todaysQuete.author;