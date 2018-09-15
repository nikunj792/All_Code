var div = document.createElement('div');
    var img = document.createElement('IMG');
    div.setAttribute('id','mic###');
    img.setAttribute('id','img');
    img.setAttribute('onclick',"startDictation()");
    img.setAttribute('src',"microphone.png");
    img.setAttribute('width','30px');
    img.setAttribute('height','30px');
    document.body.appendChild(div);
    document.body.appendChild(img);
    var val = "";
    var myArray = document.getElementsByTagName('input');
    for (i = 0; i < myArray.length; i++) {
            val += i +" id is " +  myArray[i].id +"</br>";
    };
    document.getElementById('mic###').innerHTML = val;
   
    var recognition = new webkitSpeechRecognition();   
    var label;
    function startDictation() {                
      if (window.hasOwnProperty('webkitSpeechRecognition')) {
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function (e) {
          label = e.results[0][0].transcript;
          if(document.getElementById(label) !== null){
            data();
            recognition.stop();
          }
          else{
            alert("I didn't hear you , try again");
            recognition.stop();            
          }          
        }
        recognition.onerror = function (e) {
          recognition.stop();
        }
      }
    }

    function data() {
      var recog = new webkitSpeechRecognition();
      recog.start();
      recog.onresult = function (e) {
        document.getElementById(label).value = e.results[0][0].transcript;
        recognition.stop();
      }
    }