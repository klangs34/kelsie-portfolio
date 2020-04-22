import React from 'react';

const Technologies = () => {
    return (
        <main className="container my-3 bg-light">
            <div className="text-info h3 py-3 mb-3 border-bottom">Technologies</div>
            <section className="d-flex">
                <div className="row mx-auto">
                    <div className="box box1">
                        <img src="/assets/images/nodejs.png" alt="node" /> 
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/bootstrap.png" alt="bootstrap" /> 
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/css.jpg" alt="css" />
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/html.jpg" alt="html" />
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/express.png" alt="express" />     
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/javascript.png" alt="javascript" />  
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/jquery.jpg" alt="jquery" />     
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/react.png" alt="react" />     
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/MongoDB.jpg" alt="mongodb" />
                    </div>
                    <div className="box box1">
                        <img src="/assets/images/mysql.png" alt="mysql" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Technologies;