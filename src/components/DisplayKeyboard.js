import React, { Component } from 'react'
import KeyboardCard from './KeyboardCard';
import '../styles/DisplayKeyboard.css';

export class DisplayKeyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboards: []
        }
        this.displaySingleKeyboard = this.displaySingleKeyboard.bind(this);
    }

    componentDidMount = () => {
        fetch("http://localhost:9001/keyboards")
        .then(res => res.json())
        .then(kboards => this.setState({keyboards:kboards}))
        .catch(err => console.log('Error has occurred: ' + err))
    }

    displaySingleKeyboard(kbListing) {
        this.setState(keyboard => ({
            keyboards: keyboard
        }));
    }

    render() {
        let kbListings = this.state.keyboards.map(kboard => (<KeyboardCard keyboard={kboard} key={kboard.id} />));
        return (
            <div className="DisplayKeyboard">
                <div className="DisplayKeyboard-cards">
                    {kbListings}
                </div>
            </div>
        )
    }
}

export default DisplayKeyboard
