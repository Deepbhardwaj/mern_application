import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import FilesList from '../components/FilesList';
import Header from '../components/Header';
import Login from '../components/Login';
import News from '../components/News'; 
import Signup from '../components/Signup';

const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => (
  <BrowserRouter>
    <div className="container">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="main-content">
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Signup} path="/signup" />
          <Route component={FilesList} path="/list" />
          <Route component={News} path="/news" /> {/* Add this line */}
          <Route component={App} path="/" exact={true} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
