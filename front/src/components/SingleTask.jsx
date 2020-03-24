import React, { Fragment } from "react";
import "../css/style.css"
import SingleTaskEditFormContainer from "../containers/SingleTaskEditFormContainer"

export default ({ selectedTask, user }) => {

    return (
        <Fragment>
            {(selectedTask.id) ?
                (<Fragment>
                    <section id="banner_white">
                        <div className="container box_container">
                            <div className="row">

                                <div className="col-md-6" style={{ backgroundColor: "#1e5dac" }}>
                                    <div className="form-container">
                                        <div className="card-body mx-auto">
                                            <p className="card-title mt-3 text-center title">Recruit Information</p>
                                            {/* <p className="card-title mt-3 text-center title">{selectedTask.task.description}</p> */}
                                            <p className="text-left subtitle">Name: {selectedTask.recruit.name} {selectedTask.recruit.lastName}</p>
                                            <p className="text-left subtitle">Email: {selectedTask.recruit.email}</p>
                                            <p className="text-left subtitle">Phone Number: {selectedTask.recruit.phone}</p>
                                            <p className="text-left subtitle">DNI: {selectedTask.recruit.DNI}</p>
                                            <p className="text-left subtitle">Entry date: {selectedTask.recruit.entryDate} </p>
                                            
                                            
                                            {/* <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlTextarea1">New comment</label>
                                                    <textarea onChange={handleChange} value={state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                                <button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Add</button>
                                            </form> */}
                                        </div>
                                    </div>

                                    {/* <RegisterContainer /> */}
                                </div>

                                <div className="col-md-6 text-center">
                                    <img src="https://euphoriagreenville.com/wp-content/uploads/2019/04/fake-headshot.jpg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="banner_white">
                        <div className="container box_container">
                            <div className="row">

                                <div className="col-md-6" style={{ backgroundColor: "#1e5dac" }}>
                                    <div className="form-container" style={{display:"inline-block"}}>
                                        <div className="card-body mx-auto">
                                            <p className="card-title mt-3 text-center title">Task General Information</p>
                                            {/* <p className="card-title mt-3 text-center title">{selectedTask.task.description}</p> */}
                                            <p className="text-left subtitle">Task: {selectedTask.task.description}</p>
                                            <p className="text-left subtitle">State: {selectedTask.state} </p>
                                            <p className="text-left subtitle">Responsable: {user.name} {user.lastName} </p>
                                            <p className="text-left subtitle">Due date: {selectedTask.dueDate} </p>
                                            <p className="text-left subtitle">Finish date: </p>
                                            {(selectedTask.comment) ? (<p className="text-left subtitle">Comment: {selectedTask.comment} </p>) : null}

                                            {/* <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlTextarea1">New comment</label>
                                                    <textarea onChange={handleChange} value={state.description} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                                <button className="btn btn-info btn-block mb-2" style={{ backgroundColor: "#adb5bd", borderColor: "#adb5bd" }}>Add</button>
                                            </form> */}
                                            </div>
                                        </div>

                                    {/* <RegisterContainer /> */}
                                </div>

                                <div className="col-md-6 text-center">
                                    <img src="https://euphoriagreenville.com/wp-content/uploads/2019/04/fake-headshot.jpg" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </section>
                </Fragment>)
                : null}
            <SingleTaskEditFormContainer />
        </Fragment>
    )
}

