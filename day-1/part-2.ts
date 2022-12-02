const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split("\n");

const allElfCaloriesInTotalArray = []
while(inputArray.length > 0) {
    const indexOfNewLine = inputArray.indexOf("\r") + 1;
	const eachElfCalorieArray = inputArray
		.splice(0, indexOfNewLine <= 0 ? inputArray.length : indexOfNewLine)
		.map((item) => +item);

	const eachElfCaloriesTotal = eachElfCalorieArray.reduce((acc, currentItem) => acc + currentItem, 0);
    allElfCaloriesInTotalArray.push(eachElfCaloriesTotal);

}

const descendingSortedArray = allElfCaloriesInTotalArray.sort((a, b) => b - a);
const topThreeTotal = descendingSortedArray.splice(0, 3);
const totalOfTopThree = topThreeTotal.reduce((acc, curr) => acc + curr, 0);
console.log({ totalOfTopThree });