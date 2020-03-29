function calc(id) {
var row=id.parentNode.parentNode;
var pocatecnistav=row.cells[1].getElementsByTagName('input')[0].value;
var dodano=row.cells[2].getElementsByTagName('input')[0].value;
var zustatek=row.cells[3].getElementsByTagName('input')[0].value;

if(zustatek==null || zustatek=='') {
 res=parseFloat(pocatecnistav)+parseFloat(dodano);
} else {
 var res=parseFloat(pocatecnistav)+parseFloat(dodano)-parseFloat(zustatek);
}
row.cells[4].getElementsByTagName('input')[0].value=res;

var cena=row.cells[5].getElementsByTagName('input')[0].value;
var vysledek=parseFloat(cena)*parseFloat(res);

row.cells[6].getElementsByTagName('input')[0].value=vysledek;
}

document.addEventListener('DOMContentLoaded', function() {
  var values = JSON.parse(localStorage.getItem('vemsito') || '{}');

  var inputs = document.getElementsByClassName('vemsito');


  for (let i = 0; i < inputs.length; i++) {
    var x = inputs[i];
    x.value = values[i] || '';

    x.onchange = function() {
      values[i] = this.value;
      localStorage.setItem('vemsito', JSON.stringify(values));
    }
  }

});
