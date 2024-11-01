// script.js
const activities = document.querySelectorAll('.activity');
const resultDiv = document.getElementById('result');
const auraScoreDisplay = document.getElementById('aura-score');
const resetAuraButton = document.getElementById('reset-aura');

let auraScore = 0;

activities.forEach(activity => {
    activity.addEventListener('click', () => {
        const auraInterpretation = activity.getAttribute('data-aura');
        const points = parseInt(activity.getAttribute('data-points'));

        resultDiv.textContent = `Your aura is: ${auraInterpretation}`;
        
        // Update aura score
        auraScore += points;
        auraScoreDisplay.textContent = auraScore;
    });
});

resetAuraButton.addEventListener('click', () => {
    auraScore = 0; // Reset the score
    auraScoreDisplay.textContent = auraScore; // Update displayed score
    resultDiv.textContent = ''; // Clear the aura interpretation
});
