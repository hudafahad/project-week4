import {React , useState} from 'react'
import BookCard from '../components/BookCard';
import "./Books.css";
 function Books(props) {
    const [showBooks , setshowBooks]= useState(true)
  return (
    <div className='books-container'>
         {showBooks? (
        props.books.map((b)=>(
        <BookCard
        key={b.id}
        id={b.id}
        title={b.title}
        category={b.category}
        price={b.price}
        />        ))
    ) :null
}
        <button onClick={()=>setshowBooks(!showBooks)}>
           {showBooks? ' Hide Books' : 'Show Books'}
        </button>
    </div>
  );
}
export default Books;