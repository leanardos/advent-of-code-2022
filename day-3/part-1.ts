// In the description
// a-z -> 1-26
// A-Z -> 27-52

// ASCII value of a - 97 - difference 96
// ASCII value of A - 65 - difference 38
const input = await Deno.readTextFile('./input.txt');
const trimmedInput = input.replace('\r', '');
const inputArray = trimmedInput.split("\n");

function getPointByLetter(letter: string) {
    return letter === letter.toUpperCase()
		? letter.charCodeAt(0) - 38
		: letter.charCodeAt(0) - 96; 
}

const pointsArray: number[] = [];

inputArray.forEach(input => {
    const inputPartOne = input.substring(0, input.length / 2);
    const inputPartTwo = input.substring(input.length / 2);
    for(let i = 0; i < inputPartOne.length; i++) {
        for (let y = 0; y < inputPartTwo.length; y++) {
            if (inputPartOne[i] === inputPartTwo[y]) {
                return pointsArray.push(getPointByLetter(inputPartOne[i]));
            }
        }
    }
})
const totalPoints = pointsArray.reduce((acc, curr) => acc + curr, 0);
console.log({ totalPoints });