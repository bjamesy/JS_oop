// object of protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} old`;
    }
}

// create object 
// const book1 = Object.create(bookProtos);
// book1.title = 'the Idiot';
// book1.author = 'Fyodor Dostoyevsky';
// book1.year = '1869';

const book1 = Object.create(bookProtos, {
    title: { value: 'the Idiot'},
    author: { value: 'Fyodor Dostoyevsky'},
    year: { value: '1869'}
});

console.log(book1);