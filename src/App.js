import logo from './logo.svg';
import Sidebar from './sidebar';
import Topbar from './topbar';
import FooterDesignCode from './footerDesignCode';
import Welcome from './welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './scss/main.css';


function App() {
  return (
    <div className="container">
    <Topbar/>
    <Router>
    <Sidebar/>
    <Switch>
          <Route path="/id-lab-headers">
            <Welcome />
          </Route>
          <Route path="/id-lab-footers">
            <FooterDesignCode />
          </Route>
          <Route path="/id-lab-navigation">
            <Welcome />
          </Route>
        </Switch>
  </Router>
   

   
   </div>
  );
}

export default App;
