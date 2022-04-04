import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import OrderForm from './Components/pizzaForm';
import MyOrder from './Components/myOrder';
import Home from './Components/home'
import './App.css';

const App = () => {

  // const [order, setOrder] = useState([])

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
            <OrderForm /> {/**orders={order} setOrders={setOrder} ?? */}
          </Route>
          <Route exact path="/myorder">
            <MyOrder />
            {/* {
              order.map((order, idx) => (
                <section key={`myorders-${idx}`}>
                  <h2>{order.name}, your pizza is on the way!</h2>
                  <h4>Size:</h4>
                  <p>{order.size}</p>
                  <h4>Sauce:</h4>
                  <p>{order.sauce}</p>
                  <h4>Toppings:</h4>
                  <p>{order.toppings[0]}</p>
                  <p>{order.toppings[1]}</p>
                  <p>{order.toppings[2]}</p>
                  <p>{order.toppings[3]}</p>
                  <h4>Delivery Instructions:</h4>
                  <p>{order.instructions}</p>
                </section>
              ))
            } */}
          </Route>
        </Switch>
      </main>
      <footer>

      </footer>
    </>
  );
};
export default App;
