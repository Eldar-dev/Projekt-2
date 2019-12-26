document.getElementById("burger").onclick = function(){
openCloseMenu()
}

function openCloseMenu(){
    document.getElementById("menu").classList.toggle("open");
}