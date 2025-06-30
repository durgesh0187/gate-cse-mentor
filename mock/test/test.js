let questions = [];
const testName = localStorage.getItem("selectedTest");

const script = document.createElement("script");
script.src = `questions/${testName}.js`;
script.onload = () => {
  window.onload = () => {
    renderPalette();
    showQuestion(0);
    startTimer(180);
  };
};
document.head.appendChild(script);



let current = 0;
let userAnswers = Array(questions.length).fill(null);
let reviewFlags = Array(questions.length).fill(false);

window.onload = () => {
  renderPalette();
  showQuestion(current);
  startTimer(180);
};

function renderPalette() {
  const palette = document.getElementById("palette");
  palette.innerHTML = '';
  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.className = "qbtn";
    btn.innerText = i + 1;
    btn.onclick = () => {
      saveCurrentSelection();
      showQuestion(i);
    };
    palette.appendChild(btn);
  });
}

function showQuestion(index) {
  current = index;
  updatePalette();

  const q = questions[index];
  document.getElementById("questionText").innerText = `Q${index + 1}. ${q.q}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  if (q.type === "MCQ") {
    q.options.forEach((opt, i) => {
      const checked = userAnswers[index] === i ? "checked" : "";
      optionsDiv.innerHTML += `<label><input type="radio" name="option" value="${i}" ${checked}> ${opt}</label>`;
    });
  } else if (q.type === "MSQ") {
    q.options.forEach((opt, i) => {
      const checked = userAnswers[index]?.includes(i) ? "checked" : "";
      optionsDiv.innerHTML += `<label><input type="checkbox" name="option" value="${i}" ${checked}> ${opt}</label>`;
    });
  } else if (q.type === "NAT") {
    const val = userAnswers[index] ?? "";
    optionsDiv.innerHTML = `<label>Answer: <input type="number" id="natInput" value="${val}" step="any"></label>`;
  }
}

function saveCurrentSelection() {
  const q = questions[current];

  if (q.type === "MCQ") {
    const selected = document.querySelector('input[name="option"]:checked');
    userAnswers[current] = selected ? parseInt(selected.value) : null;
  } else if (q.type === "MSQ") {
    const selected = [...document.querySelectorAll('input[name="option"]:checked')];
    userAnswers[current] = selected.map(i => parseInt(i.value));
  } else if (q.type === "NAT") {
    const input = document.getElementById("natInput");
    const value = input.value.trim();
    userAnswers[current] = value === "" ? null : parseFloat(value);
  }
}

function nextQuestion() {
  saveCurrentSelection();
  if (current < questions.length - 1) {
    showQuestion(current + 1);
  }
}

function markForReview() {
  saveCurrentSelection();
  reviewFlags[current] = true;
  nextQuestion();
}

function clearSelection() {
  userAnswers[current] = null;
  reviewFlags[current] = false;
  showQuestion(current);
}

function updatePalette() {
  const all = document.querySelectorAll(".qbtn");
  all.forEach((btn, i) => {
    btn.className = "qbtn";
    if (userAnswers[i] !== null && userAnswers[i] !== undefined) btn.classList.add("active");
    if (reviewFlags[i]) btn.classList.add("review");
  });
}

function submitTest() {
  saveCurrentSelection();

  const timestamp = new Date().toLocaleString();
  const resultData = {
    timestamp,
    questions,
    userAnswers,
    reviewFlags
  };

  localStorage.setItem("latestTest", JSON.stringify(resultData));

  let history = JSON.parse(localStorage.getItem("testHistory")) || [];
  history.push(resultData);
  localStorage.setItem("testHistory", JSON.stringify(history));

  window.location.href = "result.html";
}

function startTimer(minutes) {
  let time = minutes * 180;
  const countdown = document.getElementById("countdown");

  const timer = setInterval(() => {
    const min = Math.floor(time / 180);
    const sec = time % 180;
    countdown.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      alert("⏰ Time's up! Auto-submitting...");
      submitTest();
    }
  }, 1000);
}

function openTCSCalculator() {
  window.open("https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html", "_blank", "width=475,height=370");
}

