import React from 'react';

const Portfolio = () => {
    return (
        <main className="container my-3 bg-light">
            <div className="text-info h3 py-3 mb-3 border-bottom">Portfolio</div>
            <section className="d-flex">
                <div className="row mx-auto">
                    <div className="box box1">
                        <a href="https://klangs34.github.io/Day-Planner">
                            <img src="/assets/images/DayPlanner.gif" alt="day planner" />
                            <div className="strip">
                                Day Planner
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://klangs34.github.io/weather-dashboard">
                            <img src="/assets/images/WeatherDashboard.png" alt="weather dashboard" />
                            <div className="strip">
                                Weather Dashboard
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://klangs34.github.io/musicPlus/">
                            <img src="/assets/images/MusicPlus.jpg" alt="music plus" />
                            <div className="strip">
                                Music Plus
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://github.com/klangs34/employee-summary">
                            <img src="/assets/images/employee-summary.png" alt="developer pdf" />
                            <div className="strip">
                                Employee Summary
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://secure-oasis-24291.herokuapp.com/">
                            <img src="/assets/images/note-taker.png" alt="note-taker screenshot" />
                            <div className="strip">
                                Note Taker
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://guarded-sands-01783.herokuapp.com/">
                            <img src="/assets/images/burgerIndulgence.png" alt="buger indulgence" />
                            <div className="strip">
                                Burger Indulgence!
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://shrouded-cliffs-15806.herokuapp.com/members">
                            <img src="/assets/images/Capture.PNG" alt="rock climbing" />
                            <div className="strip">
                                NC Rock Climbing!
                            </div>
                        </a>
                    </div>
                    <div className="box box1">
                        <a href="https://polar-eyrie-76278.herokuapp.com/">
                            <img src="/assets/images/EmployeeDirectoryDemo.gif" alt="employee directory" />
                            <div className="strip">
                                Employee Directory
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Portfolio;