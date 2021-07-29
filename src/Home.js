import React from 'react'
import DisplayKeyboard from './components/DisplayKeyboard';
import LandingPage from './components/LandingPage';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <LandingPage />
                <DisplayKeyboard />
            </header>
            <p style={{textAlign: 'center'}}>© 2021 Christopher Jose</p>
        </div>
    )
}

export default Home
