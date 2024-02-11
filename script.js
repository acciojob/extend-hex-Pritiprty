
function extendHex(shortHex) {
    // Remove the # symbol if present
    shortHex = shortHex.replace("#", "");
    
    // If shortHex has 3 characters, extend each character to repeat
    if (shortHex.length === 3) {
        shortHex = shortHex.split("").map(function(char) {
            return char + char;
        }).join("");
    }
    
    // Construct the full hex code
    return "#" + shortHex.toUpperCase(); // Ensure uppercase output
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
