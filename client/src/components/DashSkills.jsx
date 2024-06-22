import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashSkills = () => {
  return (
    <div>
      <Link to='/create-skills'>
        <Button gradientDuoTone="purpleToPink" >
          Add Skill
        </Button>
      </Link>
    </div>
  )
}

export default DashSkills