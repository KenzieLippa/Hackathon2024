let cookie = document.getElementById("cookie");
let displayCookies = document.getElementById("displayCookies");
let upgrageClicker = document.getElementById("upgradeClicker");
let displayUpgradeCost = document.getElementById("displayUpgradeCost");

//add an event listener for clicking the button
cookie.addEventListener('click', cookieClicked);
upgrageClicker.addEventListener('click', upgradeClicker);
let cookies = 0;
let multiplier = 1;
let multiplierCost = 25;

function cookieClicked(){
    cookies = cookies + multiplier;
    displayCookiesAmt();
}
function displayCookiesAmt(){
    displayCookies.innerHTML = ["<p>You have: "+cookies+" cookies</p>"];
}
function upgradeClicker(){
    if (cookies >= multiplierCost){
        cookies = cookies - multiplierCost;
        multiplier = multiplier + 1;
        multiplierCost = multiplierCost * 1.3;
        //round the multiplier cost up to the nearest whole number
        multiplierCost = Math.ceil(multiplierCost);
        //round(multiplierCost);
        displayUpgradeCost.innerHTML = ["<p>Upgrade Clicker Cost: "+multiplierCost+" cookies</p>"];
        displayCookiesAmt();
    }
    else{
        alert("Not enough cookies!");
    }
}