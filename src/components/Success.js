import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar"
export class Success extends Component {
    render() {
        const {values} = this.props ; 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Congratulations !"/>
                    <h1>{values.firstName} your form is Submitted successfully</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
