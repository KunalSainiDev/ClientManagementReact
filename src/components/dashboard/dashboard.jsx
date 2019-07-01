import React, { Component } from 'react';
import axios from 'axios';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


async function getEmployeeFields(param) {
    /* try {
      const response = await axios.get("http://localhost:8080/api/dashboard/employeeFieldsGetAll",{ params: param }).then;
      //console.log(response.data);
      const employeeFieldsGroup = [];
      response.data.forEach(function(item){
        employeeFieldsGroup.push(item.fieldName);
      });
      console.log (employeeFieldsGroup);
      return employeeFieldsGroup;
    } catch (error) {
      console.error(error);
    } */
    const employeeFieldsGroup = [];
    axios
           .get("http://localhost:8080/api/dashboard/employeeFieldsGetAll",{ params: param })
           .then(response => response.data.forEach(function(item){
            employeeFieldsGroup.push(item.fieldName);
          }) )
           .catch(err => {
               console.log(err);
               return null;
           });
           return employeeFieldsGroup;

  }

class Dashboard extends Component {

  constructor(props) {
    let fieldsArr =  ['fullName','company','email','phone','existingCustomer'];
    super(props);
    this.state = { 
        fields: fieldsArr
     };

     this.onGroupChange=this.onGroupChange.bind(this);
     this.onSubmit=this.onSubmit.bind(this);
     this.fieldsChanged=this.fieldsChanged.bind(this);

  }
  



  /* componentDidMount(){
      const param = {
          groupName : "Manager"
      }
    
    const employeeFieldsGroup = getEmployeeFields(param);
    console.log(employeeFieldsGroup);
       
     
    //axios.get("http://localhost:8080/api/dashboard/employeeFieldsGetAll",{ params: { groupName: 'Manager' } });
  } */


  onGroupChange(e){

        this.setState({
          [e.target.name] : e.target.value 

        });


        const param = {
        groupName : e.target.value
        }

        console.log(param);
        let employeeFieldsGroup = getEmployeeFields(param);
        console.log(employeeFieldsGroup);
       /*  this.setState({
            ...this.state,
            fields: employeeFieldsGroup

        }) */

  }


  fieldsChanged = (newFields) => {
      console.log(newFields);
    this.setState({
        ...this.state,
        fields: newFields
    });
  }

  onSubmit(e){
    e.preventDefault();

    const employeeFieldsDetailsList = [];

   
    for (const [index, value] of this.state.fields.entries()) {
        
        const employeeFieldsDetails = {
            fieldName:value,
            groupName:this.state.subject,
            status:'active'
    
        };
        /* employeeFieldsDetails.fieldName = value;
        employeeFieldsDetails.groupName = this.state.subject;
        employeeFieldsDetails.status ='active'; */
        employeeFieldsDetailsList.push(employeeFieldsDetails);
        console.log("employeeFieldsDetails", employeeFieldsDetails);
    }

    console.log("employeeFieldsDetailsList", employeeFieldsDetailsList);
     

    
    //console.log(this.state);
    
     axios.post("http://localhost:8080/api/dashboard/employeeFieldsAdd",employeeFieldsDetailsList);


}

  render() {
    return (
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
            <div className="card card-5">
                <div className="card-heading">
                    <h2 className="title">Employee Field Acces</h2>
                </div>
                
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-row">
                            <div className="name">Select Group</div>
                            <div className="value">
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="subject" 
                                                onChange={this.onGroupChange}
                                                value={this.state.subject || ''}
                                                required
                                                >
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
                        <CheckboxGroup
                            checkboxDepth={2} // This is needed to optimize the checkbox group
                            name="fields"
                            value={this.state.fields}
                            onChange={this.fieldsChanged}>
                            <div className="form-row">
                            
                                <div className="name">Full Name</div>
                                    <div className="fullName">
                                                                   
                                        <div className="input-group">
                                            <input disabled={true} className="input--style-5" 
                                                    type="text" 
                                                    value={this.state.fullName} 
                                                    name="fullName"
                                                    onChange={this.onChange}
                                                    >
                                            </input>
                                            
                                        </div>
                                      
                                    </div>
                                    <Checkbox value="fullName"/>
                                </div>
                            
                        <div className="form-row">
                            <div className="name">Company</div>
                            <div className="value">
                                <div className="input-group">
                                    <input disabled={true} className="input--style-5" 
                                    type="text" 
                                    value={this.state.company} 
                                    name="company"
                                    onChange={this.onChange}
                                    ></input>
                                </div>
                            </div>
                            <Checkbox value="company"/>
                        </div>
                        <div className="form-row">
                            <div className="name">Email</div>
                            <div className="value">
                                <div className="input-group">
                                    <input disabled={true} className="input--style-5" 
                                            type="email"
                                            value={this.state.email} 
                                            name="email"
                                            onChange={this.onChange}
                                            ></input>
                                </div>
                            </div>
                            <Checkbox value="email"/>
                        </div>
                        <div className="form-row m-b-55">
                            <div className="name">Phone</div>
                            <div className="value">
                                <div className="row row-refine">
                                    <div className="col-3">
                                        <div className="input-group-desc">
                                            <input disabled={true} className="input--style-5" 
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
                                            <input disabled={true} className="input--style-5" 
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
                            <Checkbox value="phone"/>
                        </div>
                        
                        <div className="form-row p-t-20">
                            <label className="label label--block">Are you an existing customer?</label>
                            <div className="p-t-15">
                                <label className="radio-container m-r-55">Yes
                                    <input disabled={true} type="radio" 
                                            defaultChecked 
                                            name="existingCustomer" 
                                            onChange={this.onChange}
                                            value={true}></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="radio-container">No
                                    <input disabled={true} type="radio" 
                                            name="existingCustomer" 
                                            onChange={this.onChange}
                                            value={false}></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <Checkbox value="existingCustomer"/>
                        </div>
                        </CheckboxGroup>
                        <div>
                            <button className="btn btn--radius-2 btn--red" type="submit">Save</button>
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

export default Dashboard;

