function showSnackbar() {
  var bar = document.getElementById("snackbar");
  bar.className = "show";
  setTimeout(function() { 
    bar.className = x.className.replace("show", "");
  }, 3000);
}