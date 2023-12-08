let speech = new SpeechSynthesisUtterance();

let input = document.querySelector(".write");


document.querySelector("button").addEventListener("click", ()=>{
  speech.text = input.value;
  window.speechSynthesis.speak(speech);
  input.value = "";    //The reason input.innerHTML = ""; doesn't work for a standard input element is that input elements don't have an innerHTML property. The content of an input element is set and retrieved using the value property.
})
