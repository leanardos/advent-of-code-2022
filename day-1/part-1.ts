const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split("\n");

let maximumTotalCalories = 0;
while(inputArray.length > 0) {
    const indexOfNewLine = inputArray.indexOf("\r") + 1;
 	const eachElfCalorieArray = inputArray
		.splice(0, indexOfNewLine <= 0 ? inputArray.length : indexOfNewLine)
		.map((item) => +item);

    const eachElfCaloriesTotal = eachElfCalorieArray.reduce((acc, currentItem) => acc + currentItem, 0);

    if (maximumTotalCalories < eachElfCaloriesTotal) {
        maximumTotalCalories = eachElfCaloriesTotal;
	}
}

console.log({ maximumTotalCalories });