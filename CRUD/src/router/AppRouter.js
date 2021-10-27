import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import addvehicle from '../components/vehicleform';
import updatevehicle from '../components/vehicleupdate';
import VehicleList from '../components/vehiclelist';
import Login from '../components/login';


const AppRouter = () => {


  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Switch>
            <Route component={Login} exact path="/"  />
            <Route component={Header} exact path="/header"/>
            <Route component={VehicleList} path="/vehiclelist"/>
            <Route component={addvehicle} path="/add"/>
            <Route component={updatevehicle} path="/upd"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;