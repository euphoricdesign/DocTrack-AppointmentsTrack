import { useSelector } from "react-redux"
import img from "../../assets/doctor.svg"
import './Home.css'


const Home = () => {
  const user = useSelector(state => state.user.user)

  const name = user.name.split(' ')[0]

  return (
    <>
        <div className="container">
            <h1 className="greeting">Hi {name}! 👋</h1>
            <span>How do you feel today?</span>
           
            <div className="contenedor">
                <div className="text-content">
                    <span className="title">Find the best doctors in our clinic</span>
                    <p className="subtitle">Search through our doctors and schedule your appointment now</p>
                </div>
                <img className="svg-img" src={img} alt="Descripción de la imagen"></img>
            </div>
        </div>
    </>
  )
}

export default Home