function fahrenheitToCelsius(temperture: number): number {
    return (temperture - 32) * 5 / 9;
}

// Example value for testing
const TEST_TEMPERATURE = 120;
console.log(fahrenheitToCelsius(TEST_TEMPERATURE)); 