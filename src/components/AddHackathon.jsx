import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddHackathon = () => {
  const [input, changeInput] = useState({
        teamId: "",
        teamName: "",
        teamLeaderName: "",
        leaderEmail: "",
        leaderPhone: "",
        collegeName: "",
        numberOfMembers: "",
        projectTitle: "",
        problemStatementTrack: "",
        technologyStack: "",
        mentorName: "",
        registrationDate: "",
        tableStationNumber: ""
    })

    const [message, setMessage] = useState("")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const submitData = () => {

        axios.post("http://localhost:3000/add-hackathon", input)
            .then((response) => {

                setMessage("Team Added Successfully")

                changeInput({
                    teamId: "",
                    teamName: "",
                    teamLeaderName: "",
                    leaderEmail: "",
                    leaderPhone: "",
                    collegeName: "",
                    numberOfMembers: "",
                    projectTitle: "",
                    problemStatementTrack: "",
                    technologyStack: "",
                    mentorName: "",
                    registrationDate: "",
                    tableStationNumber: ""
                })

            })
            .catch((error) => {
                console.log(error)
                setMessage("Something went wrong")
            })

    }

    return (
        <div>
            <NavigationBar/>
            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>Add Hackathon Team</h3>
                    </div>

                    <div className="card-body">

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Team ID</label>
                                <input type="text" 
                                className="form-control" 
                                name="teamId" 
                                value={input.teamId} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Team Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="teamName" 
                                value={input.teamName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Team Leader Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="teamLeaderName" 
                                value={input.teamLeaderName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Leader Email</label>
                                <input type="email" 
                                className="form-control" 
                                name="leaderEmail" 
                                value={input.leaderEmail} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Leader Phone</label>
                                <input type="text" 
                                className="form-control" 
                                name="leaderPhone" 
                                value={input.leaderPhone} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>College Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="collegeName" 
                                value={input.collegeName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Number Of Members</label>
                                <input type="number" 
                                className="form-control" 
                                name="numberOfMembers" 
                                value={input.numberOfMembers} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Project Title</label>
                                <input type="text" 
                                className="form-control" 
                                name="projectTitle" 
                                value={input.projectTitle} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Problem Statement Track</label>
                                <input type="text" 
                                className="form-control" 
                                name="problemStatementTrack" 
                                value={input.problemStatementTrack} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Technology Stack</label>
                                <input type="text" 
                                className="form-control" 
                                name="technologyStack" 
                                value={input.technologyStack} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Mentor Name</label>
                                <input type="text" 
                                className="form-control" 
                                name="mentorName" 
                                value={input.mentorName} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Registration Date</label>
                                <input type="date" 
                                className="form-control" 
                                name="registrationDate" 
                                value={input.registrationDate} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-md-6">
                                <label>Table / Station Number</label>
                                <input type="text" 
                                className="form-control" 
                                name="tableStationNumber" 
                                value={input.tableStationNumber} 
                                onChange={inputHandler} />
                            </div>

                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-primary" onClick={submitData}>
                                    Add Team
                                </button>
                            </div>

                            <div className="col-12 text-center">
                                <h5 className="text-success">{message}</h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AddHackathon