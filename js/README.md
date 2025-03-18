# JavaScript Implementation

This folder contains a collection of Javascript implementation from the Task

### 1️⃣ `isEven(number)`
Checks if a given number is even.

#### How It Works:

-   The function checks if the given number is divisible by 2 without a remainder (`number % 2 === 0`).
-   If the remainder is `0`, the number is even; otherwise, it's odd.

#### Parameters:

-   `number` – The number to check.

#### Returns:

-   _(boolean)_ – `true` if the number is even, otherwise `false`.

#### Example:
```javascript
function isEven(number) {
    return number % 2 == 0;
}
// Example value for testing
const TEST_NUMBER = 5;
console.log(isEven(TEST_NUMBER));
```

#### Sample Output:
```
false
```

### 2️⃣ `isPalindrome(source)`
Checks if a string reads the same forward and backward.

#### How It Works:

-   The function reverses the string using `split("").reverse().join("")`.
-   It then compares the reversed string to the original.
-   If both are identical, the function returns `Palindrome` ; otherwise, `Not Palindrome`.

#### Parameters:

- `source` – The string to check.

#### Returns:

-  _(string)_ – `Palindrome` if the string is a palindrome, otherwise `Not Palindrome`.

#### Example:
```javascript
function isPalindrome(source) {
    if (!/^[a-z0-9]+$/i.test(source)) {
        throw new Error("Input must contain only alphanumeric characters (A-Z, a-z, 0-9).");
    }
    const reversedString = source.toLowerCase().split("").reverse().join("");
    return source.toLowerCase() === reversedString ? "Palindrome" : "Not Palindrome";
}
// https://google.github.io/styleguide/tsguide.html
// Example value for testing
const TEST_PALINDROME = "appa";
console.log(isPalindrome(TEST_PALINDROME));
```

#### Sample Output:
```
Palindrome
```

### 3️⃣ `removeFirstOccurrence(source, target)`
Removes the first occurrence of a substring from a string.

#### How It Works:

-   The function uses `str.replace(subStr, "")` to remove only the first occurrence of `subStr` from `str`.
-   The `replace` function replaces only the first match.

#### Parameters:

-   `source` – The original string.
-   `target` – The substring to remove.

#### Returns:

_(string)_ – A new string with the first occurrence of `target` removed.

#### Example:
```javascript
function removeFirstOccurrence(source, target) {
    return source.replace(target, "");
}
// Example value for testing
const TEST_SOURCE = "hello loop";
const TEST_TARGET = "lo";
console.log(removeFirstOccurrence(TEST_SOURCE, TEST_TARGET));
```

#### Sample Output:
```
hel loop
```


### 4️⃣`fahrenheitToCelsius(temperature)`
Converts temperature from Fahrenheit and Celsius.

#### How It Works:

-   It convert Fahrenheit to Celsius using this formula
$$ 
F = \left(C \times \frac{9}{5} \right) + 32
$$
#### Parameters:

- `value` – The temperature value to convert.

#### Returns:

- _(number)_ – The converted temperature.

#### Example:
```javascript
function fahrenheitToCelsius(temperture) {
    return (temperture - 32) * 5 / 9;
}
// Example value for testing
const TEST_TEMPERATURE = 120;
console.log(fahrenheitToCelsius(TEST_TEMPERATURE));
```

#### Sample Output:
```
48.888888888888886
```


### 5️⃣`convertLengthUnit(value, unit)`
Converts between centimeters (cm) and kilometers (km).

#### How It Works:

-   If converting from `"cm"` to `"km"`, the function divides the value by 100,000 (since 1 km = 100,000 cm).
-   If converting from `"km"` to `"cm"`, it multiplies the value by 100,000.
-   If the units are the same or invalid, the function returns the original value.

#### Parameters:

- `value` – The temperature value to convert.
- `unit` – The unit of the input value (`"cm"` or `"km"`)

#### Returns:

- _(number)_ – The converted value.

#### Example:
```javascript
function convertLengthUnit(value, unit) {
    if (unit === 'cm') {
        return value / 100000;
    }
    else if (unit === 'km') {
        return value * 100000;
    }
    throw new Error('Invalid unit. Use "cm" or "km".');
}
// Example value for testing
const TEST_VALUE = 1000;
const TEST_UNIT = 'km';
console.log(convertLengthUnit(TEST_VALUE, TEST_UNIT));
```

#### Sample Output:
```
100000000
```

