const counterDisplay = document.querySelector(".points");
const goBtn = document.querySelector(".go");
let counter = 0;
let bubbleMaker;

const bubbler = () => {
  bubbleMaker = setInterval(function () {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
      bubble.remove();
    });

    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }, 1000);
};
function paddedFormat(num) {
  return num < 10 ? "0" + num : num;
}

function startCountDown(duration, minuteur) {
  let secondsRemaining = duration;
  let min = 0;
  let sec = 0;

  let countInterval = setInterval(function () {
    min = parseInt(secondsRemaining / 60);
    sec = parseInt(secondsRemaining % 60);

    minuteur.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;

    secondsRemaining = secondsRemaining - 1;
    if (secondsRemaining < 0) {
      clearInterval(countInterval);
      clearInterval(bubbleMaker);
      scoreDisplay();
    }
  }, 1000);
}

const minuterie = () => {
  let time_minutes = 1; // Value in minutes
  let time_seconds = 30; // Value in seconds

  let duration = time_minutes * 60 + time_seconds;

  minuteur = document.querySelector(".minuteur");
  minuteur.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(
    time_seconds
  )}`;

  startCountDown(--duration, minuteur);
};

goBtn.addEventListener("click", () => {
  counter = 0;
  document.querySelector(".start").style.display = "none";
  minuterie();
  bubbler();
});

const scoreDisplay = () => {
  document.querySelector(".start").style.display = null;
  document.querySelectorAll("span").forEach((bubble) => {
    bubble.style.display = "none";
  });
};
