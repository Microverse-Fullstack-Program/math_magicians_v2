import { useState, useEffect } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'HIJnuO75APP270hIqiA33g==jZKKK75Rr1Ru1yfZ',
            },
          });
        const response = await res.json();
        response.forEach((quote) => {
          setQuotes((prevState) => (
            [...prevState, quote]));
        });
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes]);

  return (
    <div className="quotes">
      <h1>Quotes API</h1>
      {hasError && <p className="loading">Something went wrong.</p>}
      {isLoading ? (
        <p className="loading">Loading ...</p>
      ) : (
        <ul className="quote-list">
          {quotes.map((quote) => (
            <li key={quote.author}>
              {quote.quote}
              {' - '}
              {quote.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Quotes;
