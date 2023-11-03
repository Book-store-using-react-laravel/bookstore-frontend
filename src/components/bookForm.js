import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BookForm({
    title,
    setTitle,
    author,
    setAuthor,
    price,
    setPrice,
    stock,
    setStock,
    imageFiles,
    setImageFiles,
    handleSubmit,
}) {

    return (
        <div>
            <h4>Create a New Book</h4>

            <Form className='book-form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupText">
                    <Form.Label>Author</Form.Label>
                    <Form.Control required type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control required type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNumber">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control required type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder='0'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupImage">
                    <Form.Label>Images</Form.Label>
                    <Form.Control required type="file" multiple onChange={(e) => setImageFiles(e.target.files)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default BookForm;
