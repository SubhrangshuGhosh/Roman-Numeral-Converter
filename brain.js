// script.js

// Function to convert number to Roman numerals
function decimalToRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    let result = '';

    romanNumerals.forEach(([symbol, value]) => {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    });

    return result;
}

// Event listener for convert button
document.getElementById("convert-btn").addEventListener("click", function() {
    const numberInput = document.getElementById("number");
    const output = document.getElementById("output");
    const num = parseInt(numberInput.value);

    // Validate input
    if (isNaN(num)) {
        output.textContent = "Please enter a valid number";
    } else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = decimalToRoman(num);
    }
});