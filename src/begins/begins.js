import {homePage} from "../beginsViews/beginViews.js"

//1 creamos funcion con promesas para que se registre con firebase
export const createAccount =(name, email,password)=>{
    //console.log("conectando")
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(result =>{
        //result user= a usuario de cuenta creada
        console.log(result.user)
        result.user.updateProfile({
        display:name
        })
// 2 creamos el envio de mensaje de verificación y su configuración, configuramos para ue se redireccione el link de verificacion que llega l email
const configuracion ={
    url:'http://localhost:5253'
}
// envio de mensaje de verificacion
result.user.sendEmailVerification(configuracion)
.catch (err=>{
alert (err.menssage)
})
//3 si el usuario no esta verificado no puee ver la pagina
firebase.auth().signOut()
alert (`Hola ${name} verifica en tu email`)
    })
// 1 error de registro
.catch(err=> {
   console.error(err.message)
})
}

//funcion de login
export const loginOk =(email,password)=>{
    //console.log("funcion login perfect")
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result =>{
        //console.log("ingresado")
    homePage();
    })
    .catch(function(error) {
       alert("email y/o clave mal ingresada");       
      });      
}
export const googleRegistration =()=>{
    //console.log("btn google ok")
    let provider = new firebase.auth.GoogleAuthProvider();
    authGoogle(provider);
}
const authGoogle= (provider)=>{
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
    //Esto le proporciona un token de acceso de Google. Puede usarlo para acceder a la API de Google.
        var token = result.credential.accessToken;
        console.log(token)
        //La información de usuario que ha iniciado sesión.
        var user = result.user;
        console.log(user)
        homePage();
      })
      .catch(function(error) {
        // Manejar errores aquí.
        var errorCode = error.code;
        console.log(errorCode)
        var errorMessage = error.message;
        console.log(errorMessage)
        // El correo electrónico de la cuenta del usuario utilizado.
        var email = error.email;
        console.log(email)
        //El tipo firebase.auth.AuthCredential que se utilizó.
        var credential = error.credential;
        console.log(credential)
      });
}