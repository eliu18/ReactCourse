import React from "react";
import "../components/Header.css";

function Header() {
    const name = "Eliu";
    const styles = {
        fontSize: "50px",
        backgroundColor: "blue"
    }
    return (
        <div>
            <header className="navbar" style={styles}>
                <h1>Hello {`${name}`}</h1>
            </header>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    )
}

export default Header;