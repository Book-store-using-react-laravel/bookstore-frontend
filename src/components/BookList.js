import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { Row } from 'react-bootstrap';


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

    return (
        <Row className='book-list'>
            {books.map((book) => (
              <BookCard key={book.id} book={book}/>
            ))}
        </Row>
    );
}

export default BookList;
