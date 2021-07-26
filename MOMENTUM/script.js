const calculator = {
    add: function(a,b){
        console.log(a + b);
    },
    minus: function(a,b){
        console.log(a - b);
    },
    divide: function(a,b) {
        console.log(a/b);
    },
    powerof: function(a,b){
        console.log(a**b);
    }
};

calculator.add(2,4);
calculator.minus(1,5);
calculator.divide(10,2);
calculator.powerof(2,6);