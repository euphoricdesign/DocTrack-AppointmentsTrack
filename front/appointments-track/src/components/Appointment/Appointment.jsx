import { ButtonCancel } from "../Button/ButtonCancel"

const Appointment = ({ id, date, time, status, confirmCancel }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{time}</td>
      <td><span className={status === "cancelled" ? "cancelled" : "active"}>{status}</span></td>
      <th><ButtonCancel text={"Cancelar"} confirmCancel={confirmCancel} id={id} status={status}/></th>
    </tr>
  )
}

export default Appointment