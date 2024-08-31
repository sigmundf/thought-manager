document.addEventListener('DOMContentLoaded', () => {
    const thoughtType = document.getElementById('thought-type');
    const thoughtDetails = document.getElementById('thought-details');
    const balancedThoughtStarter = document.getElementById('balanced-thought-starter');
    const balancedThoughtInput = document.getElementById('balanced-thought-input');
    const saveButton = document.getElementById('save-thought');
    const thoughtList = document.getElementById('thought-list');

    thoughtType.addEventListener('change', () => {
        if (thoughtType.value) {
            thoughtDetails.style.display = 'block';
            thoughtDetails.placeholder = thoughtType.value === 'custom' 
                ? 'Enter your custom thought here' 
                : `Complete your "${thoughtType.options[thoughtType.selectedIndex].text}" thought`;
        } else {
            thoughtDetails.style.display = 'none';
        }
    });

    balancedThoughtStarter.addEventListener('change', () => {
        if (balancedThoughtStarter.value && balancedThoughtStarter.value !== 'custom') {
            balancedThoughtInput.value = balancedThoughtStarter.value + ' ';
        }
    });

    saveButton.addEventListener('click', () => {
        const thoughtText = thoughtType.value === 'custom' 
            ? thoughtDetails.value 
            : `${thoughtType.options[thoughtType.selectedIndex].text} ${thoughtDetails.value}`;
        const evidence = document.getElementById('evidence-input').value;
        const balancedThought = balancedThoughtInput.value;

        if (thoughtText && evidence && balancedThought) {
            const thoughtItem = document.createElement('li');
            thoughtItem.innerHTML = `
                <strong>Automatic Thought:</strong> ${thoughtText}<br>
                <strong>Evidence Against:</strong> ${evidence}<br>
                <strong>Balanced Thought:</strong> ${balancedThought}
            `;
            thoughtList.appendChild(thoughtItem);

            // Clear inputs
            thoughtType.value = '';
            thoughtDetails.value = '';
            thoughtDetails.style.display = 'none';
            document.getElementById('evidence-input').value = '';
            balancedThoughtStarter.value = '';
            balancedThoughtInput.value = '';
        } else {
            alert('Please fill in all fields before saving.');
        }
    });
});
