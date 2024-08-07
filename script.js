document.getElementById("btnSoftware").addEventListener('click', () => open("https://misaelbm.github.io/decaimento_radioativo/software.html"));
document.getElementById("btnConfig").addEventListener('click', () => document.getElementById("configContent").style.display = "flex");
document.getElementById("exitConfig").addEventListener('click', () => document.getElementById("configContent").style.display = "none");
document.getElementById("effectsSounds").checked = localStorage.getItem("effectsSoundsRes") == undefined ? true : JSON.parse(localStorage.getItem("effectsSoundsRes"));
document.getElementById("effectsSoundsButton").addEventListener('click', () => localStorage.setItem("effectsSoundsRes", `${!document.getElementById("effectsSounds").checked}`));
document.getElementById("questMode").checked = localStorage.getItem("questModeRes") == undefined ? false : JSON.parse(localStorage.getItem("questModeRes"));
document.getElementById("questModeButton").addEventListener('click', () => localStorage.setItem("questModeRes", `${!document.getElementById("questMode").checked}`));