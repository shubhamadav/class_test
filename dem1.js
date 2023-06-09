//console.dir(document);

console.log(items);
var items = document.getElementsByClassName("list-group-item");
if (items.length > 0) {
  items[0].textContent = "Hello";
  items[2].style.backgroundColor = 'green';
}



