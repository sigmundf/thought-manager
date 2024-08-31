document.addEventListener('DOMContentLoaded', () => {
    const thoughtList = document.getElementById('thought-list');
    const savedThoughts = JSON.parse(localStorage.getItem('savedThoughts')) || [];

    if (savedThoughts.length === 0) {
        thoughtList.innerHTML = '<p>No saved thoughts yet. Start challenging your thoughts in the Thought Manager!</p>';
    } else {
        savedThoughts.forEach((thought, index) => {
            const thoughtItem = document.createElement('li');
            thoughtItem.innerHTML = `
                <h3>Thought Exercise ${index + 1} - ${thought.date}</h3>
                <p><strong>Automatic Thought:</strong> ${thought.automaticThought}</p>
                <p><strong>Initial Feelings:</strong> ${thought.initialFeelings.join(', ')}</p>
                <p><strong>Evidence Against:</strong> ${thought.evidence}</p>
                <p><strong>Balanced Thought:</strong> ${thought.balancedThought}</p>
                <p><strong>Final Feelings:</strong> ${thought.finalFeelings.join(', ')}</p>
            `;
            thoughtList.appendChild(thoughtItem);
        });
    }
});
