document.addEventListener('DOMContentLoaded', () => {
    const thoughtType = document.getElementById('thought-type');
    const thoughtDetails = document.getElementById('thought-details');
    const evidenceInput = document.getElementById('evidence-input');
    const balancedThoughtStarter = document.getElementById('balanced-thought-starter');
    const balancedThoughtInput = document.getElementById('balanced-thought-input');
    const saveButton = document.getElementById('save-thought');
    const thoughtList = document.getElementById('thought-list');

    function formatStarterText(text) {
        return text.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
    }

    thoughtType.addEventListener('change', () => {
        if (thoughtType.value) {
            thoughtDetails.style.display = 'block';
            if (thoughtType.value === 'custom') {
                thoughtDetails.value = '';
                thoughtDetails.placeholder = 'Enter your custom thought here';
            } else {
                let starterText = thoughtType.options[thoughtType.selectedIndex].text;
                starterText = formatStarterText(starterText);
                thoughtDetails.value = starterText + ' ';
                thoughtDetails.placeholder = `Complete your "${starterText}" thought`;
            }
            thoughtDetails.focus();
            thoughtDetails.setSelectionRange(thoughtDetails.value.length, thoughtDetails.value.length);
        } else {
            thoughtDetails.style.display = 'none';
            thoughtDetails.value = '';
        }
    });

    balancedThoughtStarter.addEventListener('change', () => {
        if (balancedThoughtStarter.value && balancedThoughtStarter.value !== 'custom') {
            let starterText = balancedThoughtStarter.options[balancedThoughtStarter.selectedIndex].text;
            starterText = formatStarterText(starterText);
            balancedThoughtInput.value = starterText + ' ';
            balancedThoughtInput.focus();
            balancedThoughtInput.setSelectionRange(balancedThoughtInput.value.length, balancedThoughtInput.value.length);
        } else {
            balancedThoughtInput.value = '';
        }
    });

    saveButton.addEventListener('click', () => {
        const thoughtText = thoughtType.value === 'custom' 
            ? thoughtDetails.value 
            : thoughtDetails.value;
        const evidence = evidenceInput.value;
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
            evidenceInput.value = '';
            balancedThoughtStarter.value = '';
            balancedThoughtInput.value = '';
        } else {
            alert('Please fill in all fields before saving.');
        }
    });
});
