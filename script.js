// Load bugs from localStorage on page load, or start with empty array
let bugs = JSON.parse(localStorage.getItem('bugs')) || [];

// Run renderBugs on startup so saved bugs show immediately
renderBugs();

function addBug() {
  // Step 1: Grab the values from the form
  const title    = document.getElementById('bugTitle').value.trim();
  const desc     = document.getElementById('bugDesc').value.trim();
  const severity = document.getElementById('bugSeverity').value;

  // Step 2: Don't add if title is empty
  if (title === '') {
    alert('Please enter a bug title!');
    return;
  }
  if (desc === '') {
    alert('Please enter a bug description!');
    return;
}

  // Step 3: Create a bug object
  const bug = {
    id: Date.now(),
    title: title,
    desc: desc,
    severity: severity,
    fixed: false
  };

  // Step 4: Push it into our array
  bugs.push(bug);

  // Step 5: Save to localStorage
  localStorage.setItem('bugs', JSON.stringify(bugs));

  // Step 6: Clear the form
  document.getElementById('bugTitle').value    = '';
  document.getElementById('bugDesc').value     = '';
  document.getElementById('bugSeverity').value = 'Low';

  // Step 7: Re-render the bug list
  renderBugs();
}

function renderBugs() {
  const bugList = document.getElementById('bugList');
  bugList.innerHTML = '';

  if (bugs.length === 0) {
    bugList.innerHTML = '<p style="text-align:center; color:#888;">No bugs reported yet!</p>';
    return;
  }

  bugs.forEach(function(bug) {
    const card = document.createElement('div');
    card.className = `bug-card ${bug.severity} ${bug.fixed ? 'fixed' : ''}`;

    card.innerHTML = `
      <div class="bug-title">${bug.title}</div>
      <div class="bug-desc">${bug.desc}</div>
      <div class="bug-meta">Severity: ${bug.severity} · ID: ${bug.id}</div>
      <div class="bug-actions">
        <button class="btn-fix"    onclick="toggleFix(${bug.id})">
          ${bug.fixed ? 'Reopen' : 'Mark Fixed'}
        </button>
        <button class="btn-delete" onclick="deleteBug(${bug.id})">Delete</button>
      </div>
    `;

    bugList.appendChild(card);
  });
}

function toggleFix(id) {
  // Find the bug with this id and flip its fixed value
  bugs = bugs.map(function(bug) {
    if (bug.id === id) {
      bug.fixed = !bug.fixed;
    }
    return bug;
  });

  // Save updated list to localStorage
  localStorage.setItem('bugs', JSON.stringify(bugs));

  renderBugs();
}

function deleteBug(id) {
  // Keep all bugs EXCEPT the one with this id
  bugs = bugs.filter(function(bug) {
    return bug.id !== id;
  });

  // Save updated list to localStorage
  localStorage.setItem('bugs', JSON.stringify(bugs));

  renderBugs();
}