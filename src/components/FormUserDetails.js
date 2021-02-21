import React, { Component } from 'react'
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import  AppBar  from "material-ui/AppBar";
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"


export class FormUserDetails extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep(); 
    };


    render() {
        const {values,handleChange} = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter User Details"/>
                   <TextField
                   floatingLabelText = "Fisrt Name"
                   hintText="Enter your first name"
                   onChange={handleChange('firstName')}
                   defaultValue={values.firstName}
                   />
                   <br/>
                    <TextField
                   floatingLabelText = "Last Name"
                   hintText="Enter your last name"
                   onChange={handleChange('lastName')}
                   defaultValue={values.lastName}
                   />
                    <br/>
                    <TextField
                   floatingLabelText = "email"
                   hintText="Enter your email"
                   onChange={handleChange('email')}
                   defaultValue={values.email}
                   />

                    <br/>
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={Styles.button}
                    onClick={this.continue}
                    />
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const Styles = {
    button : {
        margin: 15
    }
}

export default FormUserDetails
