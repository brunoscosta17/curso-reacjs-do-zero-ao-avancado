import React, { Component } from 'react';

import TodoItems from '../TodoItems';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(item) {
        let state = this.state;
        if (this._taskInput.value !== '') {
            let newItem = {
                text: this._taskInput.value,
                key: Date.now()
            };
            this.setState({
                items: [...state.items, newItem]
            });
        }
        this.setState({ task: '' });
        item.preventDefault();
    }

    log() {
        console.log(this.state.items);
    }

    deleteItem(key) {
        let filter = this.state.items.filter((item) => {
            return (item.key !== key);
        });
        this.setState({ items: filter });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="New task?" name="task" value={this.state.task} onChange={(e) => this.setState({ task: e.target.value })} ref={(event) => this._taskInput = event} />
                    <button type="submit">
                        Add
                    </button>
                    {this.state.task}
                </form>
                <button onClick={this.log}>Log</button>
                <TodoItems list={this.state.items} delete={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList;
