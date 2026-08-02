import React from 'react'
import { Link } from 'react-router-dom';
import './BookCard.css';
function BookCard(props) {
     return (
     <div className='book-card'>
        <h2>{props.title}</h2>
        <p>{props.author}</p>
        <p>{props.category}</p>
        <p>{props.year}</p>
        <p>{props.price}</p>
        <Link to ={ `/BookDetails/${props.id}`}>
        <button>View Details</button>
        </Link>
     </div>
     );
     }
export default BookCard;