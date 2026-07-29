import {Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Home from "./pages/Home";
import About from "./pages/About";

 function App() {
      return (
        <>
      <Navbar/>
     <Routes>
     <Route path="/" element ={<Home />} />
     <Route path="/About" element ={<About />} />
     <Route path="/BookDetails" element ={<BookDetails />} />
     <Route path="/Books" element ={<Books />} />
     </Routes>
     <Footer/>
     </>
     )
     }
export default App;