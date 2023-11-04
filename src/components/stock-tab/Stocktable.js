import { Button, Spacer, Input } from '@nextui-org/react';
import React, { useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Stocktable({ books }) {
  const [visibleBooks, setVisibleBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const bottom = useRef(null);
  const delay = 1000; // Adjust the delay as needed
  const pageSize = 1; // Number of rows to load at a time
  const [currentPage, setCurrentPage] = useState(1);

  // add state to search term
  const [searchTerm, setSearchTerm] = useState('');

  // Whenever the books prop changes, update the visibleBooks state
  useEffect(() => {
    if (books.length > 0) {

      // Filter the books based on the search term
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setVisibleBooks(filteredBooks.slice(0, currentPage * pageSize));
    }
  }, [books, currentPage, searchTerm]);

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
    <Container>

      {/* search bar */}
      <Spacer y={4} />
      <Input
      isClearable
      radius="lg"
      classNames={{
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
        size="md"
        bordered
        clearable
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Spacer />


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
              <td>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                  Edit
                </Button>
              </td>
              <td>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                  Delete
                </Button>
              </td>
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
    </Container>
  );
}

export default Stocktable;
