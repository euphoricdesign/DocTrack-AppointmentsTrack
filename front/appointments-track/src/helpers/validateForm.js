export const validateForm = (fieldName, value) => {
    let error = ''
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[0-2])[\/\-]\d{4}$/


    switch(fieldName) {
        case 'name': 
            if (!value.trim()) {
                error = 'El nombre completo es requerido'
            }
            break

        case 'email': 
            if (!value.trim()) {
                console.log(value)
                error = 'El correo electronico es requerido'
            } else if (!emailRegex.test(value)) {
                error ='Correo electronico invalido'
            }
            break

        case 'birthdate':
            if (!value.trim()) {
                error = 'La fecha de nacimiento es requerida';
            } else if (dateRegex.test(value)) {
                error = 'El formato de la fecha es incorrecto. Debe ser: día/mes/año'
            }
            break
        
        case 'nDni':
            if (!value) {
                error = 'El número de DNI es requerido';
            }
            break

        case 'username': 
            if (!value.trim()) {
                error = 'El nombre de usuario es requerido'
            }
            break

        case 'password': 
            if (!value.trim()) {
                error = 'La contraseña es requerida'
            } else if (!passwordRegex.test(value)) {
                error = 'La contraseña debe tener una longitud mínima de 8 caracteres y contener al menos una letra y un dígito'
            }
            break
        
        default:
            break
    }
    return error
}