import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import routinesService from '../../../services/routines.service';

function Routinesitem() {
  const { id } = useParams();
  const [ routine, setRoutine ] = useState();

  useEffect(() => {
    async function fetchRoutines() {
      try {
        const routine = await routinesService.detail(id);
        setRoutine(routine.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchRoutines();
  }, [id])
  return (
    <div>
      <p>{routine?.name}</p>
      <p>{routine?.exerciseName}</p>
    </div>
  )
}

export default Routinesitem