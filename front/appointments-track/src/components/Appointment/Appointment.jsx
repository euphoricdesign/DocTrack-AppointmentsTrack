
const Appointment = ({ date, time, status }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{time}</td>
      <td>{status}</td>
      <th><button>cancelar</button></th>
    </tr>
  )
}

export default Appointment