import React, { useState } from 'react'
import { validateForm } from '../../helpers/validateForm'
import axios from 'axios'
import { validateCredential } from '../../helpers/validateCredentials'

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value
    }) 

    validateAndUpdateErrors(name, value)
  }

  const validateAndUpdateErrors = (fieldName, value) => {
    const fieldError = validateForm(fieldName, value) //* Mensaje de error

    setErrors({
      ...errors,
      [fieldName]: fieldError
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
      //* Validar que todos los campos obligatorios estén llenos
      let isFormValid = true;
      const newErrors = {};
      for (const field in formData) {
        if (!formData[field]) {
          newErrors[field] = `${field} es requerido.`;
          isFormValid = false;
        }
      }

      setErrors(newErrors);


      if (isFormValid) {
        const isCredentialValid = await validateCredential({ username: formData.username, password: formData.password });
        if (isCredentialValid) {
          //* Redirigir al usuario a la página de inicio o
          alert("Iniciaste sesión correctamente")
        } else {
          alert('Las credenciales son incorrectas');
        }
      } else {
        alert('Todos los campos son obligatorios')
      }

    } catch (err) {
      console.log('Ocurrió un error al iniciar sesión');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre de usuario</label>
        <input className={errors.username ? 'error' : ''} type="text" value={formData.username} name='username' onChange={handleInputChange} />
        {errors.username && <p className="error-message">{errors.username}</p>}

        <label>Contraseña</label>
        <input className={errors.password ? 'error' : ''} type="text" value={formData.password} name='password' onChange={handleInputChange} />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <button>Enviar</button>  
    </form>
  )
}

export default Login