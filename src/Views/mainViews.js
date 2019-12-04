import {manifestationsPost} from "./postViews.js"
//import {read} from "../module/post.js"

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
const manifestations= document.getElementById("manifestations");
manifestations.addEventListener('click', ()=>{
    //console.log("funciona el click")
    manifestationsPost();
    
})
const information = document.getElementById("information");
information.addEventListener('click',()=>{
    //console.log("click information")
    informationPost();
})
}
