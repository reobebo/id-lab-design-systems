import logo from './logo.svg';
import Sidebar from './sidebar';
import Topbar from './topbar';
import FooterDesignCode from './footerDesignCode';
import Welcome from './welcome';
import { useHistory ,useLocation } from 'react-router-dom';
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
     
    <Router>
    <Topbar/>
    <Switch>
          <Route path="/id-lab-welcome">
            <Welcome name="Main ID Lab Website"/>
          </Route>
          <Route path="/id-lab-footers">
          <Welcome name="ODI Website" />
          </Route>
          <Route path="/id-lab-navigation">
            <Welcome name="Knowledge Portal"/>
          </Route>
        </Switch>
    </Router>
    <Router>
    <Sidebar/>
    <Switch>
          <Route path="/welcome">
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
