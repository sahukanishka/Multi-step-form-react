import React, { Component } from 'react'
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";
import  AppBar  from "material-ui/AppBar";
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

export class FormPersonalDetails extends Component {



    continue = e => {
        e.preventDefault();
        this.props.nextStep(); 
    };
    goback = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
    
        const {values,handleChange} = this.props;

        return (
         <MuiThemeProvider>
             <React.Fragment>
                 <AppBar title="Enter your Personal Details"/>
                 <TextField
                 floatingLabelText="Contact No"
                 hintText="Enter your contact number"
                 onChange={handleChange("contact")}
                 defaultValue={values.contact}
                 />
                 <br/>
                 <TextField
                 floatingLabelText="City"
                 hintText="Enter your city"
                 onChange={handleChange("city")}
                 defaultValue={values.city}
                 />
                 <br/>
                 <TextField
                 floatingLabelText="branch"
                 hintText="Enter your branch"
                 onChange={handleChange("branch")}
                 defaultValue={values.branch}
                 />
                 <br/>
                 <TextField
                 floatingLabelText="bio"
                 hintText="Enter your bio"
                 onChange={handleChange("bio")}
                 defaultValue={values.bio}
                 />
                 <br/>
                 
                <RaisedButton
                 label="Go Back"
                 style={Styles.button}   
                 onClick={this.goback}                  
                 />
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
        margin : 15 
    }
}

export default FormPersonalDetails
