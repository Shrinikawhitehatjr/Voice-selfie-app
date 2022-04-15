var  SpeechRecognization = window.webitspeechrecognization;

var  recognization = new SpeechRecognization();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognization.start();
}
   
    recognization.onresult = function(event) {

        console.log(event);

        var Content = event.results[0][0].transcript;
        console.log(Content);
            speak();

        document.getElementById("textbox").innerHTML = Content;
        console.log(Content);
        if(Content =="take my selfie")
        {
            console.log("taking selfie --- ");
            speak();
        }
    }
    function speak(){
      var synth = window.speechSynthesis;

      speak_data = document.getElementById("textbox").value;
      speak_data = "Taking your selfie in 5 seconds...";

      var utter_this = new SpeechSynthesisUtterance(speak_data);

      synth.speak("utterThis");
      Webacm.attach(camera);

      setTimeout(function()
      {
          take_snapshot();
      }, 5000);
    }

    Webcam.set({
        width:360,
        height:250,
        Image_format : 'png' , 
        png_quality:90
    });
    camera = document.getElementById("camera");

    function take_snapshot()
    {
        Webcam.snap(function(data_uri)  {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
        });
    }