function rot13(str) {
  
  var newString = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newString.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newString.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newString.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return newString.join("");
}

rot13("SERR PBQR PNZC");
