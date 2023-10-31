import React, { useEffect, useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCard({book}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // hold book images in array
    const images = book.images.map((image) => image.image_path);
    // console.log(images);

    // switch images
    const nextImage = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images]);

    useEffect(() => {
        const imageInterval = setInterval(nextImage, 5000);

        return () => {
            clearInterval(imageInterval);
        };
    }, [nextImage]);


    // console.log(images[currentImageIndex]);

    return (
        <div>
        <Card className='book-card' style={{ width: '15rem', height: '22rem'}}>
            <div className='image-holder'>
                <Card.Img className='card-image' variant="top" src={process.env.PUBLIC_URL + 'images/' + images[currentImageIndex]} />
            </div>

            <Card.Body className='card-body'>
                <Card.Title>{book.title}</Card.Title>
                <p className="author">{book.author}</p>
                <div className="row">
                        <div className="col">
                            <p className="price">Price : Rs.{book.price}</p>
                        </div>
                        <div className="col">
                            <p className="stock">Stock : {book.stock}</p>
                        </div>
                    </div>
                <Button className='card-btn'>Issue</Button>
            </Card.Body>
        </Card>
        </div>
        
    );
}

export default BookCard;