import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {items: []}
    }
    
    componentDidMount() {
        ['one', 'two', 'three', 'four'].map(this.addItem)
        setInterval(this.addItem, 1000, 'interval item')
    }
    
    addItem = item => {
        this.setState(st => ({items: st.items.concat(item)}))
    }
    
    displayItems = item => (<li>{item}</li>);

    render() {
        return (
            <div>
                <input/>
                <button></button>
                <ul>
                    {this.state.items.map(this.displayItems)}
                </ul>
            </div>
        );
    }
}

export default App;
