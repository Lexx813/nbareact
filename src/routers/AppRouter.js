import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
