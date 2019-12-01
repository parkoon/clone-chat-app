import React from "react";

import "./App.css";
import { Switch, Route } from "react-router-dom";

// Components
import ChatList from "./components/ChatList";
import Room from "./components/Room";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/list">
          <ChatList transition={"let-to-right"} />
        </Route>
        <Route path="/room/:id">
          <Room transition={"right-to-left"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
