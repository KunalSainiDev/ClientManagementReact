import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Employee extends Component {
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
                    <h2 className="title">Employee Registration Form</h2>
                </div>
                <div>
                    <Link to="/" className="" >Back</Link>          
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="name">Full Name</div>
                            <div className="value">
                                                                   
                                        <div className="input-group">
                                            <input className="input--style-5" 
                                                    type="text" 
                                                    value={this.state.fullName} 
                                                    name="fullName"
                                                    onChange={this.onChange}
                                                    ></input>
                                            
                                        </div>
                                                               
                                
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Company</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" 
                                    type="text" 
                                    value={this.state.company} 
                                    name="company"
                                    onChange={this.onChange}
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Email</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" 
                                            type="email"
                                            value={this.state.email} 
                                            name="email"
                                            onChange={this.onChange}
                                            ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row m-b-55">
                            <div className="name">Phone</div>
                            <div className="value">
                                <div className="row row-refine">
                                    <div className="col-3">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" 
                                                    type="text" 
                                                    value={this.state.area_code} 
                                                    name="area_code"
                                                    onChange={this.onChange}
                                                    ></input>
                                            <label className="label--desc">Area Code</label>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" 
                                                    type="text" 
                                                    value={this.state.phone} 
                                                    name="phone"
                                                    onChange={this.onChange}
                                                    ></input>
                                            <label className="label--desc">Phone Number</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Group</div>
                            <div className="value">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="subject" 
                                                onChange={this.onChange}
                                                value={this.state.subject || ''}>
                                            <option disabled="disabled" value="" defaultValue>Choose option</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Superviser">Superviser</option>
                                            <option value="Agent">Agent</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row p-t-20">
                            <label className="label label--block">Are you an existing customer?</label>
                            <div className="p-t-15">
                                <label className="radio-container m-r-55">Yes
                                    <input type="radio" 
                                            defaultChecked 
                                            name="existingCustomer" 
                                            onChange={this.onChange}
                                            value={true}></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-container">No
                                    <input type="radio" 
                                            name="existingCustomer" 
                                            onChange={this.onChange}
                                            value={false}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn--radius-2 btn--red" type="submit">Register</button>
                        </div>
                    </form>
                </div>

                <div>
                    <p>
                        {
                           JSON.stringify(this.employeeDetails)

                        }

                    </p>

                </div>

            </div>
        </div>
    </div>
    );
  }
}

export default Employee;