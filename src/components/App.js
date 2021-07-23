import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact><Home /></Route>
      <Route path="/:id"><Detail /></Route>
    </BrowserRouter>
  );
}

export default App;