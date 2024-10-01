document.getElementById("btnSoftware").addEventListener('click', () => open("https://misaelbm.github.io/decaimento_radioativo/software/software.html"));
document.getElementById("btnQuestMode").addEventListener('click', () => open("https://misaelbm.github.io/decaimento_radioativo/questMode/questMode.html"));
document.getElementById("btnConfig").addEventListener('click', () => document.getElementById("configContent").style.display = "flex");
document.getElementById("exitConfig").addEventListener('click', () => document.getElementById("configContent").style.display = "none");
document.getElementById("effectsSounds").checked = localStorage.getItem("effectsSoundsRes") == undefined ? true : JSON.parse(localStorage.getItem("effectsSoundsRes"));
document.getElementById("effectsSoundsButton").addEventListener('click', () => localStorage.setItem("effectsSoundsRes", `${!document.getElementById("effectsSounds").checked}`));
document.getElementById("colors").checked = localStorage.getItem("elementsColor") == undefined ? false : JSON.parse(localStorage.getItem("elementsColor"));
document.getElementById("colorsButton").addEventListener('click', () => localStorage.setItem("elementsColor", `${!document.getElementById("colors").checked}`));