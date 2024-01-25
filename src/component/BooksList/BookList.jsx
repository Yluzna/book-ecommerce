import React, { useState, useEffect } from 'react';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await fetch('http://localhost:3000/books');
        
        if (!response.ok) {
          throw new Error('Error in API request');
        }
        
        // Convert the response to JSON
        const data = await response.json();
        
        // Update the state with the API data
        setBooks(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <img src={book.img} alt={book.name} />
            <h3>{book.name}</h3>
            <p>Price: ${book.price}</p>
            <p>Rating: {book.calification}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;