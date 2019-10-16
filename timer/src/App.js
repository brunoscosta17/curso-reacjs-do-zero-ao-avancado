import React, { Component } from 'react';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            textButton: 'Start'
        };
        this.timer = null;
        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start() {
        let state = this.state;
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.textButton = 'Start';
        } else {
            this.timer = setInterval(() => {
                state = this.state;
                state.number += 0.1;
                this.setState(state);
            }, 100);
            state.textButton = 'Pause';
        }
        this.setState(state);
    }

    clear() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.number = 0;
        state.textButton = 'Start';
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <img className="img" src={require('./assets/cronometro.png')} />
                <a className="timer">{this.state.number.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="button" onClick={this.start}>{this.state.textButton}</a>
                    <a className="button" onClick={this.clear}>Clear</a>
                </div>
            </div>
        )
    }
}

export default App;