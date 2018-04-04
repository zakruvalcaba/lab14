/*eslint-env browser*/

function getWords(text) {
    "use strict";
    var words;
    //REMOVE ALL SPECIAL CHARACTERS FROM THE TEXT
    text = text.replace(/\./g, "");
    text = text.replace(/:/g, "");
    text = text.replace(/,/g, "");
    text = text.toLowerCase();
    //CONVERT STRING TO ARRAY
    words = text.split(" ");
    //SORT THE ARRAY
    words = words.sort();
    return words;
}

function getUniqueWords(words) {
    "use strict";
    var i, uniqueWords = [];
    //PUSH UNIQUE WORDS TO A NEW ARRAY AND RETURN IT
    uniqueWords.push(words[0]);
    for (i = 0; i < words.length; i += 1) {
        if (words[i] !== words[i - 1]) {
            uniqueWords.push(words[i]);
        }
    }
    return uniqueWords;
}

function main() {
    "use strict";
    var text, words, uniqueWords, i;
    
    text = "With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience.";
    
    //GET THE ARRAY OF WORDS MINUS SPECIAL CHARACTERS
    words = getWords(text);
    //GET AN ARRAY OF UNIQUE WORDS
    uniqueWords = getUniqueWords(words);
    //DISPLAY WORD AND UNIQUE WORD COUNT
    window.console.log("The Wordlist Application\n\n");
    window.console.log("Number of words: " + words.length);
    window.console.log("Number of unique words: " + uniqueWords.length);
    window.console.log("Word occurrences and count:");
    //DISPLAY ALL OF THE WORDS AND LET GOOGLE DISPLAY COUNT
    for (i = 0; i < words.length; i += 1) {
        window.console.log(words[i] + "\n");
    }
}
main();