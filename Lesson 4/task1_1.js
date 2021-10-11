'use strict';

// -----> es5 < -----

function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function() {
    console.log(this.price - (this.price * 0.25));
}

let obj1 = new Product1('RTX 2080', '70000');
obj1.make25PercentDiscount();

// -----> es6 <-----

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        console.log(this.price - (this.price * 0.25));
    }
}

let obj2 = new Product2('RTX 3080', '170000');
obj2.make25PercentDiscount();