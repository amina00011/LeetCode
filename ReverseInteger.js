/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // first we will check if the number is negative or not
    let neg = false;
    if(x < 0){
        neg = true;
        x = -x;
    }
    // now we ll convert the number to string and reverse it
    let str = x.toString();
    let revStr = str.split("").reverse().join("");
    // now we ll convert the reversed string back to number
    let revNum = parseInt(revStr);
    // heck if the range of 32-bit signed integer
    if(revNum > Math.pow(2,31) - 1){
        return 0;
    }
    //  we ll return the reversed number and we add the signif neg
    return neg ? -revNum : revNum;

    
};