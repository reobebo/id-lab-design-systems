import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Welcome from './Welcome';

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
      <Redirect exact from="/" to="/id-lab" />
          <Route exact path="/id-lab"   children={(props) =><Welcome {...props} name="Welcome To The ID Lab Website" description="Click On Any Of The Three Buttons To Learn More!" />}/>
          <Route exact path="/odi"   children={(props) => <Welcome {...props} name="Welcome To The ODI Website" description="Click On Any Of The Three Buttons To Learn More!"/>}/>
          <Route exact path="/knowledge-portal"   children={(props) =><Welcome {...props} name="Welcome To The Knowledge Portal Website" description="Click On Any Of The Three Buttons To Learn More!" />}/>
        </Switch>
         
          <Switch>
             <Route path="/:app" component={(props) => <><Sidebar {...props}/></>}/>
             
          </Switch>
  </Router>
  
   </div>
  );
}

export default App;
