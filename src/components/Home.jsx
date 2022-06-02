import React, {useState} from "react";
import '../App.css';

const Home = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    
    //function when input got submit
    const emailSubmit = event => {
        event.preventDefault();
        if (validateEmail()) {
            setMessage(`We have sent email to ${email}`);
        } else {
            setMessage("Please input valid email address");
        }
    }
    //validate email format
    const validateEmail = () => {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        else{
            return true;
        }
    }


    return (
        <div className="home">
            {/* jumbotron section */}
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
            {/* contact section */}
            <section class="contact">
                <div class="contact-content">
                    <h1>STAY IN THE KNOW</h1>
                    <h2>Enter your email address to recieve news and updates from Jones Bar-B-Q.</h2>
                </div>
                <form onSubmit={emailSubmit} >
                    <input class="email-input" type="text" value={email} placeholder="Email Address" onChange={(e)=> setEmail(e.target.value)} />
                    <input class="email-submit" type="submit" value="SUBMIT"/>
                </form>
                {/* message display when form got submit */}
                {message && (
                    <p>{message}</p>
                )}
            </section>
        </div>
    )
}

export default Home