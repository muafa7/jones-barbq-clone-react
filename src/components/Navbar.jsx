import React from "react";
import '../App.css';

const Navbar = () => {
    return (
        <header>
        <div class="logo">
            <a href="/">
                <img src="./images/jones-bbq-logo-red-cream.png" alt="tes"></img>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="/">SHOP</a></li>
                <li><a href="/">MENU</a></li>
                <li><a href="/">OUR ROOT</a></li>
                <li><a href="/">VISIT</a></li>
                <li><a href="/">PRESS</a></li>
            </ul>
        </nav>
        <div class="menu-button">
            <a href="/">SHOP SAUCES</a>
        </div>
    </header>
    )
}

export default Navbar