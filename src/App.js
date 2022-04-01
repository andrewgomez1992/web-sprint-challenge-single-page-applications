import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from './Components/orderForm';
import MyOrder from './Components/myOrder';
import Home from './Components/home'
import './App.css';

const App = () => {

  const [pizza, setPizza] = useState();


  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Create Your Pizza</Link>
        <Link to='/myorder'>My Order</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
            <OrderForm />
          </Route>
          <Route exact path="/myorder">
            <MyOrder />
          </Route>
        </Switch>
      </main>
      <footer>

      </footer>
    </>
  );
};
export default App;
