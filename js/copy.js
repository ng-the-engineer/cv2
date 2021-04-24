function copyToClipboard() {  
  const copyText = document.getElementById("cvUrl");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  if (document.execCommand("copy")) {
    showSnackbar();
  }
}