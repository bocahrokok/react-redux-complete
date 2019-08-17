import React from 'react'

const Navbar = () => {

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">PokeTimes</a>
                <ul className="right">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">ABout</a></li>
                    <li><a href="/contact">COntact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar