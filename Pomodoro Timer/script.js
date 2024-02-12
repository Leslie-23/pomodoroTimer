let timer;
let isWorkTime = true;

function startTimer() {
  timer = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  const timeLeftElement = document.getElementById("time-left");
  const timeLeft = timeLeftElement.innerHTML.split(":");
  let minutes = parseInt(timeLeft[0], 10);
  let seconds = parseInt(timeLeft[1], 10);

  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    playAlarm();
    isWorkTime = !isWorkTime;
    updateTimerLabel();
    resetTimer();
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  timeLeftElement.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function toggleTimer() {
  const startStopButton = document.getElementById("start-stop");
  if (startStopButton.innerHTML === "Start") {
    startStopButton.innerHTML = "Pause";
    startTimer();
  } else {
    startStopButton.innerHTML = "Start";
    clearInterval(timer);
  }
}

function resetTimer() {
  clearInterval(timer);
  const startStopButton = document.getElementById("start-stop");
  startStopButton.innerHTML = "Start";

  const timerLabel = document.getElementById("timer-label");
  timerLabel.innerHTML = isWorkTime ? "Deep Work" : "Rest";

  const timeLeftElement = document.getElementById("time-left");
  timeLeftElement.innerHTML = isWorkTime ? "25:00" : "05:00";
}

function updateTimerLabel() {
  const timerLabel = document.getElementById("timer-label");
  timerLabel.innerHTML = isWorkTime ? "Deep Work" : "Rest";
}

function playAlarm() {
  const alarm = document.getElementById("alarm");
  alarm.play();
}
function playAlarmReset() {
  const alarm = document.getElementById("alarm2");
  alarm.play();
}
