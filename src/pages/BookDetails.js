import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './BookDetails.css';
 function BookDetails(props) {
    const {id}= useParams()
    const book = props.books.find((b) => b.id ==id)      
  return (
    <div className='book-details'>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p><strong>Price:</strong> {book.price}</p>
        <p><strong>Description:</strong> {book.description}</p>
         <Link to ='/Books'>
                <button>Back to Books</button>
                </Link>
    </div>
  )
}
export default BookDetails;