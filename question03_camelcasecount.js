const camelCaseCount = (words) => {

    let regex = /[A-Z]/g;
    let matches = words.match(regex); 
    
    return matches.length + 1;
}

// Input words
const words = "saveChangesInTheEditor";

console.log(`input: ${words}`);
console.log("output:", camelCaseCount(words));