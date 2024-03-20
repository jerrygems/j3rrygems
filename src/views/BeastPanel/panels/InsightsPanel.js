import React from 'react'
import { Button, Tab, Table } from 'react-bootstrap'

function InsightsPanel() {
    return (
        <div className='w-75 my-2 mx-2'>

            {/* this table will contain weekly insights */}
            <h3 className='text-start mx-5 my-2'>Insights</h3>
            <hr></hr>
            <Table className='border-start border-top border-right' responsive>
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
            {/* Users table from here */}
            <h3 className='text-start mx-5 my-2'>Users</h3>
            <hr></hr>
            <Table className='border-start border-top border-right' responsive>
                <thead>
                    <tr>
                        <th>uid</th>
                        <th>username</th>
                        <th>email</th>
                        <th>IPV4</th>
                        <th>Hashes</th>
                        <th>Status</th>
                        <th>timestamp</th>
                        <th>Edit</th>
                        <th>Trash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a1bc3fda</td>
                        <td>johnWick</td>
                        <td>john@gmail.com</td>
                        <td>192.168.19.1</td>
                        <td>$a$md5$acdfad12fdcf35</td>
                        <td>online</td>
                        <td>01/01/01 19:25:23 PM</td>
                        <td><Button className='btn btn-primary'><i className='fa fa-edit'></i> Edit</Button></td>
                        <td><Button className='btn btn-danger'><i className='fa fa-trash'></i> Trash</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default InsightsPanel