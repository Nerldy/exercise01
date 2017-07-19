// Get the Middle Character



/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/





function getMiddle(s) {

    const words = s;

    const wordsLength = words.length % 2;



    if (wordsLength === 0) {

        const middle = words.length / 2;

        return words.substr(middle - 1, 2);

    } else {

        const minusOne = words.length - 1;

        const calculate = minusOne / 2;

        return words.substr(calculate, 1);

    }

}



/*Tests*/

console.log(getMiddle('test'));

console.log(getMiddle('testing'));

console.log(getMiddle('middle'));

console.log(getMiddle('A'));
