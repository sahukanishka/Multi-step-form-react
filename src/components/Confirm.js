import React, { Component } from 'react'
import  MuiThemeProvider  from "material-ui/styles/MuiThemeProvider";

import  AppBar  from "material-ui/AppBar";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import { RaisedButton } from 'material-ui';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep(); 
    }

    goback = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values: {firstName,lastName,email,city,contact,bio,branch}} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Check Your details"/>    
                <List>
                    <ListItem
                    primaryText="Fisrt Name"
                    secondaryText={firstName}
                    />
                    <ListItem
                    primaryText="Last Name"
                    secondaryText={lastName}
                    />
                    <ListItem
                    primaryText="Email"
                    secondaryText={email}
                    />
                    <ListItem
                    primaryText="Branch"
                    secondaryText={branch}
                    />
                    <ListItem
                    primaryText="Contact Number"
                    secondaryText={contact}
                    />
                    <ListItem
                    primaryText="City"
                    secondaryText={city}
                    />
                    <ListItem
                    primaryText="Bio"
                    secondaryText={bio}
                    />
                </List>

                <RaisedButton
                primary={false}
                label="Go Back"
                style={Styles.button}
                onClick={this.goback}
                
                />
                <RaisedButton
                primary={true}
                label ="Submit"
                style={Styles.button}
                onClick={this.continue}/>
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
export default Confirm
