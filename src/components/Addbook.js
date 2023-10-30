import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import BookForm from './bookForm';

function Addbook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for success alert

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

            // Show the success alert
            setShowSuccessAlert(true);
            
            // Clear the form fields after success
            setTitle('');
            setAuthor('');
            setPrice('');
            setStock('');
            setImageFiles([]);

            console.log('Book created:', response.data);
        } catch (error) {
            // Handle errors
            console.error('Error creating book:', error);
        }
    }

    return (
        <>
            {showSuccessAlert && (
                <Alert variant='success' onClose={() => setShowSuccessAlert(false)} dismissible>
                    A book is successfully added!
                </Alert>
            )}
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
