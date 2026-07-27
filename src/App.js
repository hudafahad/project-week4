import react from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import Home from "./pages/Home";
import About from "./pages/About";

 function App() {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <BookCard/>
      <BookDetails/>
      <Books/>
      <Home/>
      <About/>
      
    </div>
  )
}
export default App;