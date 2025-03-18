function removeFirstOccurrence(source: string, target: string): string {
    return source.replace(target, "");
}

// Example value for testing
const TEST_SOURCE = "hello loop";
const TEST_TARGET = "lo";
console.log(removeFirstOccurrence(TEST_SOURCE, TEST_TARGET));