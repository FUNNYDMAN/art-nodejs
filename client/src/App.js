import React, {Component} from 'react';
import User from "./user/index";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello</h1>
                </header>
                <User/>
            </div>
        );
    }
}


export default App;
