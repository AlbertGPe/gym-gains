import React, { useEffect, useState } from 'react'
import routinesService from '../../../services/routines.service'

function RoutinesList() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    routinesService.list()
      .then((routines) => setRoutines(routines))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <h1>Hello</h1>
      {routines.map((routine) => <div key={routine.id}>{routine.id}</div>)}
    </>
  )
}

export default RoutinesList