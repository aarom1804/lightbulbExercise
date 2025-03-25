const lightbulb = document.getElementById("lb");
const button = document.getElementById("bt");
let statusBt = false;
const lbOff = "img/off.jpg";
const btnOff = "img/boff.jpg";
const lbOn = "img/on.jpg";
const btnOn = "img/bon.jpg";

function onOffBtn(){
    statusBt = !statusBt;
    if(statusBt){
        lightbulb.src = lbOn;
        button.src = btnOn;
    }else{
        lightbulb.src = lbOff;
        button.src = btnOff;
    }
}
button.addEventListener("click", onOffBtn);