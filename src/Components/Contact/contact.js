import React from 'react';

const Contact = () => {
    return (
        <main className="container my-3 bg-light">
            <h2 className="text-info h3 py-3 mb-3 border-bottom">Contact</h2>
            <section className="contact_us">
                <form action="#" className="text-Muted">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control mb-2" id="name" aria-describedby="nameHelp"
                            placeholder="Enter name" />
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" placeholder="Type Message Here" rows="10"
                            cols="50"></textarea>
                    </div>
                    <button type="submit" className="btn btn-info mb-4">Submit</button>
                </form>
            </section>
        </main>
    )
}

export default Contact