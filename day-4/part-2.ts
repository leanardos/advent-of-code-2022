const input = await Deno.readTextFile('./input.txt');
const trimmedInput = input.replace('\r', '');
const inputArray = trimmedInput.split("\n");

let counter = 0;
inputArray.forEach(input => {
    const firstPairFirstItem = +input.split(',')[0].replace('\r', '').split('-')[0];
    const firstPairSecondItem = +input.split(',')[0].replace('\r', '').split('-')[1];
    
    const secondPairFirstItem = +input.split(',')[1].replace('\r', '').split('-')[0];
    const secondPairSecondItem = +input.split(',')[1].replace('\r', '').split('-')[1];

    if (firstPairFirstItem > secondPairFirstItem && firstPairFirstItem > secondPairSecondItem || 
        firstPairSecondItem < secondPairFirstItem) {
        console.log('--------------: ',input); // overlapping pairs
        counter ++;
    }

});
console.log(inputArray.length - counter);