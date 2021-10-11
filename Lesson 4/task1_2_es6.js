'use strict';

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(volue) {
        this.text = volue;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let check = new AttachedPost2('John', 'Hi whats up', '12-12-2012');
console.log(check);
check.edit('See you later');
check.makeTextHighlighted();
console.log(check);