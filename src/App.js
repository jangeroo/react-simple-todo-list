import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {items: []}
    }
    
    addItem = item => {
        this.setState(st => ({items: st.items.concat(item)}))
    }
    
    clickFunction = () => {this.addItem(this.input.value)}

    displayItems = item => (<li>{item}</li>);

    render() {
        return (
            <div>
                <input ref={r => this.input = r}/>
                <button onClick={this.clickFunction}>Add</button>
                <ul>
                    {this.state.items.map(this.displayItems)}
                </ul>
            </div>
        );
    }
}

export default App;
