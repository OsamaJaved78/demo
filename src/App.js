import React from 'react';
import './App.css'; 
import Login from './login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dinner from './dinner';


class Home extends React.Component {
 
  render() {
   
    return (
     
       <div className="maincontainer">
         <Router>
           <Switch>
           <Route exact path = "/"><Login/></Route>
           <Route exact path = "/Dinner"><Dinner/> </Route>
           </Switch>
          
         </Router>
        </div>
      
)
};
}
export default Home;