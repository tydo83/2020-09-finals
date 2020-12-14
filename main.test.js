const {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
} = require('./main.js')


describe('makeParagraph', () => {
  it(`returns the given sentences as one paragraph`, () => {
    const sentences1 = [
      'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts.',
      'The Ministry of Peace, which concerned itself with war.',
      'The Ministry of Love, which maintained law and order.',
      'And the Ministry of Plenty, which was responsible for economic affairs.',
      'Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.',
    ]

    const paragraph1 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'

    const sentences2 = [
      'Full fathom five thy father lies, of his bones are coral made.',
      'Those are pearls that were his eyes.',
      'Nothing of him that doth fade, but doth suffer a sea-change into something rich and strange.',
    ]

    const paragraph2 = 'Full fathom five thy father lies, of his bones are coral made. Those are pearls that were his eyes. Nothing of him that doth fade, but doth suffer a sea-change into something rich and strange.'

    expect(makeParagraph(sentences1)).toBe(paragraph1);
    expect(makeParagraph(sentences2)).toBe(paragraph2);
  })
})

describe('totalScore', () => {
  it(`adds all scores together`, () => {
    const levels1 = [
      {
        score: 50,
      },
      {
        score: 200,
      },
      {
        score: 400,
      },
      {
        score: 350,
      },
    ]

    const levels2 = [
      {
        score: 55,
      },
      {
        score: 215,
      },
      {
        score: 430,
      },
      {
        score: 330,
      },
    ]

    expect(totalScore(levels1)).toBe(1000)
    expect(totalScore(levels2)).toBe(1030)
  })

  it(`if a level has a multiplier, multiplies its score by the multiplier`, () => {
    const levels1 = [
      {
        score: 50,
        multiplier: 3,
      },
      {
        score: 200,
        multiplier: 2,
      },
      {
        score: 400,
        multiplier: 4,
      },
      {
        score: 350,
        multiplier: 3,
      },
    ]

    const levels2 = [
      {
        score: 55,
      },
      {
        score: 215,
      },
      {
        score: 430,
        multiplier: 2,
      },
      {
        score: 330,
        multiplier: 5,
      },
    ]

    expect(totalScore(levels1)).toBe(3200)
    expect(totalScore(levels2)).toBe(2780)
  })

  it(`if present, adds the second parameter, a bonus, to the total`, () => {
    const levels1 = [
      {
        score: 70,
      },
      {
        score: 230,
      },
      {
        score: 450,
      },
      {
        score: 450,
      },
    ]

    const levels2 = [
      {
        score: 45,
      },
      {
        score: 205,
      },
      {
        score: 330,
      },
      {
        score: 230,
      },
    ]

    expect(totalScore(levels1, 50)).toBe(1250)
    expect(totalScore(levels2, 120)).toBe(930)
  })
})

describe('cipher', () => {
  it(`returns a string based on the given string where every letter has been replaced by the following letter in the alphabet`, () => {
    expect(cipher('hello')).toBe('ifmmp');
    expect(cipher('hi')).toBe('ij');
    expect(cipher('colin')).toBe('dpmjo');
  })

  it(`can wrap around the end of the alphabet, so that "z" becomes "a"`, () => {
    expect(cipher('zzz')).toBe('aaa');
    expect(cipher('zebra')).toBe('afcsb');
    expect(cipher('frazzled')).toBe('gsbaamfe');
  })
})

describe('womensAverageSalary', () => {
  it(`returns the mean average of the salaries of the given people when all people are women`, () => {
    const people1 = [
      {
        name: 'Colleen',
        gender: 'female',
        salary: 70,
      },
      {
        name: 'Alice',
        gender: 'female',
        salary: 58,
      },
      {
        name: 'Hannah',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Edwina',
        gender: 'female',
        salary: 70,
      },
    ]

    const people2 = [
      {
        name: 'Elizabeth',
        gender: 'female',
        salary: 83,
      },
      {
        name: 'Robin',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Helen',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Sophia',
        gender: 'female',
        salary: 70,
      },
    ]

    expect(womensAverageSalary(people1)).toBe(66.5)
    expect(womensAverageSalary(people2)).toBe(72.25)
  })

  it(`returns the mean average of the salaries of only the women when not all people are women`, () => {
    const people1 = [
      {
        name: 'Colin',
        gender: 'male',
        salary: 70,
      },
      {
        name: 'Alice',
        gender: 'female',
        salary: 58,
      },
      {
        name: 'Hannah',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Ed',
        gender: 'male',
        salary: 70,
      },
    ]

    const people2 = [
      {
        name: 'Jonathan',
        gender: 'male',
        salary: 83,
      },
      {
        name: 'Robin',
        gender: 'male',
        salary: 68,
      },
      {
        name: 'Helen',
        gender: 'female',
        salary: 68,
      },
      {
        name: 'Sophia',
        gender: 'female',
        salary: 70,
      },
    ]

    expect(womensAverageSalary(people1)).toBe(63)
    expect(womensAverageSalary(people2)).toBe(69)
  })
})


describe('notMarried', () => {
  it(`returns only the given people whose marital status is not married`, () => {
    const people = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    const result = [
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
    ]

    expect(notMarried(people)).toEqual(result);
  })

  it(`covers multiple types of not married`, () => {
    const people = [
      {
        name: 'Ian',
        status: 'divorced',
      },
      {
        name: 'Colin',
        status: 'deceased',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'widowed',
      },
      {
        name: 'Ed',
        status: 'married',
      },
      {
        name: 'Colleen',
        status: 'divorced',
      }
    ]

    const result = [
      {
        name: 'Ian',
        status: 'divorced',
      },
      {
        name: 'Colin',
        status: 'deceased',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'widowed',
      },
      {
        name: 'Colleen',
        status: 'divorced',
      },
    ]

    expect(notMarried(people)).toEqual(result);
  })

  it(`does not modify the original list`, () => {
    const originalPeople = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    const people = [
      {
        name: 'Colin',
        status: 'married',
      },
      {
        name: 'Alice',
        status: 'single',
      },
      {
        name: 'Hannah',
        status: 'single',
      },
      {
        name: 'Ed',
        status: 'married',
      },
    ]

    notMarried(people);
    expect(people).toEqual(originalPeople);
  })
})

describe('addToMultiDigitNumbers', () => {
  it(`adds the first parameter number to the each number in the second parameter, an array of multi-digit numbers in string format`, () => {
    const numbers1 = [
      '50',
      '500',
      '32',
    ]

    const result1 = [
      '53',
      '503',
      '35',
    ]

    const numbers2 = [
      '1091',
      '10000',
      '12'
    ]

    const result2 = [
      '1097',
      '10006',
      '18'
    ]

    expect(addToMultiDigitNumbers(3, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(6, numbers2)).toEqual(result2);
  })

  it(`handles carrying over digits`, () => {
    const numbers1 = [
      '50',
      '500',
      '32',
    ]

    const result1 = [
      '63',
      '513',
      '45',
    ]

    const numbers2 = [
      '1091',
      '10000',
      '12'
    ]

    const result2 = [
      '1211',
      '10120',
      '132'
    ]

    expect(addToMultiDigitNumbers(13, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(120, numbers2)).toEqual(result2);
  })

  it(`does not add to single-digit numbers`, () => {
    const numbers1 = [
      '50',
      '5',
      '0',
    ]

    const result1 = [
      '51',
      '5',
      '0',
    ]

    const numbers2 = [
      '3',
      '303',
      '8',
      '1000'
    ]

    const result2 = [
      '3',
      '308',
      '8',
      '1005'
    ]

    expect(addToMultiDigitNumbers(1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(5, numbers2)).toEqual(result2);
  })

  it(`can handle negative addends`, () => {
    const numbers1 = [
      '48',
      '53',
      '12',
    ]

    const result1 = [
      '47',
      '52',
      '11',
    ]

    const numbers2 = [
      '58',
      '309',
      '87',
      '1006'
    ]

    const result2 = [
      '52',
      '303',
      '81',
      '1000'
    ]

    expect(addToMultiDigitNumbers(-1, numbers1)).toEqual(result1);
    expect(addToMultiDigitNumbers(-6, numbers2)).toEqual(result2);
  })
})

describe('Faqtory', () => {
  it(`returns an object`, () => {
    const faqtory = Faqtory()
    expect(typeof faqtory).toBe('object')
  })

  it(`begins with a questions property set to an empty array`, () => {
    const faqtory = Faqtory()
    expect(Array.isArray(faqtory.questions)).toBe(true);
    expect(faqtory.questions.length).toBe(0)
  })
});

describe('Faqtory.addQuestion', () => {
  it(`adds a question object with the correct text to the questions array`, () => {
    const faqtory = Faqtory();
    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('How can I help?');
    faqtory.addQuestion('What does this cost?');
    expect(faqtory.questions[0].text).toBe('What is your site all about?');
    expect(faqtory.questions[1].text).toBe('How can I help?');
    expect(faqtory.questions[2].text).toBe('What does this cost?');
  })

  it(`gives the question object a default status of unanswered`, () => {
    const faqtory = Faqtory();
    const question1 = 'What is your site all about?';
    const question2 = 'How can I help?';
    const question3 = 'What is your site all about?';

    faqtory.addQuestion(question1);
    faqtory.addQuestion(question2);
    faqtory.addQuestion(question3);
    expect(faqtory.questions[0].answered).toBe(false);
    expect(faqtory.questions[1].answered).toBe(false);
    expect(faqtory.questions[2].answered).toBe(false);
  })

  it(`gives the added questions 0-based ids`, () => {
    const faqtory = Faqtory();
    const question1 = 'What is your site all about?';
    const question2 = 'How can I help?';
    const question3 = 'What is your site all about?';
    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('How can I help?');
    faqtory.addQuestion('Why did you start this site?');
    expect(faqtory.questions[0].id).toBe(0);
    expect(faqtory.questions[1].id).toBe(1);
    expect(faqtory.questions[2].id).toBe(2);
  })
});

describe('Faqtory.answerQuestion', () => {
  it(`adds the given text as an answer to the question with the given id`, () => {
    const faqtory = Faqtory();
    faqtory.questions = [
      {
        id: 0,
        answered: false,
      },
      {
        id: 1,
        answered: false,
      },
    ]

    faqtory.answerQuestion(0, `It's about MAKING MONEY for yourself.`);
    faqtory.answerQuestion(1, `To MAKE MONEY for ourselves.`);

    expect(faqtory.questions[0].answer).toBe(`It's about MAKING MONEY for yourself.`)
    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })

  it(`does not answer already-answered questions`, () => {
    const faqtory = Faqtory();
    faqtory.questions = [
      {
        answer: `It's about MAKING MONEY for yourself.`,
        answered: true,
        id: 0
      },
      {
        answer: `To MAKE MONEY for ourselves.`,
        answered: true,
        id: 1
      },
    ]

    faqtory.answerQuestion(0, `answered again?`);
    faqtory.answerQuestion(1, `don't answer again`);

    expect(faqtory.questions[0].answer).toBe(`It's about MAKING MONEY for yourself.`)
    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })

  it(`sets any answered question's answered property to true`, () => {
    const faqtory = Faqtory();
    faqtory.questions = [
      {
        id: 0,
        answered: false,
      },
      {
        id: 1,
        answered: false,
      },
      {
        id: 2,
        answered: false,
      },
    ]

    faqtory.answerQuestion(0);
    faqtory.answerQuestion(1);
    faqtory.answerQuestion(2);

    expect(faqtory.questions[0].answered).toBe(true);
    expect(faqtory.questions[1].answered).toBe(true);
    expect(faqtory.questions[2].answered).toBe(true);
  })
});
