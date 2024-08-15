// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["popup.js"],
//   });
// });

let timer;
let isWorkTime = true;
let timeLeft = 25 * 60; // Default to 25:00

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startTimer") {
    startTimer();
  } else if (request.action === "pauseTimer") {
    pauseTimer();
  } else if (request.action === "resetTimer") {
    resetTimer();
  } else if (request.action === "getTimeLeft") {
    sendResponse({ timeLeft: formatTime(timeLeft), isWorkTime });
  }
});

function startTimer() {
  timer = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  if (timeLeft <= 0) {
    clearInterval(timer);
    playAlarm();
    isWorkTime = !isWorkTime;
    resetTimer();
  } else {
    timeLeft--;
  }
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = isWorkTime ? 25 * 60 : 5 * 60;
}

function playAlarm() {
  const alarm = new Audio("beep-04.mp3");
  alarm.play();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
}
