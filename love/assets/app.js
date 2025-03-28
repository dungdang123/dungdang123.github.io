const yourDate = new Date("2025-01-22T19:37:00");
const person1 = { day: 28, month: 11, year: 2004 };
const person2 = { day: 11, month: 9, year: 2011 };

const music = ['ido', 'noinaycoanh', 'nguoiamphu'];
document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    document.querySelector("span[modth]").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

    const currentDate = new Date();
    function getDateDifference(startDate, endDate) {
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();
        if(days < 0) {
            months--;
            days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        }

        if(months < 0) {
            years--;
            months += 12;
        }
    
        const tempDate = new Date(startDate);
        tempDate.setFullYear(tempDate.getFullYear() + years);
        tempDate.setMonth(tempDate.getMonth() + months);
        const remainingMs = endDate - tempDate;
        const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    
        const weeks = Math.floor(remainingDays / 7);
        const remainingDaysAfterWeeks = remainingDays % 7;
    
        return {
            years,
            months,
            weeks,
            days: remainingDaysAfterWeeks
        };
    }
    
    

    function getDaysYear() {
        const daysInYear = 365;
        const diffInMs = Math.abs(currentDate - yourDate);
        const daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const percentage = Math.min((daysPassed / daysInYear) * 100, 100);
        const progressBar = document.getElementById("progress");
        const progressText = document.getElementById("progress-text");
        const statusText = document.getElementById("status");

        progressBar.style.width = percentage + "%";
        progressText.textContent = percentage.toFixed(1) + "%";
        if (daysPassed >= daysInYear) {
            statusText.textContent = "1 năm đã trôi qua! 🎉";
        } else {
            const daysLeft = daysInYear - daysPassed;
            statusText.textContent = `Còn ${daysLeft} ngày nữa là hết năm ${(new Date().getFullYear())}.`;
        }
    }

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        document.getElementById('time-now').textContent = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";
    document.querySelector("[daysC]").textContent = Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24);

    function olock() {
        var today = new Date(),
        hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
        min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
        sec =  Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
        const diff = getDateDifference(yourDate, currentDate);
        document.querySelector("span[year]").textContent = diff.years;
        document.querySelector("span[month]").textContent = diff.months;
        document.querySelector("span[week]").textContent = diff.weeks;
        document.querySelector("span[day]").textContent = diff.days;
        getDaysYear();
    } olock();
    var timer = setInterval(function(){olock()}, 1000);
    document.querySelector(".green-audio-player > audio").setAttribute("src", `assets/music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

    document.getElementsByTagName("body")[0].insertAdjacentHTML(
        "beforeend",
        "<div id='mask'></div>"
    );

    function getZodiacSign(day, month, year) {
        if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
            return { name: "Invalid input.", icon: "fa-exclamation-circle" };
        }
        if (month < 1 || month > 12 || day < 1 || day > 31) {
            return { name: "Invalid date.", icon: "fa-exclamation-circle" };
        }
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
            return { name: "Invalid date.", icon: "fa-exclamation-circle" };
        }
        if (month === 2 && day > 29) {
            return { name: "Invalid date.", icon: "fa-exclamation-circle" };
        }

        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return { name: "Bạch Dương", icon: "♈" }; // (Aries)
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return { name: "Kim Ngưu", icon: "♉" }; // (Taurus)
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            return { name: "Song Tử", icon: "♊" };// (Gemini)
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            return { name: "Cự Giải", icon: "♋" }; // (Cancer)
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return { name: "Sư Tử", icon: "♌" }; // (Leo)
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return { name: "Xử Nữ", icon: "♍" }; // (Virgo)
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            return { name: "Thiên Bình", icon: "♎" }; // (Libra)
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            return { name: "Bọ Cạp", icon: "♏" }; // (Scorpio)
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            return { name: "Nhân Mã", icon: "♐" }; // (Sagittarius)
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return { name: "Ma Kết", icon: "♑" }; // (Capricorn)
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return { name: "Bảo Bình", icon: "♒" }; // (Aquarius)
        } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
            return { name: "Song Ngư", icon: "♓" }; // (Pisces)
        }
    }

    function calculateAge(day, month, year) {
        const currentDate = new Date("2025-03-27T00:00:00");
        const birthDate = new Date(year, month - 1, day);
        let age = currentDate.getFullYear() - birthDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const birthMonth = birthDate.getMonth();
        const currentDay = currentDate.getDate();
        const birthDay = birthDate.getDate();
        if(currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {age--;}
        return age;
    }

    const zodiac1 = getZodiacSign(person1.day, person1.month, person1.year);
    const zodiac2 = getZodiacSign(person2.day, person2.month, person2.year);
    const age1 = calculateAge(person1.day, person1.month, person1.year);
    const age2 = calculateAge(person2.day, person2.month, person2.year);

    document.getElementById("age-one").textContent = age1;
    document.getElementById("age-two").textContent = age2;
    document.getElementById("zodiac-one").innerHTML = `<span style="font-size: 13px;border-radius: 35px;background-color: #FBA78B;color: #fff;padding: 8px 7px;"><span style="font-size: 16px;">${zodiac1.icon}</span> ${zodiac1.name}</span>`;
    document.getElementById("zodiac-two").innerHTML = `<span style="font-size: 13px;border-radius: 35px;background-color: #FBA78B;color: #fff;padding: 8px 7px;"><span style="font-size: 16px;">${zodiac2.icon}</span> ${zodiac2.name}</span>`;

    function restrictToDesktop() {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobile = /mobile|android|iphone|ipad|tablet|blackberry|windows phone/i.test(userAgent);
        if(isMobile) {
            document.body.innerHTML = "<h1>Truy cập bị từ chối</h1><p>Trang web này chỉ hỗ trợ máy tính (desktop/laptop).</p>";
        } else {
            console.log("Chào mừng bạn đến với trang web trên máy tính!");
        }
    }

    window.onload = restrictToDesktop;
}, false);