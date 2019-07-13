import React, {Component} from 'react';
import {addNewUser} from "./UserAPI";

class UserAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        let data = {
            username: this.state.name
        };
        addNewUser(data).then(res => {
            console.log("Ok")
        })
            .catch(error => {
                console.log("error->", error);
            });
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default UserAddForm