const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split("\n");

const totalArray = []
while(inputArray.length > 0) {
    totalArray.push( 
		inputArray
			.splice(
				0,
				inputArray.indexOf('\r') + 1 <= 0
					? inputArray.length
					: inputArray.indexOf('\r') + 1
			)
			.map((item) => +item)
			.reduce((acc, currentItem) => acc + currentItem, 0));

}

const descendingSortedArray = totalArray.sort((a, b) => b - a);
const topThreeTotal = descendingSortedArray.splice(0, 3);
const totalOfTopThree = topThreeTotal.reduce((acc, curr) => acc + curr, 0);
console.log({ totalOfTopThree });