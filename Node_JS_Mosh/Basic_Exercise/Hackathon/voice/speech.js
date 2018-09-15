
    var div = document.createElement('div');
    var img = document.createElement('IMG');
    div.setAttribute('id','mic###');
    img.setAttribute('id','img');
    img.setAttribute('onclick',"voiceRecognise()");
    img.setAttribute('src',"./icons/microphone.png");
    img.setAttribute('width','30px');
    img.setAttribute('height','30px');
    document.body.appendChild(div);
    document.body.appendChild(img);
    var val = "";
    var myInputIdArray = document.getElementsByTagName('input');
    for (i = 0; i < myInputIdArray.length; i++) {
            val += i +" id is " +  myInputIdArray[i].id +"</br>";
    };
    document.getElementById('mic###').innerHTML = val;

    var speechScript = `var recognition = new webkitSpeechRecognition();   
    var label;
    function voiceRecognise() {   
      if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var myInputIdArray = document.getElementsByTagName('input');
        var htmlPageIdArray =[];
        var myInputIdArray = document.getElementsByTagName('input');
        for (i = 0; i < myInputIdArray.length; i++) {
                htmlPageIdArray.push({
                  key:i,
                  value:myInputIdArray[i].id
                });
        };
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function (e) {
          label = e.results[0][0].transcript;
          for(var i=0; i<htmlPageIdArray.length;i++){
            if(htmlPageIdArray[i].key ==label)
            label=htmlPageIdArray[i].value;
          }
          if(document.getElementById(label) !== null){
            document.getElementById(label).focus();
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
    }`;

    const existingScript = document.getElementById('speech');  
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'speech';
      var inlineScript = document.createTextNode(speechScript);
      script.appendChild(inlineScript); 
      document.body.appendChild(script);  
      script.onload = () => {
        if (callback) callback();
      };
    }