// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to important elements
    const header = document.querySelector('header h1');
    const featuredPlayers = document.querySelector('.featured-players-div');
    const registrationForm = document.querySelector('.registration-form-div');
    const mainImage = document.querySelector('section:first-child img');

    // Function to change text content dynamically
    function changeTextContent() {
        // Change header text with animation
        header.style.transition = 'color 0.5s ease';
        header.textContent = 'Apex Legends Community';
        header.style.color = '#3498db';

        // Change player information
        const playerNames = document.querySelectorAll('.featured-players-div h3');
        playerNames[0].textContent = 'Player 1: OctaneSpeed';
        playerNames[1].textContent = 'Player 2: BloodhoundPro';
        playerNames[2].textContent = 'Player 3: BangaloreElite';
    }

    // Function to modify CSS styles
    function modifyStyles() {
        // Add hover effect to featured players section
        featuredPlayers.style.transition = 'all 0.3s ease';
        featuredPlayers.style.backgroundColor = '#f8f9fa';
        featuredPlayers.style.border = '2px solid #3498db';

        // Change form background and add shadow
        registrationForm.style.backgroundColor = '#f8f9fa';
        registrationForm.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    }

    // Function to toggle image visibility
    function toggleImage() {
        const imageSection = document.querySelector('section:first-child');
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Image';
        toggleButton.style.marginTop = '1rem';
        toggleButton.style.width = 'auto';
        
        // Insert button after the image
        imageSection.appendChild(toggleButton);

        toggleButton.addEventListener('click', () => {
            mainImage.style.display = mainImage.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Add a new player button
    function addNewPlayerButton() {
        const newPlayerButton = document.createElement('button');
        newPlayerButton.textContent = 'Add New Player';
        newPlayerButton.style.width = 'auto';
        newPlayerButton.style.marginTop = '1rem';
        
        featuredPlayers.appendChild(newPlayerButton);

        newPlayerButton.addEventListener('click', () => {
            const playerList = document.querySelector('.featured-players-div ul');
            const newPlayer = document.createElement('li');
            newPlayer.innerHTML = `
                <h3>New Player: ${prompt('Enter player name:')}</h3>
                <p>Rank: ${prompt('Enter player rank:')} | Favorite Legend: ${prompt('Enter favorite legend:')}</p>
            `;
            playerList.appendChild(newPlayer);
        });
    }

    // Execute all functions after a short delay to show the changes
    setTimeout(() => {
        changeTextContent();
        modifyStyles();
        toggleImage();
        addNewPlayerButton();
    }, 1000);
}); 
