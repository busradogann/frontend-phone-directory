import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import PersonList from "./listpage/PersonList";
import PersonDetail from "./detailpage/PersonDetail";
import PersonAdd from "./addpage/PersonAdd";
import PersonEdit from "./editpage/PersonEdit";


export default class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <Switch>
                  <Route exact path={"/persons"} component={PersonList}/>
                  <Route strict exact path={"/persons/:id"} component={PersonDetail}/>
                  <Route strict exact path={"/persons/add/"} component={PersonAdd}/>
                  <Route strict exact path={"/persons/:id/edit"} component={PersonEdit}/>
              </Switch>
          </BrowserRouter>
      );
  }
}