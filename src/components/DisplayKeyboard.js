import React, { Component } from 'react'
import KeyboardCard from './KeyboardCard';
import KeyboardListing from './KeyboardListing';
import '../styles/DisplayKeyboard.css';

export class DisplayKeyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboards: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:9001/keyboards")
        .then(res => res.json())
        .then(kboards => this.setState({keyboards:kboards}))
        .catch(err => console.log('Error has occurred: ' + err))
    }

    render() {
        return (
            <div className="DisplayKeyboard">
                <div className="DisplayKeyboard-cards">
                    {this.state.keyboards.map(kboard => (
                        <KeyboardCard keyboard={kboard} key={kboard.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default DisplayKeyboard
