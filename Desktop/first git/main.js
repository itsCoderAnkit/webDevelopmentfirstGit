/* var header =document.querySelector("#main-header");
header.getElementsByClassName.borderBottom="solid 4px #CCC"
var items = document.querySelector(".list-group-item:nth-child(1)")

console.log(items)
items.style.color="green";
var itemList=document.querySelector("#items");
itemList.parentNode.style.backgroundColor="#f4f4f4"

itemList.lastElementChild.textContent="Hello1";
console.log(itemList.lastChild);
itemList.firstElementChild.textContent="Hello2"
console.log(itemList.firstChild)
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling)

console.log(itemList.previousElementSibling)


var newDiv =document.createElement('div')
newDiv.className='hello'
newDiv.id="hello"
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText)
console.log(newDiv);
var container =document.querySelector('header .container')
var h1 =document.querySelector('header h1')
container.insertBefore(newDiv,h1)
let item =document.createElement("li")
item.textContent="Hello"
var newcontainer =document.getElementById("items")
var h1 =newcontainer.firstElementChild
newcontainer.insertBefore(item,h1)




var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
} */

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
  
    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item2').value;
  
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));
  
    // Create del button element
    var deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  
  var filter = document.getElementById('filter');

  filter.addEventListener('keyup', filterItems);

  // Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemName2 = item.childNodes[1].textContent;
      
      if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }