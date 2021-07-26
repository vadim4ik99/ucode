

const removeDuplicates = (str) => str.split(' ').filter((item, index, array) => {
    return index == array.indexOf(item);
}).join(' ');

const removeSpareSpaces = (str) => str.replace(/\s+/g,' ').trim();
const removeGarbage = (str) => removeSpareSpaces(removeDuplicates(str))
 

const addWords = (words) => { 
    obj.words += ' ' + words
    obj.words = removeGarbage(obj.words)
}

const removeWords = (words) => {
    obj.words = removeGarbage(obj.words)
    words = words.split(' ')
    words.forEach(item => {
        item = new RegExp(item, 'i')
        obj.words = obj.words.replace(item, '')
    });
    obj.words = removeGarbage(obj.words)
}

const replaceWords = (oldWords, newWords) => {
    removeWords(oldWords)
    addWords(newWords)
}

const obj= {words: 'newspapers books newspapers magazines'};
console.log(obj); 
// {words: "newspapers newspapers  books magazines"}

addWords('radio newspapers');
console.log(obj); 
// {words: "newspapers books magazines radio"}

removeWords('newspapers  radio');
console.log(obj); 
// {words: "books magazines"}

replaceWords('books radio  magazines', 'tv internet');
console.log(obj); 
// // {words: "tv internet"}