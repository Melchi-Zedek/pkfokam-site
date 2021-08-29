import React from 'react';
import MainContent from './contact';
import "./Contacts.css";
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";


export default function FixedContainer() {
    return (
        <React.Fragment>
            <div className="container">
            <div className="responsive">
                <div className= "Paper.responsive">
                <Typography variant = "h1">
                    Contact Us
                </Typography>
                </div>
                <div className="c2">
                    <MainContent/>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}
