function discoLights(){
document.getElementById("discoLight").style.backgroundColor= rndmLights();
}

function rndmLights(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}