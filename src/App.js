import React,{ Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


import Employee from './components/employee/employee'
import Dashboard from './components/dashboard/dashboard'
import Groups from './components/groups/groups'
import AddFields from './components/fields/addFields'



import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



import "./vendor/mdi-font/css/material-design-iconic-font.min.css";
import "./vendor/font-awesome-4.7/css/font-awesome.min.css";

import "./vendor/select2/select2.min.css";
import "./vendor/datepicker/daterangepicker.css";
import "./css/main.css";
import "./css/google.css.css";

const navBottom = {
    marginBottom: '0px'
    
  };

class App extends Component{
    render(){
        return (
            <Router>
                <div className="App">
                        <nav className="navbar navbar-inverse" style={navBottom}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <Link className="navbar-brand" to="/"  >Admin Dashboard</Link>
                        </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/employee"  >Employee</Link></li>
                                <li><Link to="/groups"  >Group</Link></li>
                                <li><Link to="/addFields"  >Add Fields</Link></li>
                                
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/" component={Dashboard}></Route>
                    <Route exact path="/employee" component={Employee}></Route>
                    <Route exact path="/groups" component={Groups}></Route>
                    <Route exact path="/addFields" component={AddFields}></Route>

                </div>
            </Router>
        );
    }
}

export default App;
