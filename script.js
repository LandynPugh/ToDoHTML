var i = 0;
function entered_Text(keyPress) {
  if (keyPress.keyCode == 13) {
    console.log("pressed!");
    var enteredBox = document.getElementById("todoInput");
    var entered = enteredBox.value;
    if (entered == "") {
      return;
    }
    var biggerCheems = document.getElementById("todoItems");
    enteredBox.value = ""; //Clear textbox
    var bigCheems = document.createElement("div");
    console.log('<input type="checkbox" class="checkItem" id="item' + i + '" onClick="checked_Item(' + i + ')"><tb><label for="item' + i + '" id="itemLabel' + i + '" class="checkLabel">' + entered + '</label><br>');
    bigCheems.innerHTML = '<input type="checkbox" class="checkItem" id="item' + i + '" onClick="checked_Item(' + i + ')"><tb><label for="item' + i + '" id="itemLabel' + i + '" class="checkLabel">' + entered + '</label><br>';
    i++;
    biggerCheems.appendChild(bigCheems);


  }
}

function checked_Item(gout) {
  var checkedBox = document.getElementById("item" + gout);
  var checkedBoxLabel = document.getElementById("itemLabel" + gout);
  checkedBoxLabel.style.textDecoration = "line-through";
  checkedBox.disabled = true;
}
