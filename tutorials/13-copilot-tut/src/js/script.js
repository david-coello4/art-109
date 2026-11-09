document.getElementById('random-image-button').addEventListener('click', function () {
    // Create a new image element
    const randomImage = document.createElement('img');
    randomImage.src = '../images/orange-fruit.png';
    randomImage.alt = 'Random Orange';
    randomImage.classList.add('random-orange');

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Set the position of the image
    randomImage.style.left = `${randomX}px`;
    randomImage.style.top = `${randomY}px`;

    // Append the image to the body
    document.body.appendChild(randomImage);
});

// Add event listener for the "Add Random Orange" button
document.getElementById('random-image-button').addEventListener('click', function () {
    // Create a new image element
    const randomImage = document.createElement('img');
    randomImage.src = '../images/orange-fruit.png';
    randomImage.alt = 'Random Orange';
    randomImage.classList.add('random-orange');

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Generate random sizes for the image
    const randomSize = Math.floor(Math.random() * 100) + 50; // Size between 50px and 150px
    randomImage.style.width = `${randomSize}px`;
    randomImage.style.height = 'auto';

    // Set the position of the image
    randomImage.style.left = `${randomX}px`;
    randomImage.style.top = `${randomY}px`;

    // Append the image to the body
    document.body.appendChild(randomImage);
});

// Add event listener for the "Reset Oranges" button
document.getElementById('reset-images-button').addEventListener('click', function () {
    // Select all elements with the class "random-orange"
    const randomOranges = document.querySelectorAll('.random-orange');

    // Remove each random orange image
    randomOranges.forEach(orange => orange.remove());
});
let trailActive = false; // Flag to track if the trail is active

// Add event listener for the "Add Random Orange" button
document.getElementById('random-image-button').addEventListener('click', function () {
    // Create a new image element
    const randomImage = document.createElement('img');
    randomImage.src = '../images/orange-fruit.png';
    randomImage.alt = 'Random Orange';
    randomImage.classList.add('random-orange');

    // Generate random positions within the viewport
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    // Generate random sizes for the image
    const randomSize = Math.floor(Math.random() * 100) + 50; // Size between 50px and 150px
    randomImage.style.width = `${randomSize}px`;
    randomImage.style.height = 'auto';

    // Set the position of the image
    randomImage.style.left = `${randomX}px`;
    randomImage.style.top = `${randomY}px`;

    // Randomly assign a spin animation class
    const spinClass = Math.random() > 0.5 ? 'spin-clockwise' : 'spin-counterclockwise';
    randomImage.classList.add(spinClass);

    // Append the image to the body
    document.body.appendChild(randomImage);
});

// Add event listener for the "Enable Trail Effect" button
document.getElementById('trail-effect-button').addEventListener('click', function () {
    if (!trailActive) {
        trailActive = true;
        document.addEventListener('mousemove', createTrail);
    }
});

// Add event listener for the "Reset Oranges" button
document.getElementById('reset-images-button').addEventListener('click', function () {
    // Select all elements with the class "random-orange" and "orange-trail"
    const randomOranges = document.querySelectorAll('.random-orange, .orange-trail');

    // Remove each random orange image
    randomOranges.forEach(orange => orange.remove());

    // Stop the trail effect if active
    if (trailActive) {
        document.removeEventListener('mousemove', createTrail);
        trailActive = false;
    }
});

// Function to create the trail effect
function createTrail(event) {
    const trailImage = document.createElement('img');
    trailImage.src = '../images/orange-fruit.png';
    trailImage.alt = 'Orange Trail';
    trailImage.classList.add('orange-trail');

    // Set the position of the trail image to follow the mouse
    trailImage.style.left = `${event.pageX}px`;
    trailImage.style.top = `${event.pageY}px`;

    // Append the trail image to the body
    document.body.appendChild(trailImage);

    // Remove the trail image after a short delay
    setTimeout(() => {
        trailImage.remove();
    }, 500); // Trail image disappears after 500ms
}

// Add event listener for the scroll event
window.addEventListener('scroll', function () {
    // Get the scroll position
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the scroll percentage (0 to 1)
    const scrollPercentage = scrollTop / documentHeight;

    // Generate a shade of orange based on the reversed scroll percentage
    // Hue ranges from 40 (lighter orange) to 20 (darker orange)
    const hue = 40 - scrollPercentage * 20; // Adjust hue dynamically (reversed)
    const saturation = 100; // Full saturation
    const lightness = 50; // Medium lightness

    // Set the background color using HSL
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
});