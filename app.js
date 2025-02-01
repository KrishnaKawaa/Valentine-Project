// const button = document.querySelector('#no');
// const container = document.querySelector('.btnContainer');

// button.addEventListener('mouseenter', () => {
//     // Get container dimensions
//     const containerWidth = container.offsetWidth;
//     const containerHeight = container.offsetHeight;

//     // Generating random position within the container
//     const randomX = Math.random() * (containerWidth - button.offsetWidth);
//     const randomY = Math.random() * (containerHeight - button.offsetHeight);

//     // Apply the random position inside the container
//     button.style.left = `${randomX}px`;
//     button.style.top = `${randomY}px`;
// });

// const head= document.querySelector('h1');
// const yesButton = document.querySelector("#yes");
// yesButton.addEventListener("click", () => {
//     document.body.style.backgroundImage = "url('./img/1.png')"; // Corrected syntax
//     head.innerHTML="I Know You would say yessss <br> 😘😘😘😘😘😘😘😘😘";
//     button.innerText="👋( ͜ ㅅ ͜ )💥";
// });





const button = document.querySelector('#no');
const container = document.querySelector('.btnContainer');

// Function to move the button randomly
function moveButton() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - button.offsetWidth);
    const randomY = Math.random() * (containerHeight - button.offsetHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Check if the device is mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Use 'click' for mobile, 'mouseenter' for desktop
if (isMobile) {
    button.addEventListener('click', moveButton);
} else {
    button.addEventListener('mouseenter', moveButton);
}

const head = document.querySelector('h1');
const yesButton = document.querySelector("#yes");

yesButton.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('./img/1.png')";
    head.innerHTML = "I Know You would say yessss <br> 😘😘😘😘😘😘😘😘😘";
    button.innerText = "👋( ͜ ㅅ ͜ )💥";
});
