'use strict';

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let withPhoto = products2.filter(function(element){
    if (element.photos && element.photos.length > 0){
        return element;
    }
});

let sortProducts2 = products2.sort(function(el1, el2){
    if (el1.price > el2.price) {
        return 1;
    }
    if (el1.price < el2.price) {
        return -1;
    }
    return 0;
});

console.log(withPhoto);
console.log(sortProducts2);