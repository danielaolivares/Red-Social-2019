var express = require ('express');
var app= express ();
const port=5250;
app.use(express.static(__dirname + '/src'));

app.get ('/', (resquest,response)=>{
    response, sendFile(__dirname + '/index.html');
});
app.listen(port,()=>{
    console.log("servido ok")
});