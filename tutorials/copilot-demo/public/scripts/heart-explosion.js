document.querySelectorAll('.post-content').forEach(content => {
    content.addEventListener('click', () => {
        const container = document.createElement('div');
        container.classList.add('floating-hearts-container');
        content.appendChild(container);

        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.textContent = '❤️';

            // Randomize position and direction
            const angle = Math.random() * 2 * Math.PI; // Random angle in radians
            const distance = Math.random() * 100 + 50; // Random distance
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            heart.style.setProperty('--x', `${x}px`);
            heart.style.setProperty('--y', `${y}px`);
            heart.style.animationDelay = `${Math.random() * 0.5}s`;
            container.appendChild(heart);

            // Remove the heart after animation ends
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }

        // Remove the container after all hearts are gone
        setTimeout(() => {
            container.remove();
        }, 2000);
    });
});