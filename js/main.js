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

    //Filtar usuarios y contraseñar para verificar si son los mismos

    let usuarioEncontrado
    let usuariosFiltrados = usuarios.filter(u => u.usuario === usuario)

    if (usuariosFiltrados.length === 1) {
        usuarioEncontrado = usuariosFiltrados[0]
    }

    if (!usuarioEncontrado) {
        alert("Usuario no encontrado")
        
        while (!usuarioEncontrado ) {

            const usuario = prompt('Ingrese su usuario').toLowerCase();
            usuarioEncontrado = usuarios.find(u => u.usuario === usuario)
   
        }

    }

    alert("Usuario encontrado ahora ingrese la contraseña")
    let contrasena = prompt ("Ingrese la contraseña")
    if (usuarioEncontrado.contrasena === contrasena) {
        alert("Inicio de sesión exitoso");
        
    } else {
        let intentos = 0;
        while (intentos < 3 && usuarioEncontrado.contrasena !== contrasena) {
            intentos++
            contrasena = prompt ("Contraseña icorrecta!, intente de nuevo")
        }
        if (usuarioEncontrado.contrasena !== contrasena) {
            alert("Excediste el limite maximo de intentos, reintenta en 10 segundos");
        }else{
            alert("Inicio de sesión exitoso")
        }
    
    } 

    //Si se emcuentra el usuario da una alerta de inicio correcto, sino de error
}

//Los prompt para pedir que el usuario ingrese su usuario y contraseña

const inicioSesion = () => {
    const usuario = prompt('Ingrese su usuario').toLowerCase();
    verificarInicioSesion(usuario);
}

inicioSesion();