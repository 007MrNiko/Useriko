import React, {Component} from "react";
import axios from "axios";
import Modal from "../components/AccountModal";
import {Table} from "react-bootstrap";
import Moment from 'moment';

Moment.locale('en');

export default class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            activeItem: {
                username: "",
                created: "",
                group: "",
            },
            usersList: []
        };
    }

    componentDidMount() {
        this.refreshList();
    }
    refreshList = () => {
        axios
            .get("/api/accounts/")
            .then(res => this.setState({usersList: res.data}))
            .catch(err => console.log(err));
    };
    renderItems = () => {
        return this.state.usersList.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{Moment(item.created).format("DD/MM/YYYY mm:HH")}</td>
                <td>{item.group}</td>
                <td>
                    <button onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">
                        Edit
                    </button>
                    <button onClick={() => this.handleDelete(item)} className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>

        ));
    };
    toggle = () => {
        this.setState({modal: !this.state.modal});
    };
    handleSubmit = item => {
        this.toggle();
        if (item.id) {
            axios
                .put(`/api/accounts/${item.id}/`, item)
                .then(res => this.refreshList());
            return;
        }
        console.log(item)
        axios
            .post("/api/accounts/", item)
            .then(res => this.refreshList());
    };
    handleDelete = item => {
        axios
            .delete(`/api/accounts/${item.id}`)
            .then(res => this.refreshList());
    };
    createItem = () => {
        const item = {username: "", group: ""};
        this.setState({activeItem: item, modal: !this.state.modal});
    };
    editItem = item => {
        this.setState({activeItem: item, modal: !this.state.modal});
    };

    render() {
        return (
            <main className="content">
                <h1 className="text-center my-4">Useriko - Users</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div className="">
                                <button onClick={this.createItem} className="btn btn-primary">
                                    Add task
                                </button>
                            </div>
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Created</th>
                                        <th>Group</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderItems()}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <Modal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        );
    }

}
