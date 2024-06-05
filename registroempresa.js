// Validación con JS para mi correo //
const local = document.getElementById("local")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const zoneat = document.getElementById("zoneat")
const peligro = document.getElementById("alerta")



zoneat.addEventListener("submit", e=>{
    e.preventDefault()
    let alerta = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    peligro.innerHTML = ""
    if(local.value.length <4){
        alerta += `El local no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        alerta += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        alerta += `La contraseña no es valida <br>`
        entrar = true
    }
    if(entrar){
        peligro.innerHTML = alerta
    }else{
        peligro.innerHTML = "Enviado con éxito!"
    }
})

