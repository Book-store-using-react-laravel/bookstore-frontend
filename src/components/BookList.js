import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/books')
        .then((response) => {
            setBooks(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    // render the list of books
  return (
    <div>
        {books.map((book) => (
            <div key={book.id}>
                <p>Book title: {book.title}</p>
                <p>Author of the book: {book.author}</p>
                <p>Price: Rs.{book.price}</p>
                <p>Stock: {book.stock}</p>
            </div>
        ))}
    </div>
  )
}

export default BookList