function calc(id) {
var row=id.parentNode.parentNode;
var pocatecnistav=row.cells[1].getElementsByTagName('input')[0].value;
var dodano=row.cells[2].getElementsByTagName('input')[0].value;

var celkem=parseFloat(pocatecnistav)+parseFloat(dodano);
row.cells[3].getElementsByTagName('input')[0].value=celkem;

var zustatek=row.cells[4].getElementsByTagName('input')[0].value;

if(zustatek==null || zustatek=='') {
 res=parseFloat(pocatecnistav)+parseFloat(dodano);
} else {
 var res=parseFloat(pocatecnistav)+parseFloat(dodano)-parseFloat(zustatek);
}
row.cells[5].getElementsByTagName('input')[0].value=res;

var cena=row.cells[6].getElementsByTagName('input')[0].value;
var vysledek=parseFloat(cena)*parseFloat(res);

row.cells[7].getElementsByTagName('input')[0].value=vysledek;



   }
   function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var cell6 = row.insertCell(5);
    cell1.innerHTML = "<input type=\"text\" name=\"nazevpolozky\">";
    cell2.innerHTML = "<input onkeyup=\"calc(this);\" onchange=\"calc(this);\" type=\"number\" name=\"pocatecnistav\">";
	cell3.innerHTML = "<input onkeyup=\"calc(this);\" onchange=\"calc(this);\" type=\"number\" name=\"dodano\">";
	cell4.innerHTML = "<input type=\"number\" name=\"celkem\">";
	cell5.innerHTML = "<input onkeyup=\"calc(this);\" onchange=\"calc(this);\" type=\"number\" name=\"zustatek\">";
	cell6.innerHTML = "<input type=\"number\" name=\"prodej\">";
}
