var lastResFind="";
var copy_page=""; 

function TrimStr(s) {

     s = s.replace( /^\s+/g, '');

  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);
  } else {
    alert("Nu sa gasit nimic");
    return;
  }
  if (textToFind == "") {
    alert("Nu as introdus nimic");
    return;
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Numic nu sa gasit!");
 

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:red'>"+textToFind+"</a>"); 

 }