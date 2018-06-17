function Berechne1(){
  addtostring('1')
}
function Berechne2(){
  addtostring('2')
}
function Berechne3(){
  addtostring('3')
}
function Berechne4(){
  addtostring('4')
}
function Berechne5(){
  addtostring('5')
}
function Berechne6(){
  addtostring('6')
}
function Berechne7(){
  addtostring('7')
}
function Berechne8(){
  addtostring('8')
}
function Berechne9(){
  addtostring('9')
}
function Berechne0(){
  addtostring('0')
}
function BerechnePlus(){
  addtostring('+')
}
function BerechneMinus(){
  addtostring('-')
}
function BerechneMal(){
  addtostring('*')
}
function BerechneGeteilt(){
  addtostring('/')
}
function BerechneQuadrat(){
  addtostring('^2')
}
function Delete() {

}
function BerechneWurzel() {

  result.value = Math.sqrt(string.value);
}
function BerechneDritteWurzel() {
  result.value = Math.sqrt(string.value);
}
function BerechneCos(cosinus){
 //x = Math.cos(Cosinus);
 //document.getElementById('string').innerHTML = Math.cos('string');
 // getElementById('result').value = calculate(getElementById('string').value)
 result.value = Math.cos(string.value);
 console.log("Cos");
}
function BerechneSin(){
  result.value = Math.sin(string.value);
  console.log("Sin");
}
function BerechneTan(){
/*let varInput = document.getElementById('string').innerHTML;
Math.tan(+varInput);
console.log(varInput)*/
result.value = Math.tan(string.value);
console.log("Tan");
}

function Löschen() {
  string.value = string.value.substring(0, string.value.length - 1);
  console.log("C");
}
function BerechneXhochY() {
  result.value = Math.pow(xEingabe.value, yEingabe.value);
  console.log("X^Y");
  console.log(xEingabe.value); console.log(yEingabe.value);
}
function BerechnePi() {
  var txt;
    if (confirm("Mit wieviel Nachkommastellen? 100/10 Millionen")) {
        string.value = "Pi (nur die ersten 100 Stellen lel by Ven)"
        result.value = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"
    } else {
        window.location.href= "Pi.html";
    }
    document.getElementById("demo").innerHTML = txt;
    //result.value = Math.PI;
    //result.value = ""
}

function BerechneEhochX() {
  result.value = Math.exp(string.value);
}
function BerechneLog() {
  result.value = Math.log(string.value);
}
function BerechneWurzelN() {
  result.value = Math.pow(yEingabe.value, 1/xEingabe.value);
 //Math.pow(+xEingabe.value, +yEingabe.value/+global)
  //result.value = Math.pow(xEingabe.value, yEingabe.value/global);
}

function BerechneDezHex() {

  result.value = string.value.toString(16);
}

function BerechneHexDez() {


}

function Berechne10HochX() {
  result.value = Math.pow(10, string.value)

}
