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
    
    submitFunction = (event) => {
        event.preventDefault();
        this.addItem(this.input.value);
        this.form.reset()
    }

    displayItems = item => (<li>{item}</li>);

    clear = () => {
        this.setState(st => ({items: []}))
    }

    reverseList = () => {
        this.setState(st => ({items: st.items.reverse()}))
    }

    render() {
        return (
            <div>
                <form ref={r => this.form = r} onSubmit={this.submitFunction}>
                    <input ref={r => this.input = r}/>
                    <button type='submit'>Add</button>
                </form>

                <div>
                    <button type='button' onClick={this.clear}>Clear</button>
                    <button type='button' onClick={this.reverseList}>Reverse</button>
                </div>

                <ul>
                    {this.state.items.map(this.displayItems)}
                </ul>
            </div>
        );
    }
}

export default App;
