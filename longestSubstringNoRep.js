/**
 * @param {string} s
 * @return {number}
 */
let check = function(s , arr , index){
  res = true;
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === s[index]){
      res = false
    }
  }
 
  return res;
}


var lengthOfLongestSubstring = function(s) {
  let l = s.length ;
  let i =0;
  let max = 0
  while(i < l-max){
    let n = 0;
    let stop = false;
    let arr = [];
    let k = i;
    while(!stop && k < l){
      if(n === 0 || check(s , arr ,k )){
        arr.push(s[k]);
        k++
        n++
      }
      else{
        stop = true;
      }
    }
    if(max < n){
      max = n
    }
    i++;
  }
  return max;
};