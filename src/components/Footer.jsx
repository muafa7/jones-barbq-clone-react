import React from "react";
import '../App.css';

const Footer = () => {
    return (
        <footer>
            <div class="column">
                <h1>Visit Us</h1>
                <p>6706 Kaw Drive <br/> Kansas City, KS 66111</p>
            </div>
            <div class="column">
                <h1>Our Hours</h1>
                <p>Tuesday - Saturday <br/>
                    11 am - 3 pm (or until sold out)</p>
                <p>Closed on Mondays & Sundays</p>
            </div>
            <div class="column">
                <h1>Keep In Touch</h1>
                <p>Follow us on Instagram <br/>
                    Like us on Facebook</p>
            </div>
        </footer>
    )
}

export default Footer