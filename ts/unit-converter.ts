function convertLengthUnit(value: number, unit: 'cm'|'km'): number {
    if(unit === 'cm'){
        return value / 100000;
    } else if(unit === 'km'){
        return value * 100000;
    }

    throw new Error('Invalid unit. Use "cm" or "km".');
}

// Example value for testing
const TEST_VALUE = 1000;
const TEST_UNIT = 'km';
console.log(convertLengthUnit(TEST_VALUE, TEST_UNIT)); 