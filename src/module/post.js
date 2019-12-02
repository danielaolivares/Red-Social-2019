
// Escribir post
export const writePost =(date, time, commentary)=>{
    //console.log("post")
    var database = firebase.firestore();
    database.collection("manifestaciones").add({
        date, time, commentary
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById("date").value='';
        document.getElementById("time").value='';
        document.getElementById("commentary").value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Leer datos
export const read = ()=>{
    const root1= document.getElementById("root1");
    var database = firebase.firestore();
    database.collection("manifestaciones").get().then((querySnapshot) => {
        root1.innerHTML='';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().date}${doc.data().time}${doc.data().commentary}`);
        root1.innerHTML+=`<article id="allPost"> Fecha: ${doc.data().date}  Hora : ${doc.data().time}  Ubicación e información :${doc.data().commentary} </article>`
        });
    });
}
