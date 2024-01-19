function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const messageScreen = document.getElementById('messageScreen');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.textContent = userInput;
    messageScreen.appendChild(userMessage);

    // Simulate AI response (you can replace this logic with your AI processing)
    const aiResponse = document.createElement('div');
    aiResponse.className = 'ai-message';
    aiResponse.textContent = 'Sure, let me analyze that...';
    messageScreen.appendChild(aiResponse);

    // Clear user input
    document.getElementById('userInput').value = '';
}

function saveLearningPlan() {
    // Logic to save learning plan
    alert('Learning plan saved!');
}

function downloadLearningPlan() {
    // Logic to download learning plan as PDF
    alert('Learning plan downloaded!');
}
