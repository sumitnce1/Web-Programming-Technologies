exports.fibo = function() {
    var x = 0, y = 1, z = 0;
    var res ="Fibonacci sequence-100:\n";
    
    while (z<100) {
     res +=z+" ";
      x =y;
      y =z;
      z =x+y;
    }    
    return res;
  };
