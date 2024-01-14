const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];

function generateQuote() {
    const quoteContainer = document.getElementById('quoteContainer');

    const randomIndex = Math.floor(Math.random() * quotes.length);

    quoteContainer.textContent = quotes[randomIndex];
}
