// Section switching
function showSection(sectionId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Chat functionality
function sendMessage() {
  const input = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');
  const message = input.value.trim();
  if (message) {
    const div = document.createElement('div');
    div.textContent = `You: ${message}`;
    chatBox.appendChild(div);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Poll voting
function vote(option) {
  const resultDiv = document.getElementById('poll-result');
  resultDiv.textContent = `✅ You voted for: ${option}`;
}

// Media preview
function previewImage(event) {
  const output = document.getElementById('media-preview');
  output.innerHTML = ''; // Clear previous image
  const file = event.target.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    output.appendChild(img);
  }
}
