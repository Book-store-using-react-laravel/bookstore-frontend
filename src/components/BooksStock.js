import React, { useEffect, useState } from 'react';
import Stocktable from './stock-tab/Stocktable';
import axios from 'axios';

function BooksStock() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:8000/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div>
      {/* Render the Stocktable component and pass books as props */}
      <Stocktable books={books} />
    </div>
  );
}

export default BooksStock;
