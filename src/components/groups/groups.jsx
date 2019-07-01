import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        fullName : "",
        company: "",
        email: "",
        area_code: "",
        phone: "",
        subject:"",
        existingCustomer:true

     };

     this.onChange=this.onChange.bind(this);
     this.onSubmit=this.onSubmit.bind(this);
  }
  
  onChange(e){
      
      this.setState({
          [e.target.name] : e.target.value
          

      });
  }

   

  onSubmit(e){
    e.preventDefault();

    const employeeDetails = {
        fullName : this.state.fullName,
        company: this.state.company,
        email: this.state.email,
        phone: this.state.area_code + "-" + this.state.phone,
        subject:this.state.subject,
        existingCustomer:this.state.existingCustomer
    };

    console.log(employeeDetails);
    
     axios.post("http://localhost:8080/api/employee/add",employeeDetails);


}

  render() {
    return (
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
            <div className="card card-5">
                <div className="card-heading">
                    <h2 className="title">Groups Dashboard</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                  
                        <div>
                            <Link to="/" className="" >Back</Link>

                        </div>
                    </form>
                </div>

                

            </div>
        </div>
    </div>
    );
  }
}

export default Groups;