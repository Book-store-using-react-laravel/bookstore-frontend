import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { Col, Row, Spinner } from 'react-bootstrap';

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const bottom = useRef(null);
    const delay = 10000;
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(books.length / pageSize);

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

    useEffect(() => {
        const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting && currentPage < totalPages) {
                try {
                    setLoading(true);
                    setTimeout(() => setShowLoading(true), delay);
                    // const response = await axios.get('http://localhost:8000/api/books');
                    // const newData = response.data;
                    setBooks((prevBooks) => [...prevBooks]);
                    setCurrentPage((prevPage) => prevPage + 1);
                    setLoading(false);
                    setShowLoading(false);
                } catch (error) {
                    console.error(error);
                }
            }
        });
        observer.observe(bottom.current);
    }, [currentPage, totalPages]);
    

    const visibleBooks = books.slice(0, currentPage * pageSize);

    return (
        <div className="infinite-scroll-container">
            <Row>
                {visibleBooks.map((book, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>
            <div ref={bottom} />
            {loading && (
                <div
                    className={showLoading ? "loading" : ""}
                    style={{ opacity: showLoading ? 1 : 0 }}
                >
                    <Spinner animation="border" variant="primary" />
                </div>
            )}
            <div ref={bottom}/>
        </div>
    );
}

export default BookList;
