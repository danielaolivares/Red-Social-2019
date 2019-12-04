
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
    var database = firebase.firestore();
    database.collection("manifestaciones").orderBy("date").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById("allCommentary").innerHTML +=` Fecha : ${doc.data().date}<br>  Hora : ${doc.data().time}<br>  Ubicación e información : ${doc.data().commentary}<br><button id="delete">Borrar</button><button id="edit">Editar</button><br>`
            // console.log(`${doc.id} => ${doc.data().date}${doc.data().time}${doc.data().commentary}`);
            
          const removed = document.getElementById("delete");
          removed.addEventListener('click', ()=>{
              deleted(`${doc.id}`);
          });
          const edit = document.getElementById("edit");
          edit.addEventListener('click', ()=>{
            editing();
          });        
        });
    });
}

//borrar datos
 export const deleted =(id)=>{
    var database = firebase.firestore();
    database.collection("manifestaciones").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
 }