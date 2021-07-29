import React, { Component } from 'react'
import KeyboardListing from './KeyboardListing';

export class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardData: []
        }
    }

    componentDidMount = () => {
        fetch("http://localhost:9001/keyboards")
        .then(res => res.json())
        .then(kboards => this.setState({keyboardData:kboards}))
        .catch(err => console.log('Error has occurred: ' + err))
    }

    render() {
        return (
            <div className="DisplayItem">
                <div className="DisplayItem-page">
                    {this.state.keyboard.map(kboard => (
                        <KeyboardListing keyboard={kboard} key={kboard.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default DisplayItem
