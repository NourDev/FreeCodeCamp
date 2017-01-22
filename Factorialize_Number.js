
function factorialize(num) {
   
   var cnt = 1;
    for (var i = 1; i <= num ; i++) {
        cnt *= i;
    }
    return cnt;
}

factorialize(5);
