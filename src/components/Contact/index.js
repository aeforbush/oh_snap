import React from "react";

function ContactForm() {
    // create DOM elements using JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                // each form element gets wrapped in a div
                // htmlFor is a keyword reserved in js
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


// name of function needs to be the export
export default ContactForm;