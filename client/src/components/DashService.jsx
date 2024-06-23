import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashService = () => {
  return (
    <div>
      <div className="w-full flex justify-end mt-2 mb-2">
        <Link to='/create-service' ><Button gradientDuoTone="purpleToPink" >Create Service</Button></Link>
      </div>
    </div>
  )
}

export default DashService