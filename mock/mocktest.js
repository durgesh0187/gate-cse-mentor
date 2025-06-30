function startTest(testName) {
  alert(`Starting Test: ${testName}`);
  // Later: window.location.href = `test.html?test=${testName}`;
}

function toggleSection(header) {
  const section = header.nextElementSibling;
  section.style.display = (section.style.display === 'none') ? 'flex' : 'none';
  header.innerHTML = header.innerHTML.includes('⬇')
    ? header.innerHTML.replace('⬇', '⬆')
    : header.innerHTML.replace('⬆', '⬇');
}

// Initially collapse all
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.test-grid').forEach(grid => grid.style.display = 'none');
});



function startTest(testName) {
  localStorage.setItem("selectedTest", testName);
  window.location.href = "test/test.html";
}
