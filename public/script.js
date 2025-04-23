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

function setBackgroundBasedOnTime() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const body = document.querySelector('.profile .banner');
    body.classList.remove('morning', 'afternoon', 'evening');

    if (currentHour >= 6 && currentHour < 12) {
        body.classList.add('morning');
    } else if (currentHour >= 12 && currentHour < 18) {
        body.classList.add('afternoon');
    } else {
        body.classList.add('evening');
    }
}

setBackgroundBasedOnTime();
setInterval(setBackgroundBasedOnTime, 60 * 60 * 1000);

// (function() { // Chặn debugger
//     (function(f) {
//         (function a() {
//             try {
//                 function b(i) {
//                     if (('' + (i / i)).length !== 1 || i % 20 === 0) {
//                         (function() {}
//                         ).constructor('debugger')();
//                     } else {
//                         debugger ;
//                     }
//                     b(++i);
//                 }
//                 b(0);
//             } catch (e) {
//                 f.setTimeout(a, 5000)
//             }
//         })()
//     })(document.body.appendChild(document.createElement('frame')).contentWindow);
// })

// (function() {
//     let devtoolsOpen = false;
//     const threshold = 160;

//     setInterval(() => {
//         const width = window.innerWidth;
//         const height = window.innerHeight;

//         if (width < threshold || height < threshold) {
//             devtoolsOpen = true;
//             alert('Please close the developer tools!');
//         } else if (devtoolsOpen) {
//             alert('DevTools is now closed!');
//             devtoolsOpen = false;
//         }
//     }, 1000);

//     Object.defineProperty(window, 'debugger', {
//         set: function() {
//             throw new Error('Debugger is disabled');
//         }
//     });

//     document.addEventListener('keydown', function(e) {
//         if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
//             e.preventDefault();
//             alert('DevTools is disabled!');
//         }
//     });

//     if (typeof console._commandLineAPI === 'undefined') {
//         console._commandLineAPI = console.log;
//         console.log = function() {
//             if (arguments.length === 0) return;
//             alert('Console is disabled!');
//         };
//     }

//     let devtools = /./;
//     devtools.toString = function() {
//         this.opened = true;
//     };

//     setInterval(function() {
//         if (devtools.opened) {
//             alert('Please close the developer tools!');
//             devtools.opened = false;
//         }
//     }, 1000);
// })();