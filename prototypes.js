// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
// storing method in the prototype because we dont want getSummary to be operated on every instantiation
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
}

// getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} old`;
}

// Revise / change
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// instantiate an object
const book2 = new Book('stalker', 'james', '1993');
const book1 = new Book('elmo', 'jon', '1980');

console.log(book2);
book2.revise('2019');
console.log(book2);