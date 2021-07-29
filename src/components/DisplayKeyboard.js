import React, { Component } from 'react'
import KeyboardCard from './KeyboardCard';
import '../styles/DisplayKeyboard.css';

export class DisplayKeyboard extends Component {
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
            // <div className="container-fluid">
            //     <div className="row mt-5">
            //         <div className="col-sm-3">
            //             {this.state.keyboards.map(kboard => <KeyboardCard keyboard={kboard} key={kboard.id} />)}
            //         </div>
            //     </div>
            // </div>
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
