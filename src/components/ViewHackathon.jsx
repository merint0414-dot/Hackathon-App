import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewHackathon = () => {
   const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-hackathon")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">
                        <h3>View All Hackathon Teams</h3>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead className="table-dark">

                                    <tr>
                                        <th>Team ID</th>
                                        <th>Team Name</th>
                                        <th>Leader</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>College</th>
                                        <th>Members</th>
                                        <th>Project</th>
                                        <th>Track</th>
                                        <th>Technology</th>
                                        <th>Mentor</th>
                                        <th>Date</th>
                                        <th>Table No</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        data.map((value, index) => (
                                            <tr key={index}>
                                                <td>{value.teamId}</td>
                                                <td>{value.teamName}</td>
                                                <td>{value.teamLeaderName}</td>
                                                <td>{value.leaderEmail}</td>
                                                <td>{value.leaderPhone}</td>
                                                <td>{value.collegeName}</td>
                                                <td>{value.numberOfMembers}</td>
                                                <td>{value.projectTitle}</td>
                                                <td>{value.problemStatementTrack}</td>
                                                <td>{value.technologyStack}</td>
                                                <td>{value.mentorName}</td>
                                                <td>{value.registrationDate}</td>
                                                <td>{value.tableStationNumber}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewHackathon