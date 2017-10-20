import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist'

class App extends Component {
    render() {
        return (
            <div>
                <Todolist/>
                <Todolist/>
                <Todolist/>
            </div>
        )
    }
}

export default App;
