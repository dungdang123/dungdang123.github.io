const yourDate = new Date("2025-01-22T19:37:00");
const person1 = { day: 28, month: 11, year: 2004 };
const person2 = { day: 11, month: 9, year: 2011 };

const music = ['ido', 'noinaycoanh', 'nguoiamphu'];
document.addEventListener('DOMContentLoaded', function(){
    var rootTime = document.querySelector("time");
    document.querySelector("span[modth]").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;

    document.querySelector("span[birdthday-one]").innerHTML = person1.day + '/' + person1.month + '/' + person1.year;
    document.querySelector("span[birdthday-two]").innerHTML = person2.day + '/0' + person2.month + '/' + person2.year;
    const currentDate = new Date();
    function getDateDifference(startDate, endDate) {
        const isReverse = endDate < startDate;
        const _startDate = isReverse ? endDate : startDate;
        const _endDate = isReverse ? startDate : endDate;

        let years = _endDate.getFullYear() - _startDate.getFullYear();
        let months = _endDate.getMonth() - _startDate.getMonth();
        let days = _endDate.getDate() - _startDate.getDate();
        if(days < 0) {
            months--;
            const lastMonthDays = new Date(_endDate.getFullYear(), _endDate.getMonth(), 0).getDate();
            days += lastMonthDays;
        }
    
        if (months < 0) {
            years--;
            months += 12;
        }
    
        const tempDate = new Date(_startDate);
        tempDate.setFullYear(tempDate.getFullYear() + years);
        tempDate.setMonth(tempDate.getMonth() + months);
        const remainingMs = _endDate - tempDate;
        const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    
        const weeks = Math.floor(remainingDays / 7);
        const remainingDaysAfterWeeks = remainingDays % 7;
        return {
            years: isReverse ? -years : years,
            months: isReverse ? -months : months,
            weeks: isReverse ? -weeks : weeks,
            days: isReverse ? -remainingDaysAfterWeeks : remainingDaysAfterWeeks
        };
    }

    function getDaysYear() {
        const currentDate = new Date();
        if (!(yourDate instanceof Date) || isNaN(yourDate)) {
            throw new Error("yourDate không phải là ngày hợp lệ.");
        }

        if (yourDate > currentDate) {
            throw new Error("yourDate phải là ngày trong quá khứ hoặc hiện tại.");
        }

        const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        const daysInYear = isLeapYear(currentDate.getFullYear()) ? 366 : 365;
        const getDaysBetweenDates = (date1, date2) => {
            const start = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            const end = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            const oneDay = 1000 * 60 * 60 * 24;
            return Math.round(Math.abs(end - start) / oneDay);
        };

        const daysPassed = getDaysBetweenDates(currentDate, yourDate);
        const getYearsPassed = (startDate, endDate) => {
            let years = endDate.getFullYear() - startDate.getFullYear();
            if (
                endDate.getMonth() < startDate.getMonth() ||
                (endDate.getMonth() === startDate.getMonth() && endDate.getDate() < startDate.getDate())
            ) {
                years--;
            }
            return Math.max(0, years);
        };

        const yearsPassed = getYearsPassed(yourDate, currentDate);
        const nextYourDate = new Date(currentDate.getFullYear() + 1, yourDate.getMonth(), yourDate.getDate());
        const daysToNextYourDate = getDaysBetweenDates(currentDate, nextYourDate);
        const percentage = Math.min((daysPassed / daysInYear) * 100, 100);
        const progressBar = document.getElementById("progress");
        const progressText = document.getElementById("progress-text");
        const statusText = document.getElementById("status");
        if (!progressBar || !progressText || !statusText) {
            throw new Error("Một hoặc nhiều phần tử DOM không tồn tại.");
        }

        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage.toFixed(1)}%`;
        const daysLeft = daysInYear - daysPassed;
        statusText.textContent = `${yearsPassed} năm đã trôi qua. Còn ${daysToNextYourDate} ngày đến ${nextYourDate.getDate()}/${nextYourDate.getMonth() + 1}/${nextYourDate.getFullYear()}.`;
        return { daysPassed, percentage, daysLeft, yearsPassed, daysToNextYourDate };
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

    const start = dayjs(yourDate);
    function olock() {
        const now = dayjs();
        let tempStart = start;

        const years = now.diff(tempStart, 'year');
        tempStart = tempStart.add(years, 'year');
        const months = now.diff(tempStart, 'month');
        tempStart = tempStart.add(months, 'month');
        const weeks = now.diff(tempStart, 'week');
        tempStart = tempStart.add(weeks, 'week');
        const days = now.diff(tempStart, 'day');
        tempStart = tempStart.add(days, 'day');
        const hours = now.diff(tempStart, 'hour');
        tempStart = tempStart.add(hours, 'hour');
        const minutes = now.diff(tempStart, 'minute');
        tempStart = tempStart.add(minutes, 'minute');
        const seconds = now.diff(tempStart, 'second');
        const totalDays = getTotalDays(yourDate, now);
        rootTime.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.querySelector("date").textContent        = `${totalDays} DAYS`;
        document.querySelector("[daysC]").textContent     = totalDays;
        document.querySelector("span[year]").textContent  = years;
        document.querySelector("span[month]").textContent = months;
        document.querySelector("span[week]").textContent  = weeks;
        document.querySelector("span[day]").textContent   = days; 
        getDaysYear();
    } 

    function getTotalDays(startDate, endDate) {
        const dayjsStart = dayjs(startDate);
        const dayjsEnd = dayjs(endDate);
        return dayjsEnd.diff(dayjsStart, 'day');
    }
    
    olock();
    window.timer = setInterval(olock, 1000);
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
        const currentDate = new Date();
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
    document.getElementById("zodiac-one").innerHTML = `<span style="font-size: 13px;border-radius: 35px;background-color: #FBA78B;color: #fff;padding: 4px 7px;"><span style="font-size: 16px;">${zodiac1.icon}</span> ${zodiac1.name}</span>`;
    document.getElementById("zodiac-two").innerHTML = `<span style="font-size: 13px;border-radius: 35px;background-color: #FBA78B;color: #fff;padding: 4px 7px;"><span style="font-size: 16px;">${zodiac2.icon}</span> ${zodiac2.name}</span>`;
}, false);