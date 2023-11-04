import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';

function Stocktable({ books }) {
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const bottom = useRef(null);
  const delay = 1000; // Adjust the delay as needed
  const pageSize = 1; // Number of rows to load at a time
  const [currentPage, setCurrentPage] = useState(1);

  // Whenever the books prop changes, update the visibleBooks state
  useEffect(() => {
    if (books.length > 0) {
      setVisibleBooks(books.slice(0, currentPage * pageSize));
    }
  }, [books, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting && currentPage * pageSize < books.length) {
        setLoading(true);
        setTimeout(() => setShowLoading(true), delay);
        setCurrentPage((prevPage) => prevPage + 1);
        setLoading(false);
        setShowLoading(false);
      }
    });

    const bc = bottom.current;

    if (bc) {
      observer.observe(bc);
    }

    return () => {
      if (bc) {
        observer.unobserve(bc);
      }
    };
  }, [currentPage, books]);

  return (
    <div>

      {/* search bar */}
      

      {/* table */}
      <Table striped borderless hover responsive variant='dark' className="infinite-scroll-container custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Images</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {visibleBooks.map((book, index) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.stock}</td>
              <td>{book.images.length}</td>
              <td>edit</td>
              <td>delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {loading && (
        <div
          className={showLoading ? 'loading' : ''}
          style={{ opacity: showLoading ? 1 : 0 }}
        >
          Loading...
        </div>
      )}
      <div ref={bottom} />
    </div>
  );
}

export default Stocktable;
