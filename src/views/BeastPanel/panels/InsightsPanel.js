import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

function InsightsPanel() {

    const [usersInfo, setUsersInfo] = useState([])
    useEffect(() => {
        const showData = async () => {
            try {
                const token = localStorage.getItem('jwt_token')
                let request = await fetch("http://localhost:5000/users/uinfo", {
                    method: "get",
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                })
                if (request.ok) {
                    const data = await request.json()
                    setUsersInfo(data)
                } else {
                    console.log("something went wrong")
                }
            }catch(err){
                console.log(err)
            }
        }
        showData()
    }, [])

    return (
        <div className='w-75 my-2 mx-2 txt-white'>

            {/* this table will contain weekly insights */}
            <h3 className='text-start mx-5 my-2 txt-white'>Insights</h3>
            <hr></hr>
            <Table responsive className='table table-hover cover1 border-0 rounded'>
                <thead>
                    <tr>
                        <th>Accounts Created</th>
                        <th>Total ScreenTime</th>
                        <th>Timespent per user</th>
                        <th>male</th>
                        <th>female</th>
                        <th>Avg Visits</th>{/*avg visit per user*/}
                        <th>Posts Viewed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>25</td>
                        <td>10h</td>
                        <td>10mins</td>
                        <td>10</td>
                        <td>6</td>
                        <td>40 views</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </Table>

            <h3 className='text-start mx-5 my-2'>Users</h3>
            <hr></hr>
            <Table className='table table-hover cover1 rounded border-0 overflow-scroll' responsive>
                <thead>
                    <tr>
                        <th>uid</th>
                        <th>username</th>
                        <th>email</th>
                        <th>IPV4</th>
                        <th>Phone no.</th>
                        <th>role</th>
                        <th>browser</th>
                        <th>Status</th>
                        <th>dob</th>
                        <th>Edit</th>
                        <th>Trash</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(usersInfo) && usersInfo.map((item, index) => (
                            <>
                                <tr key={index}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.ip_addr}</td>
                                    <td>{item.phone_no}</td>
                                    <td>{item.role}</td>
                                    <td>{item.browser_info}</td>
                                    <td>online</td>
                                    <td>{item.dob}</td>
                                    <td><Button className='btn btn-primary'><i className='fa fa-edit'></i> Edit</Button></td>
                                    <td><Button className='btn btn-danger'><i className='fa fa-trash'></i> Trash</Button></td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default InsightsPanel