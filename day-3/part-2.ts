// In the description
// a-z -> 1-26
// A-Z -> 27-52

// ASCII value of a - 97 - difference 96
// ASCII value of A - 65 - difference 38
const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split("\n");

function getPointByLetter(letter: string) {
    return letter === letter.toUpperCase()
        ? letter.charCodeAt(0) - 38
        : letter.charCodeAt(0) - 96;
}

const pointsArray: number[] = [];
while(inputArray.length > 0) {
    pointsArray.push(populatePointsArray());
    inputArray.splice(0, 3);
}

function populatePointsArray() {
	for (let i = 0; i < inputArray[0].length; i++) {
		for (let y = 0; y < inputArray[1].length; y++) {
			for (let z = 0; z < inputArray[2].length; z++) {
				if (
					inputArray[0][i] === inputArray[1][y] &&
					inputArray[0][i] === inputArray[2][z]
				) {
					return getPointByLetter(inputArray[0][i]);
				}
			}
		}
	}
	return 0;
}


const totalPoints = pointsArray.reduce((acc, curr) => acc + curr, 0);
console.log({ totalPoints });
