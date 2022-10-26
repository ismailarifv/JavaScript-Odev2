let rememberMe = document.querySelector("#task");
let buttonBas = document.querySelector("#liveToastBtn");
let adList = document.querySelector("#list");
let counter = 0

let keys = Object.keys(localStorage)

keys.forEach(key => renderElements(localStorage.getItem(key)))
  

function renderElements(itemName){
  let eleman = document.createElement("li");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    
    span.onclick = function(){
      var div = this.parentElement;
    div.style.display = "none";
    }
    span.appendChild(txt);
    eleman.textContent = itemName
    eleman.appendChild(span);
    adList.appendChild(eleman);
}

buttonBas.onclick = function(){
    if(rememberMe.value == ''){
      $('#liveToastError').toast('show')
     
      return
    }
    let eleman = document.createElement("li");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    
    span.onclick = function(){
      var div = this.parentElement;
    div.style.display = "none";
    }
    span.appendChild(txt);
    eleman.textContent = rememberMe.value
    eleman.appendChild(span);
    adList.appendChild(eleman);
    counter++
    $('#liveToast').toast('show')
    localStorage.setItem(counter, rememberMe.value)
   }

var myNodelist = document.querySelectorAll("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  
    
}
close
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function displayNON() {
    var div = this.parentElement;
    div.style.display = "none";
    
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    
  }
  document.getElementById("task").value = "";
  if (typeof(Storage) != "undefined") {
    // DEPOLA
    localStorage.setItem("li", "#task");
    // VERIYE ERIS
    document.getElementById("task").innerHTML = localStorage.getItem("li");
} else {
    document.getElementById("task").innerHTML = "TARAYICINIZDA WEB STORAGE OZELLIGI YOK";
}


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}


