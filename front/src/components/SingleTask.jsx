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
                                <div className="col-md-6" style={{ backgroundColor: "#1E5DAC" }}>
                                    <div className="form-container">
                                        <div className="card-body mx-auto">
                                            <p className="card-title mt-3 text-center title">Recruit Information</p>
                                            <p className="text-left subtitle">Name: {selectedTask.recruit.name} {selectedTask.recruit.lastName}</p>
                                            <p className="text-left subtitle">Email: {selectedTask.recruit.email}</p>
                                            <p className="text-left subtitle">Phone Number: {selectedTask.recruit.phone}</p>
                                            <p className="text-left subtitle">DNI: {selectedTask.recruit.DNI}</p>
                                            <p className="text-left subtitle">Entry date: {selectedTask.recruit.entryDate} </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ backgroundColor: "#226EB2" }}>
                                    <div className="form-container" style={{ display: "inline-block" }}>
                                        <div className="card-body mx-auto">
                                            <p className="card-title mt-3 text-center title">Task General Information</p>
                                            <p className="text-left subtitle">Task: {selectedTask.task.description}</p>
                                            <p className="text-left subtitle">State: {selectedTask.state} </p>
                                            <p className="text-left subtitle">Responsable: {user.name} {user.lastName} </p>
                                            <p className="text-left subtitle">Due date: {selectedTask.dueDate} </p>
                                            <p className="text-left subtitle">Finish date: </p>
                                            {(selectedTask.comment) ? (<p className="text-left subtitle">Comment: {selectedTask.comment} </p>) : null}
                                        </div>
                                    </div>
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











