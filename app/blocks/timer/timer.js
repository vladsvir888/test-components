app.timer = {
  name: 'timer',
  init() {
    let deadline = new Date(2022, 2, 31);

    let timerId;

    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
      const now = new Date();
      const diff = deadline - now; // расчёт оставшегося времени = конечная дата - текущая дата (получим таймстамп)

      if (diff < 0) { // по истечении времени устанавливаем новый дедлайн и рекурсивно вызываем countdownTimer
        deadline = new Date(2022, 2, 31);
        timerId = setInterval(countdownTimer, 1000);
      }

      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;

      document.getElementById('days').textContent = days < 10 ? `0${days}` : days;
      document.getElementById('hours').textContent = hours < 10 ? `0${hours}` : hours;
      document.getElementById('minutes').textContent = minutes < 10 ? `0${minutes}` : minutes;
      document.getElementById('seconds').textContent = seconds < 10 ? `0${seconds}` : seconds;

      document.getElementById('daysText').textContent = declensionNum(days, ['день', 'дня', 'дней']);
      document.getElementById('hoursText').textContent = declensionNum(hours, ['час', 'часа', 'часов']);
      document.getElementById('minutesText').textContent = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      document.getElementById('secondsText').textContent = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    timerId = setInterval(countdownTimer, 1000);
  },
};
