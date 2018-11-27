import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Analysis from './pages/Analysis';

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/analysis" component={Analysis} />
        </div>
      </BrowserRouter>
    </main> 
  )
}

export default Main
