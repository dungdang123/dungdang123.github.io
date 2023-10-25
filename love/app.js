const yourDate = new Date("2023-10-24T00:00:00"),
music = ['ido', 'noinaycoanh', 'nguoiamphu'];
document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
    updated(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24));
    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
        sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
        updated(Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24));
    }; olock();
    var timer = setInterval(function(){olock()}, 1000);
    document.querySelector("audio").setAttribute("src", `https://dungdang123.github.io/love/${music[Math.floor(Math.random()*music.length)]}.mp3`);
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<div id='mask'></div>");
}, false);

function updated(countdown) {
    let progress;
    if(countdown > 100000) {
        progress = (countdown / 1000000) * 100;
    } else if(countdown > 10000) {
        progress = (countdown / 100000) * 100;
    } else if(countdown > 1000) {
        progress = (countdown / 10000) * 100;
    } else if(countdown > 100) {
        progress = (countdown / 1000) * 100;
    } else {
        progress = countdown;
    }

    var el = document.getElementById('graph'); // get canvas
    var options = {
        percent: progress || 25,
        size: el.getAttribute('data-size') || 220,
        lineWidth: el.getAttribute('data-line') || 10,
        rotate: el.getAttribute('data-rotate') || 0
    }

    var canvas = el.querySelector('canvas');
    var span = el.querySelector('div span');
    span.innerHTML = countdown + ' ngày';

    if (typeof(G_vmlCanvasManager) !== 'undefined') {
        G_vmlCanvasManager.initElement(canvas);
    }

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;
    el.appendChild(span);
    el.appendChild(canvas);
    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
    imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 2;
    var drawCircle = function(color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'round'; // butt, round or square
        ctx.lineWidth = lineWidth
        ctx.stroke();
    };

    drawCircle('#efefef', options.lineWidth, 100 / 100);
    drawCircle('#a96fa1', options.lineWidth, options.percent / 100);
}
