import React from 'react';
import ReactTooltip from "react-tooltip";

const Portfolio = () => {
    return (
        <>
            <ReactTooltip wrapper="div" data-place="right" data-multiline />
            <main className="container my-3 bg-light">
                <div className="text-info h3 py-3 mb-3 border-bottom">Portfolio</div>
                <section className="d-flex">
                    <div className="row mx-auto">
                        <div data-tip="This was project created to demonstrate the power and flexibility of local storage
                                    coupled with the use of tracking time.  This is a fun app that allows users to planner
                                    their day accordingly" 
                            className="box box1">
                            <a href="https://workday-planner.herokuapp.com/">
                                <img src="/assets/images/DayPlanner.gif" alt="day planner" />
                                <div className="strip">
                                    Day Planner
                                </div>
                            </a>
                            <div className="mt-2 text-center">
                                <a href="https://github.com/klangs34/Day-Planner/blob/master/README.md">ReadMe</a>
                            </div>
                        </div>
                        <div data-tip="This was project introduces API calls along with the use of local storage
                                    This app that allows the frequent traveler the ability to plan their trip
                                    around the current forcast"
                            className="box box1">
                            <a href="https://klangs34.github.io/weather-dashboard">
                                <img src="/assets/images/weatherDashboard.gif" alt="weather dashboard" />
                                <div className="strip">
                                    Weather Dashboard
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/weather-dashboard/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="As a music lover, this project was really fun.  I was able to play a back end
                                    role in building a site that plays music snippets and displays song
                                    lyrics via API call"
                            className="box box1">
                            <a href="https://klangs34.github.io/musicPlus/">
                                <img src="/assets/images/MusicPlus.jpg" alt="music plus" />
                                <div className="strip">
                                    Music Plus
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/wilpar4813/musicPlus/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="An ideal app for employers looking to build a list of pertinent employee
                                infomation to be displayed in a style html page"
                            className="box box1">
                            <a href="https://github.com/klangs34/employee-summary">
                                <img src="/assets/images/employeeSummary.gif" alt="developer pdf" />
                                <div className="strip">
                                    Employee Summary
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/employee-summary/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="Make notes and keep up with them!  Local storage at its finest!"
                            className="box box1">
                            <a href="https://secure-oasis-24291.herokuapp.com/">
                                <img src="/assets/images/note-taker.png" alt="note-taker screenshot" />
                                <div className="strip">
                                    Note Taker
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/note-taker/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="Design and devour a burger all in the same app.  App uses MySQL database and 
                            implements the MVC model"
                            className="box box1">
                            <a href="https://guarded-sands-01783.herokuapp.com/">
                                <img src="/assets/images/burgerIndulgence.png" alt="buger indulgence" />
                                <div className="strip">
                                    Burger Indulgence!
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/burger/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="This app is for the advid rock climber.  Full Stack app with user authentication"
                            className="box box1">
                            <a href="https://shrouded-cliffs-15806.herokuapp.com/members">
                                <img src="/assets/images/Capture.PNG" alt="rock climbing" />
                                <div className="strip">
                                    NC Rock Climbing!
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/Project-2/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                        <div data-tip="This app is for the employer looking for searchable and sortable
                            information about their employees"
                            className="box box1">
                            <a href="https://polar-eyrie-76278.herokuapp.com/">
                                <img src="/assets/images/EmployeeDirectoryDemo.gif" alt="employee directory" />
                                <div className="strip">
                                    Employee Directory
                                </div>
                            </a>
                        <div className="mt-2 text-center">
                            <a href="https://github.com/klangs34/employee-directory/blob/master/README.md">ReadMe</a>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Portfolio;