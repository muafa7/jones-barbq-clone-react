import React from "react";
import '../App.css';

const Home = () => {
    return (
        <div className="home">
            <section class="jumbotron">
                <div class="content">
                    <div class="block-content">
                        <h1>SAUCE MADE WITH LOVE IN KANSAS CITY</h1>
                        <h2>SINCE 1970… SOMETHING.</h2>
                    </div>
                    <div class="block-image">
                        <img src="./images/lifestyle-image-02.png" alt=""/>
                    </div>
                </div>
            </section>
            <section class="contact">
                <div class="contact-content">
                    <h1>STAY IN THE KNOW</h1>
                    <h2>Enter your email address to recieve news and updates from Jones Bar-B-Q.</h2>
                </div>
                <form id="contact-input" onsubmit="emailSubmit();return false" action="#">
                    <input class="email-input" type="text" name="email" id="email" placeholder="Email Address"/>
                    <input class="email-submit" type="submit" value="SUBMIT"/>
                </form>
            </section>
        </div>
    )
}

export default Home