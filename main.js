// Practice: ChickenMonkey :D
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey", currentNumber)
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken", currentNumber)
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey", currentNumber)
    }
}