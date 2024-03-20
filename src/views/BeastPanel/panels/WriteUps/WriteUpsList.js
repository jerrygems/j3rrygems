import React from 'react'
import CardNormAdmin from '../../comps/CardNormAdmin'
import ListNormAdmin from '../../comps/ListNormAdmin'

function WriteUpsList() {
  return (
    <div className='w-75 d-flex flex-column'>
      <h3 className='text-start my-3'>WriteUp</h3>
      <hr></hr>
      <div className='w-100 d-flex flex-column'>
        <ListNormAdmin />
        <ListNormAdmin />
        <ListNormAdmin />
      </div>
    </div>
  )
}

export default WriteUpsList