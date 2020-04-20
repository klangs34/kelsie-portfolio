import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

const Contact = () => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isValid, setIsValid ] = useState(false);
    const [ error, setError ] = useState("");

    const [toastClass, setToastClass] = useState("");

    const [ emailClass, setEmailClass ] = useState(["form-control mb-2"]);
    const [ nameClass, setNameClass ] = useState(["form-control mb-2"]);
    const [ messageClass, setMessageClass ] = useState(["form-control mb-2"]);

    const formChangeHandler = (e, maxMinLength) => {

        if(isValid) {
            setError("");
        }
        if (e.target.name === 'Name') {
            setName(e.target.value)
        }
        if (e.target.name === "Email") {
            setEmail(e.target.value);
        }
        if (e.target.name === "Message") {
            setMessage(e.target.value);
        }
        //check validity returns true or false
        //update the isValid state
        setIsValid(checkValidity(e.target.name, e.target.value, maxMinLength))
    }

    const handleContactMe = (e) => {
        e.preventDefault();

        if (isValid) {
            setError('');
            //send data
            axios.post('api/contact-me', {name, email, message})
            .then(data => {
                //display the css animation
                setToastClass("success");
                //reload window
                setName("");
                setEmail("");
                setMessage("");
            });
        } else {
            setError('***Some fields are missing or invalid***');
        }
    }

    const checkValidity = (name, value, maxMinLength) => {
        
        let isValid = false;

        const emailValid = (email) => {
            const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
            return emailRegex.test(email);
        }

        const classDecider = (validity) => {
            if (!validity) {
                let inputClass = ['form-control', 'mb-2', 'border-2', 'border-danger'];
                return inputClass;
            } 
            if (validity) {
                let inputClass = ['form-control', 'mb-2'];
                return inputClass;
            }
        }

        if(name === 'Email'){
            isValid = value.trim() !== '' && emailValid(value);
            let newEmailClass = classDecider(isValid);
            setEmailClass(newEmailClass);
        }

        if(name === 'Name'){
            isValid = value.trim() !== '';
            let newNameClass = classDecider(isValid);
            setNameClass(newNameClass);
        }

        if(name === 'Message'){
            isValid = value.trim() !== '';
            let newMessageClass = classDecider(isValid);
            setMessageClass(newMessageClass);
        }

        if (!maxMinLength) {
            
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    return (
        <main className="container my-3 bg-light">
            <h2 className="text-info h3 py-3 mb-3 border-bottom">Contact</h2>
            <div className="d-flex justify-content-between">
                <p>LinkedIn: <small className="text-muted"><a href="https://www.linkedin.com/in/kelsie-langston-50433741/">linkedin.com/in/kelsie-langston-50433741/</a></small></p>
                <p>GitHub: <small className="text-muted"><a href="https://github.com/klangs34">github.com/klangs34</a></small></p>
            </div>
            <section className="contact_us">
                <form onSubmit={handleContactMe} className="text-Muted">
                <div className="text-center text-danger">{error}</div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={formChangeHandler} type="text" className={nameClass.join(' ')} name="Name" id="name" aria-describedby="nameHelp"
                            placeholder="Enter name" required />
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input onChange={formChangeHandler} type="email" className={emailClass.join(' ')} name="Email" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={formChangeHandler} className={messageClass.join(' ')} name="Message" id="message" placeholder="Type Message Here" rows="10"
                            cols="50" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-info mb-4">Send <img src="https://img.icons8.com/android/24/000000/forward-arrow.png" alt="forward arrow" /></button>
                </form>
            <div className={toastClass && toastClass} id="toast">
               Message Sent Successfully
            </div>
            </section>
        </main>
    )
}

export default Contact