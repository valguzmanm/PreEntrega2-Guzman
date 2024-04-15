//La "base de datos" de los usuarios y contraseñas en un array

const usuarios = [
    {
        usuario: 'valguzmanm',
        contrasena: 'Roma123'
    },
    {
        usuario: 'santiyr',
        contrasena: 'morgan123'
    },
    {
        usuario: 'yinmp',
        contrasena: 'Valdan7'
    },
    {
        usuario: 'danpm',
        contrasena: 'zoe123'
    },
    {
        usuario: 'romayg',
        contrasena: 'Negrita14'
    },
]


//función para verificar el inicio de sesión

const verificarInicioSesion = (usuario) => {

    //Filtar usuarios para verificar si son los mismos

    //se crea la variable "usuarioEncontrado" para guardar el usuario solo si es encontrado en el array, de lo contrario est variable siempre será undefinded

    let usuarioEncontrado

    //Aquí filtramos los usuarios que estan en el array si es igual al que se recibió por parametro y el relsultado de este filtro es almacenado en la variable "usuariosFiltrados"

    let usuariosFiltrados = usuarios.filter(u => u.usuario === usuario)

    // Si la cantidad de elementos que se filtraron, si es igual a uno se guarda en la variable "suarioEncontrado" el primero que se encontró

    if (usuariosFiltrados.length === 1) {
        usuarioEncontrado = usuariosFiltrados[0]
    }

    // Si ningun elemento se ecuentra, envia una alerta que el usuario no ha sido encontrado 

    if (!usuarioEncontrado) {
        alert("Usuario no encontrado")

    //Entonces si el usuario no es encontrado pide que se vuelva a ingresar el usuario una y otra vez hasta que ingrese un usuario correcto 
        
        while (!usuarioEncontrado ) {

            const usuario = prompt('Ingrese su usuario').toLowerCase();

    //Se utiliza el método find en vez del filter, porque este nos devulve el primero elemento que encuentra o nos devulve undefinded, lo que reinicia el ciclo
            usuarioEncontrado = usuarios.find(u => u.usuario === usuario)
   
        }

    }

    // Al ingresar un usurio correcto, envia una alerta para seguir con la verificacion de la contraseña y pide ingresar la contraseña. 

    alert("Usuario encontrado ahora ingrese la contraseña")
    let contrasena = prompt ("Ingrese la contraseña")

    //Si la contraseña es igual a la que esta en el objeto, envía una alerta de inicio de sesion

    if (usuarioEncontrado.contrasena === contrasena) {
        alert("Inicio de sesión exitoso");

    //Si la contraseña no coincide, se crea un ciclo en cual el usuario solo tiene 3 intentos para ingresar la correcta.

    } else {
        let intentos = 0;
        while (intentos < 3 && usuarioEncontrado.contrasena !== contrasena) {
            intentos++
            contrasena = prompt ("Contraseña icorrecta!, intente de nuevo")
        }

    //Si se excede de esos 3 intentos y aun no coincide, envia una alerta.
        if (usuarioEncontrado.contrasena !== contrasena) {
            alert("Excediste el limite maximo de intentos, reintenta en 10 segundos");

    //Y si sí coicide, en uno de esos intentos envia la alerta de inicio de sesion correcto.
        }else{
            alert("Inicio de sesión exitoso")
        }
    
    } 

}

//Los prompt para pedir que el usuario ingrese su usuario y contraseña

const inicioSesion = () => {
    const usuario = prompt('Ingrese su usuario').toLowerCase();
    verificarInicioSesion(usuario);
}

//Se llama la función

inicioSesion();