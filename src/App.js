import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

displayItems = (item) => (<li>{item}</li>);

    render() {
        var items = ['one', 'two', 'three'];
        return (
            <div>
                <input/>
                <button></button>
                <ul>
                    {items.map(this.displayItems)}
                </ul>
            </div>
        );
    }
}

export default App;
