import {Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Home from "./pages/Home";
import About from "./pages/About";
import {React , useState} from "react";
 function App() {
  const [books , setbooks]=useState
   ([
   {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    year: 2018,
    price: "$20",
    description: "Learn how small habits can lead to big changes."
   },
   {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    year: 2008,
    price: "$35",
    description: "A guide to writing clean and maintainable code."
   },
   {
    id: 3,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Programming",
    year: 1999,
    price: "$30",
    description: "Practical advice for becoming a better software developer."
   },
   {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    year: 2020,
    price: "$25",
    description: "Understand how people think and behave with money."
   },
   {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    year: 2016,
   price: "$22",
   description: "Improve focus and achieve high-quality work."
   },
   {
    id: 6,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    year: 1997,
   price: "$18",
   description: "Learn the basics of financial education and investing."
    }]);


      return (
        <div>
      <Navbar/>
     <Routes>
     <Route path="/" element ={<Home />} />
     <Route path="/About" element ={<About />} />
     <Route path="/BookDetails/:id" element ={<BookDetails books= {books} />} />
     <Route path="/Books" element ={<Books books={books}/>} />
     </Routes>
     <Footer/>
     
     </div>
     )
     }
export default App;