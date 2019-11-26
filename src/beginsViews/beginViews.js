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

    const btnRegistry=document.getElementById("btnRegistry");
   btnRegistry.addEventListener('click', () =>{ 
       register();
   })
   const btnLogin= document.getElementById("btnLogin");
   btnLogin.addEventListener('click', () =>{
       login();
   })
   const btnFacebook= document.getElementById("btnFacebook");
   btnFacebook.addEventListener('click', () =>{

   })
   const btnGoogle= document.getElementById("btnGoogle");
   btnGoogle.addEventListener('click', () => {

   })
}

   const register = () =>{
   const root =document.getElementById("root");
   root.innerHTML =
   `<div class="records">
       <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
     <div class="containerRegistry"><form >
         <div id="modalRegistryEmail">
           <input type="text" name="name" id="name" placeholder="Nombre">
           <input type="text" name="email" id="email" placeholder="Email">
           <input type="password" name="password" id="password" placeholder="Clave">
           <button id="btnRegistryOk">Regístrar</button></div>
       </form>
   </div>
   <img src="imagen/arrow left.png" alt="">
</div>  
   `

   const btnRegistryOk= document.getElementById("btnRegistryOk");
   btnRegistryOk.addEventListener('click', ()=>{
       createAccount();
   })
}