import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Pizza for Programmers</h1>
          </Route>
          <Route exact path="/pizza">
            <h1>Create Your Pizza!</h1>
          </Route>
          <Route exact path="/myorder">
            <h1>Your Order</h1>
          </Route>
        </Switch>
      </main>
      <footer>

      </footer>
    </>
  );
};
export default App;
