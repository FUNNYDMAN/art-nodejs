import React from "react";
import './User.css'

function User(props) {
    return (
        <h2 className="username">{props.username}</h2>
    )
}


export default User