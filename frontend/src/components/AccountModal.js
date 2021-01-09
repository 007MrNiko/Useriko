import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";
import Select from 'react-select'
import axios from "axios";


export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
            choicesList: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/api/groups/")
            .then(res => this.setState({choicesList: res.data}))
            .catch(err => console.log(err));
    };
    renderChoices = () => {
        return this.state.choicesList.map(item => (
            <option value={item.id}>{item.name}</option>
        ));
    };

    handleChange = e => {
        let {name, value} = e.target;

        const activeItem = {...this.state.activeItem, [name]: value};
        this.setState({activeItem});
    };


    render() {
        const {toggle, onSave} = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>User</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                type="text"
                                name="username"
                                value={this.state.activeItem.username}
                                onChange={this.handleChange}
                                placeholder="Enter username"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="group">Group</Label>
                            <Input
                                type="select"
                                name="group"
                                value={this.state.activeItem.group}
                                onChange={this.handleChange}
                            >
                                <option value="">---</option>
                                {this.renderChoices()}
                            </Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}