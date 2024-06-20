// Example data (replace with actual data or fetch from a server)
const players = [
    { name: "Player 1", position: "Forward", number: 10, image: "player1.jpeg" },
    { name: "Player 2", position: "Midfielder", number: 7, image: "player2.png" },
    { name: "Player 3", position: "Defender", number: 4, image: "player3.png" },
    { name: "Player 4", position: "Forward", number: 10, image: "player4.jpeg" },
    { name: "Player 5", position: "Midfielder", number: 7, image: "player5.png" },
    { name: "Player 6", position: "Defender", number: 4, image: "player6.png" },
    { name: "Player 7", position: "Midfielder", number: 7, image: "player7.png" },
    { name: "Player 8", position: "Defender", number: 4, image: "player8.png" },
    { name: "Player 9", position: "Midfielder", number: 7, image: "player9.png" },
    { name: "Player 10", position: "Goal Keeper", number: 4, image: "player10.png" },
    { name: "Player 11", position: "Midfielder", number: 7, image: "player11.png" },
    { name: "Player 12", position: "Defender", number: 4, image: "player12.png" },
    // Add more players as needed
];

// Function to generate player cards
function generatePlayerCards(players) {
    const container = document.getElementById('playerCardsContainer');
    container.innerHTML = '';

    players.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('playerCard');

        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h2>${player.name}</h2>
            <p>Position: ${player.position}</p>
            <p>Number: ${player.number}</p>
        `;
        container.appendChild(card);
    });
}

// Initial generation of player cards
generatePlayerCards(players);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm)
    );
    generatePlayerCards(filteredPlayers);
});
