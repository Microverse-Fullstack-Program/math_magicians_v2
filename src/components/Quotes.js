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
        setQuotes(response);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setQuotes]);

  // eslint-disable-next-line
  console.log(quotes);
  return (
    <div className="quotes">
      <h1>Quotes API</h1>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {quotes.map((quote) => (
            <li key={quote.category}>
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
