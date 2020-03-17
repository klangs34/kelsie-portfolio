import React from 'react';

const About = () => {
    return (
        <main className="container my-3 bg-light h-100">
            <div className="text-info h3 py-3 mb-3 border-bottom">About Me</div>
            <section>
                <div className="card border-0 float-left mr-3" style={{ width: "8rem" }}>
                    <div className="card-body p-0">
                        <img className="img-fluid" src="http://www.simpleimageresizer.com/_uploads/photos/31e38890/latest-LinkedIn_50.jpg" alt="me" />
                    </div>
                </div>
                <div className="text-muted">
                    <p>Hello World! This project begins a new and exciting journey for me in the world of programming! I've
                    done a few projects in the past, but none like this one as I
                    look to establish a foundation in which I can build upon.
                </p>
                    <p>I began learning to code in the early 2000s when I was in undergrad at Elon University (Go
                    Phoenix!!). For you old-schoolers, this was when Visual Basics and C+ ran the programming world.
                    I built a few static sites with a little backend access, but years later began
                    incorporating dynamic pages with PHP. For several years PHP, HTML, CSS, and MySQL were the suite of
                    choice.
                </p>
                    <p>Fast forward to present, I am all about Javascript!!! My last project was done using REACT, which was
                    satisfying on so many levels.</p>
                    <p>When I am not coding, I enjoy spending time with my family, doing some occassional fishing, and
                    watching
                    football.</p>
                    <p>Check out my page and feel free to drop me a line or two!</p>
                </div>
            </section>
        </main>
    )
};

export default About;