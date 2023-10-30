import React, { useState } from 'react';
import axios from 'axios';
import BookForm from './bookForm';
function Addbook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [imageFiles, setImageFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('price', price);
        formData.append('stock', stock);

        // Append image files to the form data
        for (let i = 0; i < imageFiles.length; i++) {
            formData.append('images[]', imageFiles[i]);
        }

        try {
            const response = await axios.post('http://localhost:8000/api/books', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Handle the response, e.g., show a success message or redirect to the book list.
            console.log('Book created:', response.data);
        } catch (error) {
            // Handle errors, e.g., display error messages to the user.
            console.error('Error creating book:', error);
        }
    }

    return (
        <>
            <BookForm
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                price={price}
                setPrice={setPrice}
                stock={stock}
                setStock={setStock}
                imageFiles={imageFiles}
                setImageFiles={setImageFiles}
                handleSubmit={handleSubmit} // Pass the handleSubmit function
            />
        </>
    );
}

export default Addbook;
