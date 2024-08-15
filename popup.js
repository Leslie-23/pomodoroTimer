// let timer;
// let minutes = 25;
// let seconds = 0;

// function startTimer() {
//   timer = setInterval(updateTimer, 1000);
// }

// function stopTimer() {
//   clearInterval(timer);
// }
// function startRestTimer() {
//   restTimer = setInterval(() => {
//     // Logic to count down 5 minutes
//   }, 5 * 60 * 1000); // 5 minutes in milliseconds
// }
// function updateTimer() {
//   const timerDisplay = document.getElementById("timerDisplay");
//   timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
//     .toString()
//     .padStart(2, "0")}`;

//   if (minutes === 0 && seconds === 0) {
//     clearInterval(timer);
//     // Add logic for break timer here
//     return;
//   }

//   if (seconds === 0) {
//     minutes--;
//     seconds = 59;
//   } else {
//     seconds--;
//   }
// }

// let timer;
// let isWorkTime = true;

// function startTimer() {
//   timer = setInterval(decrementTimer, 1000);
// }

// function decrementTimer() {
//   const timeLeftElement = document.getElementById("time-left");
//   const timeLeft = timeLeftElement.innerHTML.split(":");
//   let minutes = parseInt(timeLeft[0], 10);
//   let seconds = parseInt(timeLeft[1], 10);

//   if (minutes === 0 && seconds === 0) {
//     clearInterval(timer);
//     playAlarm();
//     isWorkTime = !isWorkTime;
//     updateTimerLabel();
//     resetTimer();
//     return;
//   }

//   if (seconds === 0) {
//     minutes--;
//     seconds = 59;
//   } else {
//     seconds--;
//   }

//   timeLeftElement.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
// }

// function toggleTimer() {
//   const startStopButton = document.getElementById("start-stop");
//   if (startStopButton.innerHTML === "Start") {
//     startStopButton.innerHTML = "Pause";
//     startTimer();
//   } else {
//     startStopButton.innerHTML = "Start";
//     clearInterval(timer);
//   }
// }

// function resetTimer() {
//   clearInterval(timer);
//   const startStopButton = document.getElementById("start-stop");
//   startStopButton.innerHTML = "Start";

//   const timerLabel = document.getElementById("timer-label");
//   timerLabel.innerHTML = isWorkTime ? "Deep Work" : "Rest";

//   const timeLeftElement = document.getElementById("time-left");
//   timeLeftElement.innerHTML = isWorkTime ? "25:00" : "05:00";
// }

// function updateTimerLabel() {
//   const timerLabel = document.getElementById("timer-label");
//   timerLabel.innerHTML = isWorkTime ? "Deep Work" : "Rest";
// }

// function playAlarm() {
//   const alarm = document.getElementById("alarm");
//   alarm.play();
// }
// function playAlarmReset() {
//   const alarm = document.getElementById("alarm2");
//   alarm.play();
// }

let timer;
let isWorkTime = true;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start-stop").addEventListener("click", toggleTimer);
  document.getElementById("reset").addEventListener("click", resetTimer);
  updateTimerLabel();
  resetTimer();
});

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

// background functionalites
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("start-stop").addEventListener("click", toggleTimer);
//   document.getElementById("reset").addEventListener("click", resetTimer);
//   updateTimerLabel();
//   updateDisplay();
// });

// function toggleTimer() {
//   const startStopButton = document.getElementById("start-stop");
//   if (startStopButton.innerHTML === "Start") {
//     startStopButton.innerHTML = "Pause";
//     chrome.runtime.sendMessage({ action: "startTimer" });
//   } else {
//     startStopButton.innerHTML = "Start";
//     chrome.runtime.sendMessage({ action: "pauseTimer" });
//   }
// }

// function resetTimer() {
//   chrome.runtime.sendMessage({ action: "resetTimer" });
//   updateDisplay();
// }

// function updateTimerLabel() {
//   chrome.runtime.sendMessage({ action: "getTimeLeft" }, (response) => {
//     document.getElementById("timer-label").innerHTML = response.isWorkTime
//       ? "Deep Work"
//       : "Rest";
//     document.getElementById("time-left").innerHTML = response.timeLeft;
//   });
// }

// function updateDisplay() {
//   chrome.runtime.sendMessage({ action: "getTimeLeft" }, (response) => {
//     document.getElementById("time-left").innerHTML = response.timeLeft;
//   });
// }
