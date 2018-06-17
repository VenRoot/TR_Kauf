function addtostring(character)
{
  document.getElementById("string").value+=character //Holt das Element vom String und fügt es dem Char hinzu
  console.log(character)
}
function removefromstring()
{
  document.getElementById("string").value='';   //Entfernt den String mit value=''
  document.getElementById("xEingabe").value=''; //Löscht die Eingabe von X
  document.getElementById("yEingabe").value=''; //Löscht die Eingabe von Y
}
