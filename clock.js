let date= new Date();
let time = document.querySelector("#time");

let dayName = date.toLocaleDateString("en-IN", { weekday: "long" });
let monthName = date.toLocaleDateString("en-IN", { month: "long" });
let dayNumber = date.getDate(); 
let year = date.getFullYear();

let h = document.querySelector("h2");
h.innerText = dayName + ", " + monthName +" "+  dayNumber +", "+ year;

function display() {  
    let newdate = new Date();
    let hour = newdate.getHours();
    let min = newdate.getMinutes();
    let sec = newdate.getSeconds();
 
    let now = `${hour}:${min}:${sec}`;
    time.innerText = now;
}
setInterval(display, 1000);
