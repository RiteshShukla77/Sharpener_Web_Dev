// //var head = document.getElementsById('header-title');
// var main = document.getElementById("main-header");
// main.style.borderBottom = 'solid 3px #000';
// var item = document.getElementsByClassName('list-group-item');
// item[2].style.fontWeight= 'bold';
// item[2].style.backgroundColor= 'green';
// //console.log(document.getElementsByClassName('list-group'));
// for (var i=0; i<item.length; i++){
// item[i].style.fontWeight="bold";
// item[i].style.color="red";
// var dummy_item = document.getElementsByClassName('Sharpener-Demo');
// dummy_item[0].style.fontWeight="bold";
// dummy_item[0].style.color="red";

//var dummy_item2 = document.getElementsByTagName('li');
//dummy_item2[4].style.color="Yellow";

// var item = document.querySelector(".list-group-item:nth-child(2)");
// item.style.backgroundColor= "green";

// var item = document.querySelectorAll(".list-group-item");
// item[1].style.backgroundColor= "green";
// item[2].style.color= "white";
// //item[2].style.backgroundColor= "green";
var item = document.querySelector("#items");
console.log(item.firstChild);
console.log(item.firstElementChild);
console.log(item.lastChild);
console.log(item.lastElementChild);
console.log(item.parentElement);
console.log(item.nextSibling);
console.log(item.nextElementSibling);//added span to test
console.log(item.previousSibling);
console.log(item.previousElementSibling);
var newdev=document.createElement('div');
newdev.setAttribute('class','newdev');
newdev.id="newdev";
var tex=document.createTextNode("HelloWorld");
newdev.appendChild(tex);
console.log(newdev);
var head=document.querySelector(".container");

head.insertBefore(newdev,document.querySelector("#header-title"));

var items = document.querySelector("#items");
 var newli = document.createElement("li");
 newli.className="list-group-item";
 var newtext = document.createTextNode("Item 0");
 newli.appendChild(newtext);
 console.log(newli);
 var li1 = document.querySelector(".list-group-item:nth-child(1)");
 console.log(li1);
 items.insertBefore(newli,li1);
