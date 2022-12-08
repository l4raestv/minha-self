var ap = window.webkitSpeechRecognition
var nova = new ap()
var texto = document.getElementById("texto")

function iniciar()
{
    texto.innerHTML = ""
    nova.start()
}

nova.onresult = function(event){
     console.log(event)
     var fala = event.results[0][0].transcript
     texto.innerHTML = fala
     if( fala == "tire minha selfie")
     {
        fala2() 
     }
}

function fala2(){
    var falar = window.speechSynthesis
    var juntar = new SpeechSynthesisUtterance("Tirando sua selfie em 5 segundos")

    falar.speak(juntar)
    Webcam.attach(camera);

    setTimeout(function(){
        self()
        save() 

    }, 5000 )
}
var camera = document.getElementById("camera")


Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

function self(){
    Webcam.snap( function(data_uri) {
    document.getElementById('result').innerHTML = '<img id="self" src="'+data_uri+'"/>';
    } );
}

function save(){
    link = document.getElementById("link")
    foto = document.getElementById("self").src
    link.href = foto 
    link.click()

}