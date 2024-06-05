// Validación con JS para mi correo //
const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const ciudad = document.getElementById("ciudad")
const telefono = document.getElementById("telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(apellido.value.length <5){
        warnings += `El apellido no es valido <br>`
        entrar = true
    }
    if(ciudad.value.length <5){
        warnings += `La ciudad no es valida <br>`
        entrar = true
    }
    if(telefono.value.length <8){
        warnings += `El telefono no es valido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado con éxito!"
    }
})

