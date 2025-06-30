document.addEventListener("DOMContentLoaded", () => {
  const result = JSON.parse(localStorage.getItem("latestTest"));

  if (!result || !result.questions) {
    document.body.innerHTML = "<h2 style='text-align:center'>❗ No test data found. Please take a test first.</h2>";
    return;
  }

  const questions = result.questions;
  const userAnswers = result.userAnswers;
  const reviewFlags = result.reviewFlags;

  let correct = 0, wrong = 0, attempted = 0;
  const qBox = document.getElementById("questionReview");

  questions.forEach((q, i) => {
    const user = userAnswers[i];
    const correctAns = q.answer;
    const isAttempted = (q.type === "NAT")
      ? user !== null && user !== undefined
      : Array.isArray(user) ? user.length !== 0 : user !== null && user !== undefined;
    const isCorrect = compareAnswers(user, correctAns, q.type);

    if (isAttempted) attempted++;
    if (isCorrect) correct++;
    else if (isAttempted) wrong++;

    const qDiv = document.createElement("div");
    qDiv.classList.add("q-box");
    if (isCorrect) qDiv.classList.add("correct-answer");
    else if (isAttempted) qDiv.classList.add("wrong-answer");

    const status = isCorrect ? "✅ Correct" : isAttempted ? "❌ Wrong" : "⚪ Not Attempted";
    const review = reviewFlags[i] ? `<span class=\"review-flag\">🔖 Marked for Review</span>` : "";

    qDiv.innerHTML = `
      <h3>Q${i + 1}: ${q.q}</h3>
      <p>${status} ${review}</p>
      <p><strong>Your Answer:</strong> ${displayAnswer(user, q)}</p>
      <p><strong>Correct Answer:</strong> ${displayAnswer(correctAns, q)}</p>
    `;
    qBox.appendChild(qDiv);
  });

  document.getElementById("totalQ").textContent = questions.length;
  document.getElementById("attempted").textContent = attempted;
  document.getElementById("correct").textContent = correct;
  document.getElementById("wrong").textContent = wrong;
  document.getElementById("score").textContent = correct;

  const percent = (correct / questions.length) * 100;
  const emoji = percent >= 80 ? "🎉 Excellent!" : percent >= 50 ? "😐 Keep Practicing!" : "😞 Needs Improvement!";
  document.getElementById("feedbackEmoji").textContent = emoji;

  const ctx = document.getElementById('chartCanvas').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Correct', 'Wrong', 'Unattempted'],
      datasets: [{
        data: [correct, wrong, questions.length - attempted],
        backgroundColor: ['#4caf50', '#f44336', '#9e9e9e']
      }]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });

  let weakTopics = {};
  questions.forEach((q, i) => {
    if (q.topic && !compareAnswers(userAnswers[i], q.answer, q.type)) {
      weakTopics[q.topic] = (weakTopics[q.topic] || 0) + 1;
    }
  });

  const weakAreaDiv = document.createElement("div");
  weakAreaDiv.innerHTML = `<h2>📌 Weak Topics You Should Revise:</h2><ul>` +
    Object.entries(weakTopics)
      .sort((a, b) => b[1] - a[1])
      .map(([topic, count]) => `<li>❌ ${topic} (${count} mistakes)</li>`)
      .join('') +
    `</ul>`;
  document.querySelector(".result-container").appendChild(weakAreaDiv);
});

function compareAnswers(user, correct, type) {
  if (user == null && correct == null) return true;
  if (type === "MCQ" || type === "NAT") {
    return JSON.stringify(user) === JSON.stringify(correct[0]);
  }
  if (type === "MSQ") {
    if (!Array.isArray(user)) return false;
    const u = [...user].sort().join(',');
    const c = [...correct].sort().join(',');
    return u === c;
  }
  return false;
}

function displayAnswer(ans, q) {
  if (ans === null || ans === undefined || ans.length === 0) return "—";

  if (q.type === "MCQ") {
    return q.options[ans];
  }
  if (q.type === "MSQ") {
    return ans.map(i => q.options[i]).join(", ");
  }
  if (q.type === "NAT") {
    return Array.isArray(ans) ? ans[0] : ans;
  }
  return "—";
}
