import {Alert} from "react-bootstrap";
import {Component} from "react";
import React, {useState} from 'react';
import {unmountComponentAtNode} from "react-dom";


export default class ErrorAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
        }
    }

    hideAlert() {
        this.setState({
            isActive: false,
        });
    }

    render() {
        if (this.state.isActive) {
           return (
            <Alert name variant="danger" onClose={() => this.hideAlert()} dismissible>
                Oh snap! {this.props.message}
            </Alert>
        )
        }
        return <div/>

    }
}