import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'
import { setUnAuthenticated } from '../../redux/userSlice'
import { removeUserFromLocalStorage } from '../../helpers/localStorage'

const Navbar = () => {
    const [isSidebarClose, setIsSidebarClose] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const dispatch = useDispatch()
    const authenticated = useSelector(state => state.user.authenticated)
    console.log(authenticated)

    const handleLogout = () => {
        dispatch(setUnAuthenticated())
        removeUserFromLocalStorage()
    }
  
    useEffect(() => {
      const body = document.querySelector('body')
      body.classList.toggle('dark', isDarkMode)
    }, [isDarkMode]);
  
    const toggleSidebar = () => {
      setIsSidebarClose(!isSidebarClose)
    };
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode)
    };

    return (
    <>
        <nav className={`sidebar ${isSidebarClose ? 'close' : ''}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src="logo.png" alt="" />
                    </span>

                    <div className="text logo-text">
                        <span className="name">Turnos App</span>
                    </div>
                </div>
                <i className='bx bx-chevron-right toggle fa fa-arrow-right' onClick={toggleSidebar}></i>
            </header>

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <Link to="/">
                            <li className="nav-link">
                                <i className="fa fa-home fa-lg icon"></i>
                                <span className="text nav-text">Inicio</span>
                            </li>
                        </Link>

                        <Link to="/perfil">   
                            <li className="nav-link">    
                                <i className="fa fa-user fa-lg icon"></i>
                                <span className="text nav-text">Perfil</span>
                            </li>
                        </Link>

                        <Link to="/appointments">
                            <li className="nav-link">
                                <i className="fa fa-calendar fa-lg icon"></i>
                                <span className="text nav-text">Turnos</span>
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li style={{ cursor:'pointer' }} onClick={handleLogout}>
                            <i className='bx bx-log-out icon fa fa-sign-out'></i>
                            <span className="text nav-text">Cerrar sesión</span>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='fa fa-moon-o bx bx-moon icon moon'></i>
                                <i className='fa fa-sun-o bx bx-sun icon sun'></i>
                            </div>
                            <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

                            <div className="toggle-switch" onClick={toggleDarkMode}>
                                <span className="switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

  
    </>
    )
}

export default Navbar