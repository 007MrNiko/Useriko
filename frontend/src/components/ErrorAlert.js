import {Alert} from "react-bootstrap";
import {Component} from "react";


export default class ErrorAlert extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Alert variant={"danger"}>
                Something wrong! {this.props.message}
            </Alert>
        )
    }
}