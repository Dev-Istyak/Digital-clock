function updateclock(){
    const now=new Date();
    let hours=now.getHours()
    const meridium =hours>=12? "PM":"AM";
    hours=hours % 12||12;
    hours=hours.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2, 0);
    const seconds=now.getSeconds().toString().padStart(2, 0);
    const timestring=`${hours}:${minutes}:${seconds}:${meridium}`;
    document.getElementById("clock-element").textContent=timestring;


}
updateclock();
setInterval(updateclock,1000);