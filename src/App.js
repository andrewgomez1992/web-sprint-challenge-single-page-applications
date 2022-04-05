import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from './Components/pizzaForm';
import MyOrder from './Components/myOrder';
import Home from './Components/Home'
import './App.css';

const App = () => {

  return (
    <>
      <header>
        <Link data-test-id="home" to='/'>Home</Link>
        <Link data-test-id="pizza" to='/pizza'>Create Your Pizza</Link>
        <Link data-test-id="my-order" to='/myorder'>My Order</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pizza">
            <OrderForm />
          </Route>
          <Route exact path="/myorder" >
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
