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