import "./quote.css";
const quote = require('inspirational-quotes');


function Quote() {
    console.log(quote.getQuote());

    return (
        <div className="quoteWrapper">
            <p className="quote">
                <q>
                    {quote.getQuote().text}
                </q>
            </p>
        </div>
    )
}

export default Quote
