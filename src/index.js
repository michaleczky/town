import "./styles.css";

document.getElementById("app").innerHTML = `

`;

var rajz = document.getElementById("rajz");
var ct = rajz.getContext("2d");
ct.beginPath();
ct.rect(100, 200, 200, 200);
ct.moveTo(100, 200);
ct.lineTo(200, 60);
ct.lineTo(300, 200);
ct.stroke();
