//calling this function every seconds to get the right time. otherwise once the page is open . the same time will display untill the site is closed.

function currentTime(){
    //let is a data type like const.
let date = new Date(); //by default gives current day month year hours minutes seconds and milliseconds.

let hours = date.getHours(); //accessing hours, minutes and seconds.
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hours > 12){
    $(".range").html("PM");
}
else{
    $(".range").html("AM");
}

if(hours > 12){
    hours = hours - 12;
}

hours = hours < 10 ? "0" + hours : hours; // to convert 3 to 03. double digit.
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

$("#hours").text(hours);
$("#minutes").text(minutes);
$("#seconds").text(seconds);


//440 is circumference.
$("#progress_hours").css("stroke-dashoffset", 440  - ((440 * hours) / 12 ));
console.log($('#progress_hours').css('stroke-dashoffset'));
$("#progress_minutes").css("stroke-dashoffset", 440 - ((440 * minutes ) / 60));
$("#progress_seconds").css("stroke-dashoffset",440 - ((440 * seconds) / 60 ));

}

setInterval(currentTime , 1000); //setInterval calls the function again and again after every given time in millisecond.
