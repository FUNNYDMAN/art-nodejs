import React, {Component} from 'react';
import User from "./User";
import {getUserList} from "./UserAPI";


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        };
    }

    componentDidMount() {
        getUserList()
            .then(res => {
                this.setState({userData: res.data.data});
            })
            .catch(error => {
                console.log("error");
            })
    }

    render() {
        return (
            <div className="User">
                {this.state.userData && this.state.userData.map(user =>
                    (
                        <User username={user.username} key={user.id}/>
                    ))}
            </div>
        );
    }
}

export default UserList;
