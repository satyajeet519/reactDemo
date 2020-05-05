import React from 'react';
//import { Router} from 'react-router'
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';
import Home from "./Components/Home";
import Restorantcreate from "./Components/Restorantcreate";
import Restorantlist from "./Components/Restorantlist";
import Restorantupdate from "./Components/Restorantupdate";
import Restorantsearch from "./Components/Restorantsearch";
import Restorantdetails from "./Components/Restorantdetails";
class App extends React.Component{
  render(){
    return(<div>
       <Router>
<ul>
  <li><Link to="/">Home</Link> </li>
  <li><Link to="/list">List</Link> </li>
  <li><Link to="/create">Create</Link> </li>
  <li><Link to="/update">Update</Link> </li>
  <li><Link to="/search">Search</Link> </li>
  <li><Link to="/details">Details</Link> </li>
</ul>
<Route path="/list">
  <Restorantlist/>
</Route>
<Route path="/create">
  <Restorantcreate/>
</Route>
<Route path="/update">
  <Restorantupdate/>
</Route>
<Route path="/search">
  <Restorantsearch/>
</Route>
<Route path="/details">
  <Restorantdetails/>
</Route>
<Route exact path="/">
  <Home/>
</Route>
       </Router>
      </div>
    )
  }
}
export default App;
