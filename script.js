function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  const chatBox = document.getElementById('chatBox');
  if (userInput.trim()) {
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + userInput;
    chatBox.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.textContent = "Kidna AI: (simulated response)";
    chatBox.appendChild(botMsg);

    document.getElementById('userInput').value = "";
  }
}
