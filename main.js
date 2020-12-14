// Your code goes below:

const makeParagraph = (arr) => {
  return arr.join(' ')
}

const totalScore = (arr, bonus = 0) => {
  let total = 0;
  for(const obj of arr) {
    if("multiplier" in obj) {
      total += obj.score * obj.multiplier;
    } else {
      total += obj.score
    }
  }
  return total + bonus;
}

const cipher = (word) => {
  const charArr = word.split("");
  return charArr.map((char) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if(alphabet.indexOf(char) === 25) {
      return alphabet[0]
    } else {
      return alphabet[alphabet.indexOf(char) + 1];
    }
  }).join("")
}

const womensAverageSalary = (arr) => {
  let total = 0;
  let count = 0;
  for(const obj of arr) {
    if(obj.gender === 'female') {
      total += obj.salary;
      count++;
    } 
  } 
  return total / count;
}

const notMarried = (arr) => {
  return arr.filter((obj) => {
    return (obj.status !== 'married')
  })
} 

const addToMultiDigitNumbers = (num, arr) => {
  return arr.map((number) => {
    if(number.length === 1) {
      return number;
    } else {
    return (Number(number) + num).toString(); 
    }
  })
} 

// const faqtory = () => {
//   const test = {
//     questions: [],
//     addQuestion: function(str) {
//       this.questions.push(str);
//     },  
//   }
//   return test
// }

// faqtory.addQuestion('test');
// a;


// Our code goes below... DO NOT TOUCH.


if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
