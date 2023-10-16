

        const setAlarmBtn = document.querySelector('button'),
        select = document.querySelectorAll('select'),
        childContainer = document.querySelector('.childContainer');



        let alarmTime, isAlarmSet = false;
     let ringTone = new Audio("./alarmAudio.mp3");
        /*  ringTone.src = "./Alarm3.mp3";*/



        let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');

        let hour = document.getElementById('hour');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let AmPm = document.getElementById('AmPm');
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;


            let h = day.getHours();
            let m = day.getMinutes();
            let s = day.getSeconds();

            var Am = h >= 12 ? 'PM': 'AM';

            if (h > 12) {

                h = h - 12;
            }

            if (h == 0) {
                h = 12;
            }

            //Adding 0 in stArting

            h = (h < 10) ? "0" + h: h;
            m = (m < 10) ? "0" + m: m;
            s = (s < 10) ? "0" + s: s;

            hour.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;

            AmPm.innerHTML = Am;



            let currentTime = `${h}:${m} ${Am}`;


            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            if (alarmTime == currentTime) {
                ringTone.play();
                ringTone.loop = true;

            }

        });

        function setAlarm() {

            if (isAlarmSet) {
                alarmTime = ""; //clear the values of Alarm timme
                ringTone.pause();
                childContainer.classList.remove("disable");
                setAlarmBtn.innerHTML = "Set Alarm";

                return isAlarmSet = false;

            }


            //gettingg hour minutes & AmPM in tg
            let time = `${select[0].value}:${select[1].value} ${select[2].value}`
            console.log(time);

            if (time.includes("hourOp") || (time.includes("minOp") || (time.includes("AM/PM")))) {
                return alert("Please, Set a valid Alarm");
            }
            isAlarmSet = true;
            alarmTime = time;

            childContainer.classList.add("disable");
            setAlarmBtn.innerHTML = "Stop Alarm";
        }

        setAlarmBtn.addEventListener("click", setAlarm);

 
