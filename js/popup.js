close = function (element) {
  element.style.display = "none";
};

show = function (element) {
  element.style.display = "block";
};

// ABC Company
const popupABC = document.getElementById("popupABC");
document.getElementById("jobABC").onclick = () => show(popupABC);
document.getElementById("closePopupABC").onclick = () => close(popupABC);

// Job XYZ
xyzHandler = (popup) => {
  show(popup);
  document.getElementById("xyzDefault").click();
};
const popupXYZ = document.getElementById("popupXYZ");
document.getElementById("jobXYZ").onclick = () => xyzHandler(popupXYZ);
document.getElementById("closePopupXYZ").onclick = () => close(popupXYZ);

// DEF
const popupDEF = document.getElementById("popupDEF");
document.getElementById("prjDEF").onclick = () => show(popupDEF);
document.getElementById("closePopupDEF").onclick = () => close(popupDEF);

// IJK
const popupIJK = document.getElementById("popupIJK");
document.getElementById("prjIJK").onclick = () => show(popupIJK);
document.getElementById("closePopupIJK").onclick = () => close(popupIJK);

window.onclick = (event) => {
  switch (event.target) {
    case popupABC:
      close(popupABC);
    case popupIJK:
      close(popupIJK);
    case popupDEF:
      close(popupDEF);
    case popupXYZ:
      close(popupXYZ);
  }
};
