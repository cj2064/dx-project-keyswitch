import React, { Component } from 'react'
import KeyboardListing from './KeyboardListing';

export class DisplayListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboards: [
                // This hard-coded data now comes from express-api server connected to MongoDB database!
                // new Keyboard(1, "Ducky One 2 Mini", 99.99, "Cherry MX Brown", "The popular 60% keyboard from Ducky"),
                // new Keyboard(2, "Logitech G Pro", 129.99, "GX Blue", "The keyboard used by your favorite pro gamers")
            ]
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
            <div className="DisplayListing">
                {this.state.keyboards.map(kboard => (
                    <KeyboardListing keyboard={kboard} key={kboard.id} />
                ))}
            </div>
            
        )
    }
}

export default DisplayKeyboard
