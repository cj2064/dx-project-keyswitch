import React, { Component } from 'react'
import KeyboardListing from './KeyboardListing';

export class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboards: []
        }
        // this.displaySingleKeyboard = this.displaySingleKeyboard.bind(this);
    }

    componentDidMount = () => {
        fetch("http://localhost:9001/keyboards")
        .then(res => res.json())
        .then(kboards => this.setState({keyboards:kboards}))
        .catch(err => console.log('Error has occurred: ' + err))
    }

    

    render() {
        let kbListings = this.state.keyboards.map(kboard => (<KeyboardListing keyboard={kboard} key={kboard.id} />));
        return (
            <div className="DisplayItem">
                <div className="DisplayItem-page">
                    {kbListings}
                </div>
            </div>
        );
    }
}

export default DisplayItem
