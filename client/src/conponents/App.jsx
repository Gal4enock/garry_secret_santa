import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SantaPage from '../pages/SantaPage/SantaPage';
import InvitePage from '../pages/InvitePage/InvitePage';


const App = function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SantaPage} />
        <Route path='/invite' exact component={InvitePage} />
    </Switch>
    </BrowserRouter>
  )
};

export default App;
