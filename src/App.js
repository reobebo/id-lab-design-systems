import Sidebar from './sidebar';
import SidebarKnowledgePortal from './SidebarKnowledgePortal';
import Topbar from './topbar';
import FooterDesignCode from './footerDesignCode';
import Welcome from './welcome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation

} from "react-router-dom";

import './scss/main.css';


function App() {
  

 
  return (
    
    <div className="container">
     
    <Router>
    <Topbar/>
    <SidebarKnowledgePortal/>
   
    <Switch>
      <Redirect exact from="/" to="/id-lab" />
          
          <Route path="/id-lab" component={(props) => <><Welcome {...props} name="ID Lab Website" /></>}/>
          <Route path="/odi" component={(props) => <Welcome {...props} name="ODI Website" />}/>
          <Route path="/knowledge-portal" component={(props) => <><Welcome {...props} name="Knowledge Portal" /></>}/>
          
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
