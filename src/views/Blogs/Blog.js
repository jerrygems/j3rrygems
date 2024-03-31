import React from 'react'
import { Button } from 'react-bootstrap'

function Blog() {
    return (
        <div className='d-flex w-75 flex-column text-start rounded border m-3'>
            <div className='d-flex flex-column m-1'>
                <h4 className='m-2'>Heading</h4>
                <small className='m-2 text-muted'>Date : </small>
            </div>
            <hr></hr>
            <div className='d-flex flex-column m-1'>
                <p className='m-2'><b>Description : </b></p>
                <p className='m-3'>Tempor officia tempor excepteur non deserunt non. Mollit minim quis id nisi sunt magna voluptate est nostrud est. Et qui eiusmod et laboris proident aliquip laboris incididunt incididunt excepteur Lorem aliqua nostrud pariatur. Nisi commodo consectetur in est minim enim officia incididunt.

                    Minim ad voluptate sit ex commodo exercitation veniam mollit proident consequat irure dolore aliquip. Ex esse do occaecat consectetur labore cupidatat nulla ad dolor. Ut aliqua mollit nostrud non cillum enim sint pariatur qui est incididunt pariatur anim. Deserunt magna sunt eu do labore occaecat commodo duis nulla ad occaecat.

                    Mollit ut labore deserunt et reprehenderit deserunt pariatur aliqua. Pariatur dolor culpa qui sunt proident culpa minim minim do. Do aliquip cupidatat est ea ad culpa ex.</p>
            </div>
            <hr></hr>
            <div className='d-flex flex-wrap m-1'>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
                <Button className='m-2' variant='dark'>Keyword 1</Button>
            </div>
            <hr></hr>
            <div className='d-flex flex-column m-1'>
                <small className='m-2 text-muted'>Authors : </small>
                <small className='m-2 text-muted'>Modified By : </small>
            </div>
        </div>
    )
}

export default Blog