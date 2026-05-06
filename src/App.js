import React,{useEffect, useState} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Books from './pages/Books'
import { books } from "./data";
import BookInfo from './pages/Bookinfo';
import Cart from './pages/Cart';




function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
      setCart ([...cart, book])
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])


  return (
    <Router>
    <div className="App">
      <Nav />
       <Route path="/" exact component = {Home} />
      <Route path="/books" exact render={() => <Books books={books} />} />
      <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} /> 
      <Route path="/cart"  render={() => <Cart books={books} />} /> 
       

      {/* <Switch>
  <Route exact path="/" render={() => <Home />} />
  <Route exact path="/books" render={() => <Books books={books} />} />
  <Route path="/books/:id 1" render={() => <BookInfo books={books} />} />
</Switch>   */}
        
     

      <Footer />
    </div>
    </Router>
  );
}


export default App;
