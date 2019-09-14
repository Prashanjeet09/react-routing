import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import './Homestyle.css';
import './Contact.css';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Form from './Form';


function App() {
  return (
    <BrowserRouter>
    <div >
     <Menu />
     <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     </Switch>
   
    </div>
    </BrowserRouter>
  );
}


const Home = () =>  {
  return(
      <div className="homestyle">
          <h2>Welcome to Home page us</h2>

      </div>
  )
}

const Contact = () =>  {
  return(
      <div className="contact">
          <h2>Welcome to Contact page us</h2>

      </div>
  )
}

export default App;
