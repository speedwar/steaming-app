import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StHome from './components/pages/StHome';
import StSeries from './components/pages/StSeries';
import StMovies from './components/pages/StMovies';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StHome} />
        <Route path="/series" component={StSeries} />
        <Route path="/movies" component={StMovies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
