//var head = document.getElementsById('header-title');
var main = document.getElementById("main-header");
main.style.borderBottom = 'solid 3px #000';
var item = document.getElementsByClassName('list-group-item');
item[2].style.fontWeight= 'bold';
item[2].style.backgroundColor= 'green';
//console.log(document.getElementsByClassName('list-group'));
for (var i=0; i<item.length; i++){
item[i].style.fontWeight="bold";
item[i].style.color="red";
}
var dummy_item = document.getElementsByClassName('Sharpener-Demo');
dummy_item[0].style.fontWeight="bold";
dummy_item[0].style.color="red";

var dummy_item2 = document.getElementsByTagName('li');
dummy_item2[4].style.color="Yellow";