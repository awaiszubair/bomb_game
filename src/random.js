function generateRandomValue() {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // Multiply by 21 to include 20 in the range
    // Use Math.floor to round down to the nearest integer
    return Math.floor(Math.random() * 21);
}

// Example usage:
const randomValue = generateRandomValue();
console.log(randomValue);
