import { useState } from 'react'
import reactLogo from './assets/react-logo.png'

function Navbar(){
    return(
        <div className="nav">
            <div className="headerName">
                <img className src={reactLogo} />
                <h2>ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
        </div>
    )
}

export default Navbar