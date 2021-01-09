import React, {Component, useState} from "react";
import Accounts from "./views/Accounts";
import Groups from "./views/Groups";
import {Tab, Tabs} from "react-bootstrap";


class App extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
                    <Tab eventKey="users" title="Users">
                        <Accounts/>
                    </Tab>
                    <Tab eventKey="groups" title="Groups">
                        <Groups/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default App;