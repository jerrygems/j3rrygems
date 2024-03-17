import React from 'react'
import { ListGroup } from 'react-bootstrap'


function SideNav() {
    return (
        <div className='flex-column w-25 text-primary justify-content-center m-2'>
            <h5 className='mt-3'>HOME</h5>
            <ListGroup>
                
                <ListGroup.Item>Kernel Hacking</ListGroup.Item>
                <ListGroup.Item>Game Hacking</ListGroup.Item>
                <ListGroup.Item>Android Security</ListGroup.Item>
                <ListGroup.Item>CTF Writeups</ListGroup.Item>
                <ListGroup.Item>Backdoor</ListGroup.Item>
            </ListGroup>
            <h5 className='mt-3'>Reports & FAQs</h5>
            <ListGroup>
                
                <ListGroup.Item>Tutorials</ListGroup.Item>
                <ListGroup.Item>Projects</ListGroup.Item>
                <ListGroup.Item>Reports</ListGroup.Item>
                <ListGroup.Item>FAQs</ListGroup.Item>
                <ListGroup.Item>Contacts</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default SideNav