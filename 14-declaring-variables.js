var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log('inside for i=', i);
    }
    console.log('Finally i =', i); //since in line 8, we declared i as var
    // its accessible in line 12 also. 
}
doSomething();
