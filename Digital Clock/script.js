let HRS = document.getElementById('HRS');  
let MIN = document.getElementById('MIN');  
let SEC = document.getElementById('SEC');  

function updateClock() {  
    let now = new Date();  
    let hours = String(now.getHours()).padStart(2, '0');  
    let minutes = String(now.getMinutes()).padStart(2, '0');  
    let seconds = String(now.getSeconds()).padStart(2, '0');  

    HRS.innerHTML = hours;  
    MIN.innerHTML = minutes;  
    SEC.innerHTML = seconds;  
}  

setInterval(updateClock, 1000);  
updateClock(); // Initial call to display clock immediately  