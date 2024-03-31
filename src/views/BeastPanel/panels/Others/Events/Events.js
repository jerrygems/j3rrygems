import React from 'react'
import ListNormAdmin from '../../../comps/ListNormAdmin'

export default function Events() {
  return (
    <div className='w-75'>
      <h3 className='text-start m-3'>Events</h3>
      <hr></hr>
      <div className='d-flex flex-column'>
        <ListNormAdmin />
        <ListNormAdmin />
        <ListNormAdmin />
        <ListNormAdmin />
        <ListNormAdmin />
      </div>
    </div>
  )
}

