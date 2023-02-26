// Copyright belongs to Dang Van Dung. The copies need to be notified in advance. Thank you.
let d = new Date();
const birthdays = 2004;
const years = d.getFullYear();
let elementYears = document.querySelector(".birthdays");
elementYears.innerHTML = years - birthdays;
let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();
let dayofweek = d.getDay();
const dayname = ['CN','T2','T3','T4','T5','T6','T7'];
let datestring = document.querySelector(".dateString");
datestring.innerHTML = dayname[dayofweek] + ', ngày '+ timeLert(day) + '/' + timeLert(month)+ '/'+ year;
console.log(dayname[dayofweek] + ' ngày '+ timeLert(day) + '/' + timeLert(month)+ '/'+ year);
setTimeout(function() {
    $(".reposnt").fadeOut(1700);
}, 2000)

function timeLert(i) {
    let string = "";
    if(i < 10) {
        string += "0"+i;
    } else {
        string += i;
    }
    return string;
}
