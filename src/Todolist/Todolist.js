import React    from "react";
import template from "./Todolist.jsx";

class Todolist extends React.Component {
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

    removeFirst = () => {
        this.setState(st => ({items: st.items.slice(1, st.items.length)}))
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
                    <button type='button' onClick={this.removeFirst}>Remove First Item</button>
                </div>

                <ul>
                    {this.state.items.map(this.displayItems)}
                </ul>
            </div>
        );
    }
}

export default Todolist;
