import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Alert from './components/Alert';
import { useState } from 'react';
document.body.style.backgroundColor = 'rgb(35 70 108)';
export default function App() {
    const [mode, changemode] = useState('dark')
    const toggledarkmode = () => {
        if (mode === 'light') {
            changemode('dark');
            showalert('Dark Mode is on', 'success');
            document.body.style.backgroundColor = 'rgb(35 70 108)';
        }
        else {
            changemode('light');
            showalert('Dark Mode is off', 'success');
            document.body.style.backgroundColor = 'white';
        }
    };

    const [alert, setalert] = useState(null);
    const showalert = (message, type) => {
        setalert({ msg: message, type: type })
        setTimeout(() => {
            setalert(null);
        }, 2000);
    };
    return (
        <>

            <Navbar mode={mode} toggledarkmode={toggledarkmode} />
            <Alert alert={alert} />
            <Home text='enter text to play' mode={mode} showalert={showalert} />
        </>
    )
}
