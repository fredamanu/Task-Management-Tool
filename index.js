

var taskList = document.querySelectorAll('li');

for (var i = 0; i < taskList.length; i++) {
  var span = document.createElement("span");
  var closeSymbol = document.createTextNode("\u00D7");
  span.appendChild(closeSymbol);
  span.className = "close";
  taskList[i].appendChild(span);

}

var close = document.querySelectorAll('.close');

for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function(){
  this.parentElement.style.display = "none";

  });
}


for (var i = 0; i < taskList.length; i++) {
  taskList[i].addEventListener('click', function(){
    this.classList.toggle('checked');
  }, false);
}


var addbtn = document.querySelector('.addbtn');
addbtn.addEventListener('click', function()

{

 var taskList = document.createElement('li');
 var inputValue = document.querySelector('input').value;
 var txt = document.createTextNode(inputValue);
  taskList.appendChild(txt);

if (inputValue.length === 0) {
alert("You must enter a task");
}else{
  var taskListContainer = document.querySelector('ul');
   taskListContainer.appendChild(taskList);
}

  document.querySelector('input').value = "";


     taskList.addEventListener('click', function(){
       this.classList.toggle('checked');
     }, false);


  var span = document.createElement("span");
  var closeSymbol = document.createTextNode("\u00D7");
  span.appendChild(closeSymbol);
  span.className = "close";
  taskList.appendChild(span);

  var close = document.querySelectorAll('.close');
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(){
    this.parentElement.style.display = "none";});}

});



  var delbtn = document.querySelector('.delbtn');
  delbtn.addEventListener('click', function(){

  var taskListContainer = document.querySelector('ul');
  var taskList = document.querySelectorAll('li');
  for (var i = 0; i < taskList.length; i++) {
  taskListContainer.removeChild(taskList[i]);
  }

})
