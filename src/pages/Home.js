import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
 function Home() {
  return (
    <div className='home'>
        <h1>Welcome to Book Library</h1>
        <p>Discover books in programming , self development , finance and productivity.</p>
        <Link to='/Books'>
        <button>Browse Books</button>
        </Link>
    </div>
  )
}
export default Home;