let coins = 1000;
let rechargeRate = 1; // Coins per second

function addCoins() {
  coins++;
  document.getElementById('coins').innerText = coins;
}

function goToHome() {
  alert('Going to Home');
}

function openApp() {
  alert('Opening App...');
}

function showTasks() {
  alert('Viewing Tasks...');
}

function showAirdrop() {
  alert('Accessing Airdrop...');
}

// Recharge coins every second
setInterval(() => {
  coins += rechargeRate;
  document.getElementById('coins').innerText = coins;
}, 1000);
