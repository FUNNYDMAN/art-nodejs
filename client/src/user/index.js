import React, {Component} from 'react';
import UserList from "./UserList";

class User extends Component {
    render() {
        return (
            <div className="users">
                <UserList/>
            </div>
        )
    }
}

export default User;