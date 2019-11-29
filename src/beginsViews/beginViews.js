import {createAccount} from "../begins/begins.js"
import {loginOk} from "../begins/begins.js"
import {googleRegistration} from "../begins/begins.js"

export const beginsViews = ()=> {
    const root = document.getElementById("root");
    root.innerHTML = 
    `<div class="pagePrincipal">
    <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
    <section class="menu">
        <img src="imagen/Chile 2019" class="imagenStart" >
        <button id="btnRegistry" class="btn">Regístrate</button>
        <button id="btnLogin" class="btn">Iniciar Sesión</button>
        <button id="btnFacebook" class="btn"><img src="imagen/facebook.png" id="imgFacebook">Acceder con Facebook</button>
    
        <button id="btnGoogle" class="btn"><img src="imagen/google.png" id="imgGoogle">Acceder con Google</button>
    </section>
</div>`
// click en el boton registrar abre el formulario de registro
    const btnRegistry=document.getElementById("btnRegistry");
   btnRegistry.addEventListener('click', () =>{ 
       //console.log("se escucha")
       register();
   })
// click en el btn de ligin abre formulario de ingreso
    const btnLogin= document.getElementById("btnLogin");
    btnLogin.addEventListener('click', () =>{
        //console.log("click ok")
       login();
   })
    const btnFacebook= document.getElementById("btnFacebook");
    btnFacebook.addEventListener('click', () =>{
        btnFacebook();
   })
    const btnGoogle= document.getElementById("btnGoogle");
    btnGoogle.addEventListener('click', () => {
       // console.log("cliki listi")
        googleRegistration();
    })
}
   const register = () =>{
   const root =document.getElementById("root");
   root.innerHTML =
   `<div class="records">
       <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
     <div class="containerRegistry">
         <div id="modalRegistryEmail">
           <input type="text" name="name" id="name" class="name" placeholder="Nombre">
           <input type="text" name="email" id="email" class="email" placeholder="Email">
           <input type="password" name="password" id="password" class="password" placeholder="Clave">           
       <button id="btnRegistryOk" >Regístrar</button></div>
   </div>
   <img src="imagen/arrow left.png" alt="">
</div>  
   `
   const btnRegistryOk=document.getElementById("btnRegistryOk");
   btnRegistryOk.addEventListener('click', () =>{ 
      // console.log("ok")
    RegistryOk();
   })
  }
const RegistryOk=()=>{
    let name= document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password= document.getElementById("password").value;
   //console.log(name, email,password)
   createAccount(name, email,password);
}

const login = ()=>{
    const root =document.getElementById("root");
    root.innerHTML= 
    `<div class="records">
    <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
  <div class="containerRegistry">
      <div id="modalRegistryEmail">
        <input type="text" name="email" id="email" class="email" placeholder="Email" required>
        <input type="password" name="password" id="password" class="password" placeholder="Clave" required>           
    <button id="btnInit" >Iniciar sesión</button></div>
</div>
<img src="imagen/arrow left.png" alt="">
</div>`
const btnInit=document.getElementById("btnInit");
btnInit.addEventListener('click', ()=>{
    //console.log("login ok");
 loginForm();
})
}
const loginForm = () =>{
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
 //console.log(email, password);
 loginOk(email,password);
}
export const homePage=()=>{
    //console.log("unidas")
    const root =document.getElementById("root");
    root.innerHTML= 
    `<div class="homePage">
    <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
    <main><div id="manifestations">Manifestaciones</div><div id="information">Información</div></main>
    <section class="countainerHome"><p>#ChileDespertó es una aplicación informativa sin color político, que busca ayudar a encontrar medios de comunicación alternativa, convocar manifestaciones,  informarnos sobre la situación de nuestro país, como van nuestras demandas y direccionarnos a una pagina donde puedes crear tus propuestas.</p></section>
  
<img src="imagen/arrow left.png" alt="">
</div>`
}
