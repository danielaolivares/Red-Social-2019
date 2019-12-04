import {writePost} from "../module/post.js"
import { read } from "../module/post.js";

export const manifestationsPost = ()=>{
    read();
    const root = document.getElementById("root");
    root.innerHTML=
    `<div class="manifestationPage">
    <header class="countainerLogo"><img src="imagen/logo.png" class="logo"></header>
    <main><div id="manifestations">Manifestaciones</div><div id="information">Información</div></main>
    <section class="countainerText">
        <input type="date" name="date" id="date"  placeholder="Fecha" required>
        <input type="time" name="time" id="time" placeholder="Hora" required>
        <textarea name="commentary" id="commentary" cols="40" rows="10"required placeholder="Ubicación e información extra."></textarea>
        <button id="send">Enviar</button>
    </section> 
    <article id="allCommentary"></article> 
<img src="imagen/arrow left.png" alt="">
</div>`
const send = document.getElementById("send");
send.addEventListener('click', ()=>{
    //console.log(" estamos creando")
    const date= document.getElementById("date").value;
    const time= document.getElementById("time").value;
    const commentary= document.getElementById("commentary").value;
    //console.log(date, time, commentary);
    writePost(date, time, commentary);
})
}
