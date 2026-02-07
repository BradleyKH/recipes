let sausageTypes = ["Brats", "Breakfast", "Italian"];
let families = ["Brad", "Charles", "Frank", "Jerry", "Ross"];

let ingredientsBrats = [
    [
        "Brad's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Frank's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Jerry's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Ross' Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
];

let ingredientsBreakfast = [
    [
        "Brad's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Frank's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Jerry's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Ross' Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
];

let ingredientsItalian = [
    [
        "Brad's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Frank's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Jerry's Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
    [
        "Ross' Kosher Salt",
        "White Pepper",
        "Marjoram",
        "Carraway Seed",
        "Nutmeg",
        "Allspice",
        "Ginger",
        "Garlic Powder",
        "Red Pepper Flakes",
    ],
];

// Ingredient ratios: amounts in tsp for every 12 pounds - eventually need to make 12 another variable
let ratiosBrats = [
    [8, 8, 8, 8, 8, 8, 8, 8, 8],
    [12, 8, 4, 2, 2, 2, 1, 9, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
];
let ratiosBreakfast = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
];
let ratiosItalian = [
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9],
];

let ratios = [ratiosBrats, ratiosBreakfast, ratiosItalian];
let ingredients = [ingredientsBrats, ingredientsBreakfast, ingredientsItalian];

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
    let selectedSausage = document.getElementById("sausage").value;
    let selectedFamily = document.getElementById("family").value;

    // Build a <dl> for the ingredient list
    let html = "";
    for (let s = 0; s < ingredients[selectedSausage][selectedFamily].length; s++) {
        html += "<dt>" + ingredients[selectedSausage][selectedFamily][s] + "</dt>";
        html += "<dd>" + convert((pounds * ratios[selectedSausage][selectedFamily][s]) / 12) + "</dd>";
    }

    document.getElementById("bags").textContent = Math.ceil(pounds / document.getElementById("bagweight").value);
    document.getElementById("sausageType").innerHTML =
        "<strong>" +
        sausageTypes[selectedSausage] +
        " Recipe</strong> &mdash; " +
        families[selectedFamily] +
        " &bull; " +
        pounds +
        " lbs";
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
