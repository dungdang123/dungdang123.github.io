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

fetchData();
function fetchData() {
    const data = [
        {
            "link": "https://github.com/dungdang123",
            "backgound": "background-color: #0093E9;background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);",
            "image": "./public/platforms/github.svg",
            "username": "dungdang123"
        }, {
            "link": "https://twitter.com/mecstomk",
            "backgound": "background-color: #4158D0;background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);",
            "image": "./public/platforms/twitter.svg",
            "username": "@mecstomk"
        }, {
            "link": "https://facebook.com/dangvandung.dev/",
            "backgound": "background-color: #FAD961;background-image: linear-gradient(90deg, #FAD961 0%, #F76B1C 100%);",
            "image": "./public/platforms/facebook.svg",
            "username": "@dangvandung.dev"
        }, {
            "link": "#",
            "backgound": "background-color: #FA8BFF;background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);",
            "image": "./public/platforms/riotgames.svg",
            "username": "@dungtomxanh"
        }, {
            "link": "#",
            "backgound": "background-color: #8EC5FC;background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);",
            "image": "./public/icons/4834215.png",
            "username": "@dungmecstomk"
        }
    ];

    // data.forEach(obj => {
    //     Object.entries(obj).forEach(([key, value]) => {
    //         console.log(`${key} ${value}`);
    //         const pathMain = ``;
    //         let showSocian = document.querySelector("");
    //         showSocian.append(pathMain)
    //     });
    // });
}

function timeLert(i) {
    let string = "";
    if(i < 10) {
        string += "0"+i
    }
    return string;
}