import { useState } from 'react'
import { validateForm } from '../../helpers/validateForm'
import axios from 'axios'
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: 0,
    username: "",
    password: "",
})
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
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

    //* Validar que todos los campos obligatorios estén llenos
    let isFormValid = true;
    const newErrors = {};
    for (const field in formData) {
      console.log(field)
      if (!formData[field]) {
        newErrors[field] = `${field} es requerido.`;
        isFormValid = false;
      }
    }

    setErrors(newErrors);

    if (isFormValid) {
      // Enviar el formulario
      await axios.post('http://localhost:3000/users/register', formData);
      alert('Form submitted successfully');
    } else {
      // Mostrar un mensaje de error o realizar alguna otra acción
      alert('Todos los campos son obligatorios')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Nombre Completo</label>
        <input className={errors.name ? 'error' : ''} type="text" value={formData.name} name='name' onChange={handleInputChange} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>Email</label>
        <input className={errors.email ? 'error' : ''} type="email" value={formData.email} name='email' onChange={handleInputChange} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label>Fecha de Nacimiento</label>
        <input className={errors.birthdate ? 'error' : ''} type="date" value={formData.birthdate} name='birthdate' onChange={handleInputChange} />
        {errors.birthdate && <p className="error-message">{errors.birthdate}</p>}

        <label>Número de documento</label>
        <input className={errors.nDni ? 'error' : ''} type="number" value={formData.nDni} name='nDni' onChange={handleInputChange} />
        {errors.nDni && <p className="error-message">{errors.nDni}</p>}

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

export default Register