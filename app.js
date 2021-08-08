var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

 function getTranslationURL(input) {
     return serverURL + "?" + "text=" + input
 }
 function errorHandler(error){
     console.log("error occured", error);
     alert("Something wrong with server ! try again  after sometime")
 }
function clickHandler() {
    //taking input 
    var inputText = txtInput.value;
  // calling server for processing
  fetch (getTranslationURL(inputText))
  .then (response => response.json())
  .then (json=> {
      var TranslatedText = json.contents.translated ;
      outputDiv.innerText =  translatedText;
  })
  .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);
