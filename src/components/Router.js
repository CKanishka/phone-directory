import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Form from "./Form";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/add" component={props=><Form addUser={this.addUser}/>} />
    </Switch>  
  </BrowserRouter>
);

export default Router;




