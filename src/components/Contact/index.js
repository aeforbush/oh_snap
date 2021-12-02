import React, { useState } from "react";

function ContactForm() {
    // below is the hook that manages form data
    // set the state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // destructuring the formState object into its named properties
    const { name, email, message } = formState;

    // handleChange function || onChange event listner will ensure that the handleChange function fires whenever a keystroke is typed into the field
    // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    // create DOM elements using JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/*each form element gets wrapped in a div*/}
                {/* htmlFor is a keyword reserved in js */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


// name of function needs to be the export
export default ContactForm;