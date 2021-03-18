var SpeechRecognition=window.webkitSpeechRecognition;
//webkitSpeechRecognition is a web speech API developed by Google developers this a AI model for the speech recognition

var recognition=new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML="";

    recognition.start();
    // start() function is a in build function of WEB SPEECH API
}
recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    //Speak();
    if(content == "take my selfie"){
        console.log("take my selfie --- ")
        Speak();
   }
   else{
        WrongInput();

        Webcam.reset(camera);
   }
}
function WrongInput(){
    synth=window.speechSynthesis; 

    var utterThis= new SpeechSynthesisUtterance("say take my selfie");

    synth.speak(utterThis);
}

 function Speak(){
     synth=window.speechSynthesis;

     speak_data="taking your selfie in 5 seconds";

     var utterThis= new SpeechSynthesisUtterance(speak_data);
     // SpeechSynthesisUtterance is the function of API that will convert text to speech

     synth.speak(utterThis);
     Webcam.attach(camera);

     setTimeout(function(){
         take_snapshot();
         save();
     },5000);
 }
 camera=document.getElementById("camera");

 Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
  });

  function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="selfie_image" src="'+ data_uri+'">';
      });
  }

  function save(){

    link= document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href= image;
    link.click();
  }