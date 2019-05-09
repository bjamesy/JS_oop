// https://www.youtube.com/watch?v=vDJpGenyHaA

// object literal 
const book1 = {
    title: "the old man and the sea",
    author: "ernest hemingway",
    year: "1952",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

const book2 = {
    title: "brothers karamazov",
    author: "fyodor dostoyevsky",
    year: "1880",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book1));