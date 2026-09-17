/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // i will devide the string into numRows of strings
    // each iteration will write a letter in all the rows 
    // we have two patterns one is going down and the other is going up
    // we ll make the distinction by using a boolean variable
    if(numRows === 1) return s;
    
    let rows = new Array(numRows).fill("");
    let down = true;
    let row = 0;
    let i = 0;
    for (let i = 0; i < s.length; i++) {
        if(down) {
            rows[row] += s[i];
            row++;
            if(row === numRows) {
                down = false;
                row -= 2;
            }
    }
        else {
            rows[row] += s[i];
            row--;
            if(row === -1) {
                down = true;
                row += 2;
            }
        }
    }
    return rows.join("");  
};