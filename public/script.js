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

let o = 0;
let a = (n, t) => Math.floor(Math.random() * (t - n + 1)) + n,
s = n => {
    n.style.setProperty("--star-left", `${a(-10,100)}%`), n.style.setProperty("--star-top", `${a(-40,80)}%`), n.style.animation = "none", n.offsetHeight, n.style.animation = ""
};
for (let r of document.getElementsByClassName("magic-star")) setTimeout(() => {
    s(r), setInterval(() => s(r), 1e3)
}, o++ * (1e3 / 3));
console.log("%c ADMIN %c dvd2k4.it", "color:#fff;background:linear-gradient(90deg,#448bff,#44e9ff);padding:5px 0;", "color:#000;background:linear-gradient(90deg,#44e9ff,#ffffff);padding:5px 10px 5px 0px;");
class p {
    constructor(n) {
        this.element = $(n), this.TimeNows(), setInterval(() => this.TimeNows(), 1e3)
    }
    TimeNows() {
        let n = new Date,
            t = n.getHours().toString().padStart(2, "0"),
            e = n.getMinutes().toString().padStart(2, "0"),
            i = n.getSeconds().toString().padStart(2, "0");
        this.element.text(`${t}:${e}:${i}`)
    }
};
new p("#real-time");


const quotes = [
    "Gọi em là công chúa vì hoàng tử đang đứng chờ em nè!",
    "Chưa được sự cho phép mà đã tự ý thích em, anh xin lỗi nhé công chúa!",
    "Em nhìn rất giống người họ hàng của anh, đó chính là con dâu của mẹ anh!",
    "Trái Đất quay quanh Mặt Trời, còn em thì quay mãi trong tâm trí anh!",
    "Vector chỉ có một chiều, anh dân chuyên toán chỉ yêu một người.",
    "Anh béo thế này là bởi vì trong lòng anh có em nữa.",
    "Nghe đây! Em đã bị bắt vì tội quá xinh đẹp.",
    "Anh chỉ muốn bên cạnh em hai lần, đó là bây giờ và mãi mãi.",
    "Bao nhiêu cân thính cho vừa, bao nhiêu cân bả mới lừa được em?",
    "Vũ trụ của người ta là màu đen huyền bí, còn vũ trụ của anh bé tí, thu nhỏ lại là em.",
    "Anh rất yêu thành phố này, không phải vì nó có gì, mà vì nó có em.",
    "Anh bận với tất cả mọi điều, nhưng vẫn luôn rảnh để nhớ đến em.",
    "Cành cây còn có lá. Chú cá vẫn đang bơi, sao em cứ mải chơi. Chẳng chịu yêu anh thế!",
    "Em nhà ở đâu thế? Cứ tới lui trong tim anh không biết đường về nhà à?",
    "Cuộc đời anh vốn là một đường thẳng, chỉ vì gặp em mà rẽ ngang.",
    "Với thế giới em chỉ là một người, nhưng với anh, em là cả thế giới.",
    "Em có thể đừng cười nữa được không, da anh đen hết rồi.",
    "Anh đây chẳng thích nhiều lời, nhìn em là biết cả đời của anh.",
    "Cảm lạnh có thể do gió, nhưng, cảm nắng thì chắc chắn do em.",
    "Trứng rán cần mỡ, bắp cần bơ, yêu không cần cớ, cần em cơ!",
    "Cafe đắng thêm đường sẽ ngọt, còn cuộc đời anh thêm em sẽ hạnh phúc.",
    "Giữa cuộc đời hàng ngàn cám dỗ, nhưng, anh vẫn chỉ cần bến đỗ là em.",
    "Có người rủ anh đi ăn tối, nhưng anh từ chối vì thực đơn không có em.",
    "Em có biết vì sao đầu tuần lại bắt đầu bằng thứ hai không, bởi vì em là thứ nhất!",
    "Oxy là nguồn sống của nhân loại, còn em chính là nguồn sống của anh.",
    "Em bị cận thị à? Nếu không tại sao không nhìn thấy anh thích em chứ?",
    "Hôm qua anh gặp ác mộng vì trong giấc mộng đó không có em.",
    "Uống nhầm một ánh mắt, cơn say theo cả đời, thương nhầm một nụ cười, cả một đời phiêu lãng.",
    "Dạo này em có thấy mỏi chân không, sao cứ đi mãi trong đầu anh thế?",
    "Hình như em thích trà sữa lắm phải không, anh cũng thích em như thế đấy.",
    "Nếu em là nước mắt thì anh sẽ không bao giờ khóc để lạc mất em đâu.",
    "Đôi mắt em còn xanh hơn cả Đại Tây Dương và anh thì bị lạc trên biển cả mất rồi.",
    "Nếu nụ hôn là những bông tuyết thì anh sẽ gửi đến em một cơn bão tuyết",
    "Phải chăng em là một ảo thuật gia, bởi mỗi khi anh nhìn em là mọi thứ xung quanh đều biến mất.",
    "Anh có thể chụp ảnh em được không, để chứng minh với lũ bạn rằng thiên thần là có thật.",
    "Anh có thể đi theo em được không, bởi anh được bố mẹ dạy rằng phải theo đuổi giấc mơ của mình.",
    "Nếu khi anh nghĩ đến em mà có một ngôi sao biến mất, vậy chắc cả bầu trời này không còn sao."
];

function showRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[index];
}

window.onload = function() {
    showRandomQuote();
    setInterval(showRandomQuote, 15000);
}


(function() {
    (function(f) {
        (function a() {
            try {
                function b(i) {
                    if (('' + (i / i)).length !== 1 || i % 20 === 0) {
                        (function() {}).constructor('debugger')();
                    } else {
                        debugger ;
                    }
                    b(++i);
                }
                b(0);
            } catch (e) {
                f.setTimeout(a, 100)
            }
        })()
    })(document.body.appendChild(document.createElement('frame')).contentWindow);
})

(function() {
    let devtoolsOpen = false;
    const threshold = 160;

    setInterval(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (width < threshold || height < threshold) {
            devtoolsOpen = true;
        } else if (devtoolsOpen) {
            devtoolsOpen = false;
        }
    }, 1000);

    Object.defineProperty(window, 'debugger', {
        set: function() {
            throw new Error('Debugger is disabled');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J'))) {
            e.preventDefault();
        }
    });

    if (typeof console._commandLineAPI === 'undefined') {
        console._commandLineAPI = console.log;
        console.log = function() {
            if (arguments.length === 0) return;
        };
    }

    let devtools = /./;
    devtools.toString = function() {
        this.opened = true;
    };

    setInterval(function() {
        if (devtools.opened) {
            devtools.opened = false;
        }
    }, 1000);
})();