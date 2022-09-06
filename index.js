console.log(isPalindrome(012105));

function isPalindrome(p1){
  p1 = p1.toString();
  for(let i = 0; i < p1.length; i++){
    if(p1[i]!=p1[p1.length-1-i]){
      return false;
    }
  }
  return true;
}