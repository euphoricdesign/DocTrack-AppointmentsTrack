import Navbar from "../components/Navbar"
import './Home.css'
import img from '../assets/doctors.svg'


const Home = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <h1>Buenas tardes Merlina!</h1>
            <span>Como te sentís hoy?</span>
           
            <div className="contenedor">
                <div className="text-content">
                    <span className="title">Encontra los mejores doctores en nuestra clinica</span>
                    <p className="subtitle">Busca entre nuestros médicos y agenda tu turno ahora</p>
                </div>
                <img className="svg-img" src={img} alt="Descripción de la imagen"></img>
            </div>
        </div>

    </>
  )
}

export default Home