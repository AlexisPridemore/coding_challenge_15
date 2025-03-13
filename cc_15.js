// Task 2: Adding New Risk Items Dynamically

// Function to add a new risk item
function addRiskItem(riskName, riskLevel, department) {
    // Create the new risk card
    const riskCard = document.createElement('div');
    riskCard.classList.add('riskCard');

    // Set the background color based on the risk level
    if (riskLevel === 'High') {
        riskCard.classList.add('highRisk');
    } else if (riskLevel === 'Medium') {
        riskCard.classList.add('mediumRisk');
    } else {
        riskCard.classList.add('lowRisk');
    }

    // Create the content for the risk card
    const riskContent = `
        <h3>${riskName}</h3>
        <p>Risk Level: ${riskLevel}</p>
        <p>Department: ${department}</p>
    `;

    riskCard.innerHTML = riskContent;

    // Append the new risk card to the risk dashboard
    document.getElementById('riskDashboard').appendChild(riskCard);
}

// Event listener to handle form submission
document.getElementById('riskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the values from the form
    const riskName = document.getElementById('riskName').value;
    const riskLevel = document.getElementById('riskLevel').value;
    const department = document.getElementById('department').value;

    // Call addRiskItem function with the form values
    addRiskItem(riskName, riskLevel, department);

    // Clear the form fields
    document.getElementById('riskName').value = '';
    document.getElementById('department').value = '';
});

// Test example data
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Task 3: Removing Risk Items

const riskContent = `
    <h3>${riskName}</h3>
    <p>Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    <button class="resolveButton">Resolve</button>  <!-- Added Resolve button here -->
`;

const resolveButton = riskCard.querySelector('.resolveButton');
resolveButton.addEventListener('click', function() {
    // Remove the risk card when the resolve button is clicked
    riskCard.remove();
});

// Task 4: Categorizing Risks by Level

// Test Cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5: Implementing Bulk Updates

function increaseRiskLevels() {
    const riskCards = document.querySelectorAll('.riskCard');
    
    riskCards.forEach(function(card) {
        const riskLevelElement = card.querySelector('.riskLevel');
        const currentRiskLevel = riskLevelElement.innerText;

        let newRiskLevel = currentRiskLevel;
        if (currentRiskLevel === 'Low') {
            newRiskLevel = 'Medium';
        } else if (currentRiskLevel === 'Medium') {
            newRiskLevel = 'High';
        }

        // Update the risk level and re-apply styles
        riskLevelElement.innerText = newRiskLevel;

        // Update the background color based on the new risk level
        setRiskLevelStyles(card, newRiskLevel);
    });
}
