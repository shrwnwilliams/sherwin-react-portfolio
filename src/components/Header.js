import React from 'react';
import Nav from "./Nav"
import Quote from "./Quotes"

function Header() {
    return (
        <header className="container-fluid">
            <h1 className="text-center">Sherwin James Williams</h1>
            <Nav />
            <Quote />
        </header>
    )
}

export default Header