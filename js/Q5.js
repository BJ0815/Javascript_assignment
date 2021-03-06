"use strict";

function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var input = document.getElementById("input").value;
  if (input == "") {
    return alert("請輸入資料，不能空白！");
  }

  span.innerHTML = input;
  todo.appendChild(span);
  span.classList.add("list-span")
  var status = document.getElementById("firstRadio").checked;
  if (status == true){
    span.style.color = "red";  
  }else {
    span.style.color = "blue";
  }
  todo.classList.add("todo");

  //-----------replace button------------
  var replaceButton = document.createElement("button");
  replaceButton.onclick = function() {
    var input = document.getElementById("input").value;
    if(input == "") {
      return alert("請輸入資料，不能空白！");
    }

    this.parentNode.firstChild.innerHTML = input;
    document.getElementById("input").value = "";
  }
  replaceButton.textContent = "R";
  replaceButton.classList.add("replace-button");
  todo.appendChild(replaceButton);

  //------------remove button------------
  var removeButton = document.createElement("button");
  removeButton.onclick = function() {
    var answer = confirm("確定要刪除嗎？");
    if (answer == true) {
      this.parentNode.removeChild(this.parentNode.childNodes[1]);
      this.parentNode.removeChild(this);
      span.style.color = "#767676";
    }
  }
  removeButton.textContent = "X";
  removeButton.classList.add("remove-button");
  todo.appendChild(removeButton);

  //--------------todolist---------------
  document.getElementById("todolist").appendChild(todo);
  document.getElementById("input").value = "";
}