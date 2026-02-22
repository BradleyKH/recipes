const ingredients = ["Pepper", "Fennel", "Sage", "Salt", "Red Pepper"];

const ingredientRatios = [4, 36, 3, 9, 3];

function round(value, decimals) {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function convert(tsp) {
    ///	1 tbsp = 3 tsp
    ///	1 cup = 16 tbsp
    ///	1 gallon = 16 cups

    let units = ["gal", "cups", "tbsp", "tsp"];
    let measurement = "";
    let gallons = 0;
    let cups = 0;
    let tbsp = 0;

    gallons = Math.floor(tsp / (3 * 16 * 16));
    tsp = tsp - gallons * 3 * 16 * 16;
    cups = Math.floor(tsp / (3 * 16));
    tsp = tsp - cups * 3 * 16;
    tbsp = Math.floor(tsp / 3);
    tsp = tsp - tbsp * 3;

    if (tbsp >= 8) {
        // greater than half a cup, add 0.5 to cups and subtract 8 from tbsp
        cups += 0.5;
        tbsp -= 8;
    }

    let unitComponents = [gallons, cups, tbsp, tsp];

    // cups or cup
    if (cups == 1) {
        units[1] = "cup";
    }

    for (let i = 0; i < 4; i++) {
        if (unitComponents[i] != 0) {
            measurement += round(unitComponents[i], 2) + " " + units[i] + " ";
        }
    }

    return measurement;
}

function calculate() {
    let pounds = document.getElementById("amount").value;

    // Build a <dl> for the ingredient list
    let html = "";
    for (let i = 0; i < ingredients.length; i++) {
        html += "<dt>" + ingredients[i] + "</dt>";
        html += "<dd>" + convert((pounds * ingredientRatios[i]) / 12) + "</dd>";
    }

    document.getElementById("bags").textContent = Math.ceil(pounds / document.getElementById("bagweight").value);
    document.getElementById("sausageType").innerHTML = pounds + " lbs";
    document.getElementById("ingredients").innerHTML = html;
}

// --- Attach listeners after DOM is ready ---
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calc-form").addEventListener("submit", function (e) {
        e.preventDefault();
    });

    // Auto-recalculate on any input change
    let controls = document.querySelectorAll("#calc-form .field");
    for (const element of controls) {
        element.addEventListener("input", calculate);
        element.addEventListener("change", calculate);
    }

    // Initial calculation
    calculate();
});
