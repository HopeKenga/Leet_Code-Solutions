//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//And then read line by line: "PAHNAPLSIIGYIR"
//Write the code that will take a string and make this conversion given a number of rows:

var convert = function(inputString, targetRows) {
    if (targetRows == 1) {
        return inputString
    }
     // Start the process on row 1, heading down
    let currentRow = 1;
    let headingDown= true;

    //Initialize an array to strore the zigzag data
    let zigZagArray = [];

    //loop throught the requested number of rows
    for (let i=0; i < targetRows; i++) {
        //initialise each zigzag row as an empty array
         zigZagArray[i] = [];
}
//Loop through the string
for (let i = 0; i < inputString.length; i++) {
    //Add the current letter to the current row
    zigZagArray[currentRow -1].push(inputString[i]);

    if (headingDown) {
        currentRow++;

        //check if we've exceeded the maximum number of rows
        if(currentRow > targetRows) {
            //start heading back up again
            currentRow = targetRows - 1;
            headingDown = false;

        }
    }else {
        currentRow--;

        //check if we've exceeded the top row
        if (currentRow < 1) {
            //Start heading down again
            currentRow = 2;
            headingDown = true;
        }
    }

}
//initialise a return string
let totalsTRING = '';

//loop through the constructed rows
for (let i = 0; i < targetRows; i++) {
    //Append the row's characters joined together
    totalString += zigZagArray[i].join(' ');

}
return totalString;
}