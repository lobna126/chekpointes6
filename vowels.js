function countVowels() {
    let person = prompt("Please enter your name");
    const vowels = 'aeiouyAEIOUY'; 
    let count = 0; 
for (let char of person) {
        if (vowels.includes(char)) { 
            count++; 
        }
    }
return count; 
}

const result = countVowels();
alert(result); 



