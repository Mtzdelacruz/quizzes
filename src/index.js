/**
 * This quiz is to test your knowledge of For-Loop.
 *
 * 1. When you finish the quiz, create a branch on you repository
 * 2. Submit to your lead
 */

// Quiz on For-loops and Biblical Trivia

// Question 1: Count the number of occurrences of the letter 'a' in the name "Abraham".
let name1 = "Abraham";
let count1 = 0;
for (let i = 0; i < name1.length; i++) {
  // comparas cada carta con la "a"
  if(name1[i].toLowerCase()=== "a"){
    //las que encuentre iguales las guardo aparte 
    count1++;
  }
}
// cuento las tarjetas que puse aparte 
console.log("[Question 1]:", count1); // Answer should be:

// console.log("string array", name1[name1.length -1]); este menos -1 me permite saber la ultima posición del array


// Question 2: Reverse the string "Moses".
let name2 = "Moses";
let reversedName2 = "";
//j = 4;                    4 >= 0; j --
for (let j = name2.length - 1; j >= 0; j--) {
  // Your code here
  reversedName2 += name2[j]; 
}
console.log("([Question #2]:", reversedName2); // Answer should b e:

// Question 3: Sum the integers from 1 to 12 (the number of sons of Jacob).
let sum3 = 0;
for (let k = 1; k <= 12; k++) {
  // Your code here
  sum3 += k;

}
console.log("([Question #3]:", sum3); // Answer should be:

// Question 4: Create a string that contains the first 5 
//books of the Old Testament
//  separated by a comma.
let books4 = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy"];
let bookString4 = "";
for (let l = 0; l < books4.length; l++) {
  // Your code here
  // tomamos primer carton y lo ponemos al principio de cartulina grande
bookString4 += books4[l];
if(l< books4.length - 1)
  bookString4 += ", ";
}
  //anadi carton on coma 
  //anadir siguiente carton con palabra

console.log('[Question #4]:', bookString4); // Answer should be:


// Question 5: Count the number of vowels in the name 
//"Jerusalem".
let name5 = "Jerusalem";
let count5 = 0;
for (let m = 0; m < name5.length; m++) {
  // Your code here
//   if(
//     name5[m] === "a" ||    name5[m] === "e" ||   name5[m] === "i" ||  name5[m] === "o" ||     name5[m] === "u" 
//     ) {
// count5++
//     }
if("aeiou".includes(name5[m].toLowerCase())){
  count5++;
  }
}
console.log('[Question #5]:',count5); // Answer should be:

// Question 6: Find the product of the numbers 1 to 5.
let product6 = 1;
for (let n = 1; n <= 5; n++) {
  // Your code here
  console.log(product6++); 
}
console.log("[Question #6]:", product6); // Answer should be:

// Question 7: Create a string from an array that tells 
//the story of David and Goliath.
let story7 = ["David", "fought", "Goliath", "and", "won."];
let storyString7 = "";
for (let o = 0; o < story7.length; o++) {
  // Your code here
  storyString7 += story7[o];
if(o < story7.length - 1)
  storyString7 += " ";
}
console.log("[Question #7]:", storyString7); // Answer should be:

// Question 8: Create an acronym from the phrase "In The Beginning".
let phrase8 = "In The Beginning";
let acronym8 = "";
for (let p = 0; p < phrase8.length; p++) {
  // Your code here
  if (p === 0) {
    acronym8 = phrase8[0];
  }

  if (phrase8[p] === " ") {
    acronym8 += phrase8[p + 1];
  }
  }
console.log("[Question #8]:", acronym8.toUpperCase()); // Answer should be:


// Question 9: Convert the string "Noah" to uppercase.
let name9 = "Noah";
let upperName9 = "";
for (let q = 0; q < name9.length; q++) {
  // Your code he
  if (q === 0) {
    upperName9 = name9;
  }

  if (name9 === " ") {
    upperName9 += name9.length.toUpperCase;
  }

}
console.log("[Question #9]:", upperName9); 
// Answer should be:

// Question 10: Find the length of the string "Revelation" without using the `.length` property.
let name10 = "Revelation";
let length10 = 0;
for (let r = 0; name10[r] !== undefined; r++) {
  // 
  if ("Revelation".includes(name10[r])) {
    length10++;
  }

}
console.log("[Question #10]:", length10); // Answer should be:

// Additional 10 Questions on For-loops and Biblical Trivia

// Question 11: Count the number of occurrences of the letter 'e' 
//in the word "Jericho".
let city11 = "Jericho";
let count11 = 0;
for (let s = 0; s < city11.length; s++) {
  // Your code here
  if(city11[s].toLowerCase()=== "e"){
    count11++;
  }
}
console.log("[Question #11]:", count11); // Answer should be:

// Question 12: Reverse the string "Bethlehem".
let town12 = "Bethlehem";
let reversedTown12 = "";
for (let t = town12.length - 1; t >= 0; t--) {
  // Your code here
  reversedTown12 += town12[t];
}
console.log("[Question #12]:", reversedTown12); // Answer should be:

// Question 13: Sum the integers from 1 to 40 (the number 
//of days of Jesus' temptation).
let sum13 = 0;
for (let u = 1; u <= 40; u++) {
  // Your code here
  sum13 += u;
}
console.log("[Question #13]:", sum13); // Answer should be:

// Question 14: Concatenate the list of the Twelve Apostles 
//into a single string separated by a comma.
let apostles14 = ["Peter", "James", "John", "Andrew", "Philip", "Bartholomew", "Matthew", "Thomas", "James", "Thaddeus", "Simon", "Judas"];
let apostlesString14 = "";
for (let v = 0; v < apostles14.length; v++) {
  // Your code here
  apostlesString14 += apostles14[v];
  if(v< apostles14.length -1)
  apostlesString14 += ", ";
}

console.log("[Question #14]:", apostlesString14); // Answer should be:

// Question 15: Count the number of consonants in the 
//name "Isaiah".
let name15 = "Isaiah";
let count15 = 0;
for (let w = 0; w < name15.length; w++) {
  // Your code here
  if("sh".includes(name15[w].toLowerCase())){
    count15++
  }
}
console.log("[Question #15]:", count15); // Answer should be:

// Question 16: Find the product of the numbers from 3 to 7.
let product16 = 1;
for (let x = 3; x <= 7; x++) {
  // Your code here
  console.log(product16++);
}
console.log("[Question #16]:", product16); // Answer should be:

// Question 17: Create a string from an array that tells 
//the story of Jonah and the Whale.
let story17 = ["Jonah", "was", "swallowed", "by", "a", "whale."];
let storyString17 = "";
for (let y = 0; y < story17.length; y++) {
  // Your code here
  storyString17 += story17[y];
  if(y < story17.length -1)
  storyString17 += " ";
}

console.log("[Question #17]:", storyString17); // Answer should be:

// Question 18: Create an acronym from the phrase "Garden 
//Of Eden".
let phrase18 = "Garden Of Eden";
let acronym18 = "";
for (let z = 0; z < phrase18.length; z++) {
  // Your code here
  if (z === 0) {
    acronym18 = phrase18[0];
  }

  if (phrase18[z] === " ") {
    acronym18 += phrase18[z+1];
  }
}
console.log("[Question #18]:", acronym18.toUpperCase()); // Answer should be:

// Question 19: Convert the string "Canaan" to lowercase.
let name19 = "Canaan";
let lowerName19 = "";
for (let aa = 0; aa < name19.length; aa++) {
  // Your code here
  if (aa === 0){
    lowerName19 = name19;
  }
  
  if (name19 === " ") {
    lowerName19 += name19.length.toLowerCase;
  }
}

console.log("[Question #19]:",lowerName19); // Answer should be:

// Question 20: Find the length of the string "Exodus" 
//without using the `.length` property.
let name20 = "Exodus";
let length20 = 0;
for (let bb = 0; name20[bb] !== undefined; bb++) {
  // Your code here
  if ("Exodus".includes(name20[bb])) {
    length20++;
  }
}
console.log("[Question #20]:",length20); // Answer should be: