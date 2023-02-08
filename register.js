const form = document.forms[0];
let text = "";
for (let i = 0; i < form.length; i++) {
  text += form.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;