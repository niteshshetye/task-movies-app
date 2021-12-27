import Navbar from "../components/Navbar";
import Popular from '../pages/Popular'
import Top from '../pages/Top'
import Upcoming from '../pages/Upcoming'
import './App.css'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Popular />
        </Route>
        <Route exact path='/toprated'>
          <Top />
        </Route>
        <Route exact path='/upcoming'>
          <Upcoming />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
