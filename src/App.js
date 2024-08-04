import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Marketplace from './components/Marketplace'
import Tables from './components/Tables'
import Konban from './components/Konban'
import Profile from './components/Profile'
import Signin from './components/Signin'


import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/marketplace" component={Marketplace} />
    <Route exact path="/tables" component={Tables} />
    <Route exact path="/konban" component={Konban} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/signin" component={Signin} />
  </Switch>
)

export default App;
