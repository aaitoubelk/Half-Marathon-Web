function addWords(obj, word) {
    obj.words += " " + word;
    let allWords = obj.words.split(" ");
    let isAdded = false;
    let result = [];
    for (let i = 0; i < allWords.length; ++i) {
        if (allWords[i] !== "") {
            result.push(allWords[i]);
        }
    }
    removeRepeat(result);

    return result.join(" ");
}

function removeRepeat(a) {
    let i = 1;
    for (let q = 1; q < a.length; ++q) {
        if (a[q] !== a[q - 1]) {
            a[i++] = a[q];
        }
    }

    a.length = i;
    return a;
}

function removeWords(obj, words) {
    let allWords = obj.words;
    words = removeRepeat(words.split(' ').filter(item => item !== ''));
    let result = allWords.split(' ').filter(item => item != '').filter(item => {
        for(let i = 0; i < words.length; ++i) {
            if(item === words[i]) {
                return false;
            }
        }
        return true;
    }).join(' ');
    obj.words = result;
    return result;
}

function changeWords(obj, oldWords, newWords) {
    removeWords(obj, oldWords);
    return addWords(obj, newWords);
}
