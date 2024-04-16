// import { useState } from "react"
import { useEffect, useState } from "react"
import { myAppointments } from "../../helpers/myAppointments"
import './Appointments.css'
import Appointment from "../../components/Appointment/Appointment"
import axios from 'axios'

const Appointments = () => {
  
  const [turnos, setTurnos] = useState([])

  const getAppointments = async () => {
    const data = await axios.get("http://localhost:3000/appointments")
    console.log(data)
    setTurnos(data.data)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div className="container">
      <h1>Estamos en mis turnos</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Status </th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          { turnos.map(turno => (
            <Appointment key={turno.id} date={turno.date} time={turno.time} status={turno.status}/>
          ))

          }
        </tbody>
      </table>
    </div>
  )
}

export default Appointments