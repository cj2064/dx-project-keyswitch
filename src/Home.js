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
        </div>
    )
}

export default Home
