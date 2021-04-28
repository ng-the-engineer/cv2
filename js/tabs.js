function switchTab(tab, selected, color) {
  var contents = document.getElementsByClassName("tabContent");
  for (var i = 0; i < contents.length; i++) {
    close(contents[i]);
  }

  var buttons = document.getElementsByClassName("tabButton");
  for (var i = 0; i < buttons.length; i++) {
    changeColor(buttons[i], "");
  }

  show(document.getElementById(tab));
  changeColor(selected, color);
}

function changeColor(el, color) {
  el.style.backgroundColor = color;
}

function close(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "block";
}
