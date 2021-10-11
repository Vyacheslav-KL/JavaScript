'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(volue) {
    this.text = volue;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let obj = new AttachedPost('Ivan', 'Hello everyone', '02-02-2020');
console.log(obj);
obj.edit('Good bye');
obj.makeTextHighlighted();
console.log(obj);