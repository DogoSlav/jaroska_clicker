// script.js
let cookies = 0;
let cookiesPerSecond = 0;
let upgradeCost = 10;
let hasShoes = 1;
let cookiesPerClick = 1;
let shoesBonus = 2;

const cookieCountElement = document.getElementById("cookie-count");
const cpsElement = document.getElementById("cps");
const cookieElement = document.getElementById("cookie");
const buyUpgradeButton = document.getElementById("buy-upgrade");
const zmenitBotyButtno = document.getElementById("boty-button");

zmenitBotyButtno.addEventListener("click", () => {
    if (hasShoes){
        shoesBonus = 1;
        zmenitBotyButtno.textContent = 'Nemas nasazeny boty (bonus *1)'
    }
    else{
        shoesBonus = 2;
        zmenitBotyButtno.textContent = 'Mas nasazeny boty (bonus *2)'
    }
    hasShoes ^= 1;
    updateUI();
  });

// Add cookies when the cookie is clicked
cookieElement.addEventListener("click", () => {
  cookies += cookiesPerClick * shoesBonus;
  updateUI();
});

// Buy an upgrade to increase cookies per second
buyUpgradeButton.addEventListener("click", () => {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    cookiesPerSecond += 1;
    upgradeCost *= 2; // Increase the cost of the next upgrade
    buyUpgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
    updateUI();
  }
});

// Automatically add cookies per second
setInterval(() => {
  cookies += cookiesPerSecond * shoesBonus;
  updateUI();
}, 1000);

// Update the user interface
function updateUI() {
  cookieCountElement.textContent = cookies;
  cpsElement.textContent = cookiesPerSecond * shoesBonus;
  buyUpgradeButton.disabled = cookies < upgradeCost;
}

// SUndej boty
function displaySundejBoty() {
    const image = document.getElementById('sundej-boty-image');
    const body = document.body;

    // Get the viewport width and height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Generate random coordinates within the viewport
    const randomX = Math.random() * (viewportWidth - 100); // Subtract image width (100px)
    const randomY = Math.random() * (viewportHeight - 100); // Subtract image height (100px)

    // Set the position of the image
    image.style.left = `${randomX}px`;
    image.style.top = `${randomY}px`;

    // Show the image
    image.style.display = 'block';

    // Hide the image after 2 seconds
    setTimeout(() => {
      image.style.display = 'none';
      if (hasShoes){
        cookies = Math.floor(cookies / 2);
      }
    }, 2000); // 2 seconds
  }

  // Function to repeat at random intervals
  function startDisplaySundejBoty() {
    setInterval(() => {
        displaySundejBoty();
    }, Math.random() * 100000 + 1000); // Random interval between 1–5 seconds
  }

  // Start the process
  startDisplaySundejBoty();