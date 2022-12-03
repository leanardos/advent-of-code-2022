const input = await Deno.readTextFile("./input.txt");
const inputArray = input.split("\n");

// A - Rock     - 1
// B - Paper    - 2
// C - Scissors - 3

// X - Lost
// Y - Draw
// Z - Win 

// LOST - 0
// DRAW - 3
// WON  - 6

// Possible Outcomes

// Loses:
// A X - (3 + 0) = 3
// B X - (1 + 0) = 1
// C X - (2 + 0) = 2

// Draws:
// A Y - (1 + 3) = 4
// B Y - (2 + 3) = 5
// C Y - (3 + 3) = 6

// Wins
// A Z - (2 + 6) = 8
// B Z - (3 + 6) = 9
// C Z - (1 + 6) = 7

function caluculatePoint(result: string) {
	switch (result) {
		case "A X\r":
			return 3;

		case "B X\r":
			return 1;

		case "C X\r":
			return 2;

		case "A Y\r":
			return 4;

		case "B Y\r":
			return 5;

		case "C Y\r":
			return 6;

		case "A Z\r":
			return 8;

		case "B Z\r":
			return 9;

		case "C Z\r":
			return 7;

		default:
			return 0;
	}
}
const resultsConvertedToPointsArray = inputArray.map((item) =>
	caluculatePoint(item)
) as number[];
const totalPoints = resultsConvertedToPointsArray.reduce(
	(acc, curr) => acc + curr,
	0
);
console.log({ totalPoints });
