

function timer(id, deadLine) {

	//timer=-=-=-=-==-=-=-=-=--=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=
      //  const deadLine = '2022-04-28';
        let finDate = document.querySelector('.date-end');
        let now = new Date(deadLine);
        
        const mounths = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
        let formattedDate = now.getDate()+" "+mounths[now.getMonth()]+" "+now.getFullYear()
        // @ts-ignore
        finDate.innerHTML = formattedDate;
        // @ts-ignore
        finDate.style = 'font-size:20px;';

        function getTimeRemining(endTime) {
            // @ts-ignore
            const t = Date.parse(endTime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 *60 *24)),
                hours = Math.floor((t / (1000 * 60 *60)) % 24),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num) {
            if(num >= 0 && num <10) {
                return `0${num}`;
            }else return num;
        }

        function setClock(selector, endTime) {
            const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();
            
            function updateClock() {
                const t = getTimeRemining(endTime);
                days.innerHTML = getZero (t.days);
                hours.innerHTML = getZero (t.hours);
                minutes.innerHTML = getZero (t.minutes);
                seconds.innerHTML = getZero (t.seconds);

                if (t.total <= 0){
                    clearInterval(timeInterval);
                }
            }
        }

        setClock(id, deadLine);

}

export default timer;