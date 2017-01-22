
function palindrome(str) {
  
  var pal = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(pal, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

palindrome("eye");
