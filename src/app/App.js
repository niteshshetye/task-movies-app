import Navbar from "../components/Navbar";
import PopularPage from '../pages/Popular'
import TopPage from '../pages/Top'
import UpcomingPage from '../pages/Upcoming'
import SingleMoviePage from "../pages/SingleMovie";

import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <PopularPage />
        </Route>
        <Route exact path='/toprated'>
          <TopPage />
        </Route>
        <Route exact path='/upcoming'>
          <UpcomingPage />
        </Route>
        <Route exact path='/:id'>
          <SingleMoviePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
