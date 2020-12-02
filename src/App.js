import Sidebar from './sidebar';
import Topbar from './topbar';
import Welcome from './welcome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";

import './scss/main.css';


function App() {
  

 
  return (
    
    <div className="container">
     
    <Router>
    <Topbar/>
    <Switch>
      <Redirect exact from="/" to="/id-lab/welcome" />
          <Route path="/id-lab/welcome" component={(props) =><Welcome {...props} name="ID Lab Website" />}/>
          <Route path="/odi/welcome" component={(props) => <Welcome {...props} name="ODI Website" />}/>
          <Route path="/knowledge-portal/welcome" component={(props) =><Welcome {...props} name="Knowledge Portal" />}/>
        </Switch>
         <Sidebar/>
          <Switch>
             <Route path="/:app" children={(props) => <><Sidebar {...props}/></>}/>
          </Switch>
  </Router>
  
   </div>
  );
}

export default App;
