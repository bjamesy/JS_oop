// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
}

// magazine constructor 
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Book.prototype;

// instantiate Magazine
const mag1 = new Magazine('inFisherman', 'daryl kronzy', '1865', 'May');

// Magazine currently using Book as its constructor - if you want to change it to magazine then.. 
Magazine.prototype.constructor = Magazine;

console.log(mag1);