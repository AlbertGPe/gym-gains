import React, { useEffect, useState } from 'react'
import routinesService from '../../../services/routines.service'
import { Link } from 'react-router-dom'
import Routinesitem from '../routines-item/Routinesitem';

function RoutinesList() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    routinesService.list()
      .then((routines) => setRoutines(routines))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      {routines.map((routine) => (
        <Link to={`/routines/${routine.id}`}>
          <div key={routine.id}>{routine.name}</div>
        </Link>
      ))}
    </>
  )
}

export default RoutinesList