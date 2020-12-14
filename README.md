# Term 1 Final Exam

### General Tips

* **You can absolutely research your JavaScript.** You don't have to have how `.slice` works memorized. It may worm its way into your brain eventually, but for many developers, they don't want to or can't memorize code; it's always a friendly internet search away, right?
* This is a very challenging set of exercises, and **you are not expected to finish**. Don't get discouraged!
* Make sure you read through each problem carefully (here and in the tests themselves) and pay attention to your terminal's output to see what was the function's expected output and what was received. Better to spend a couple minutes being sure you understand each problem than waste fifteen minutes or more on a misunderstanding of the problem!
* **You can go in any order.** Don't stare at one problem for too long! Each problem 1/4 of the way completed tells us more about how you're doing than one problem 3/4 completed.
* You can also do the tests **within** a problem in any order. **Think of each check-mark as an individual question.** These sub-problems are often dealing with different kinds of inputs, and really are unique challenges even within their problem. Celebrate when you get one, and when you don't, move on to the next.
* And if you're halfway through the problem and feeling stuck, **move on**. You don't have to get an exercise's whole set of tests green.
* Relax and have fun. Here are your tasks, and we'll see you on the other side!


### Problem Descriptions

* `makeParagraph` - Makes the given sentences (an array of strings) into a paragraph by combining them into one string with a space in between each. Does not put a space after the last. (Which makes sense if you think about it.)

``` javascript
  makeParagraph([
      'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts.',
      'The Ministry of Peace, which concerned itself with war.',
      'The Ministry of Love, which maintained law and order.',
      'And the Ministry of Plenty, which was responsible for economic affairs.',
      'Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.',
    ])

// outputs:
'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'
```

* `totalScore` - sums the scores from every `level` object in the given list. If a `multiplier` property is on the `level` object, that score is multiplied by it first. If a second `bonus` parameter is passed in, that is added as well, but not multiplied.

``` javascript
totalScore([
    {
        score: 5,
    },
    {
        score: 5,
        multiplier: 4
    }
], 50)
    
// outputs:
75
```

* `cipher` - given a string, returns that string with every letter rotated by one. That is, if a letter in the string is `a`, the resulting string should have `b` in its place, and if the letter is `n`, the resulting string should have `o` in its place. It does wrap around; if given a `z`, we should get an `a` in the result.

``` javascript
cipher('hello'); // -> 'ifnmp'
cipher('zebra'); // -> 'afcsb'
```

* `womensAverageSalary` - given an array of people objects passed in, gets a mean average of the `salary` properties of those people whose `gender` property is set to `female`.

``` javascript
womensAverageSalary([
      {
        name: 'Colleen',
        gender: 'female',
        salary: 70,
      },
      {
        name: 'Hannah',
        gender: 'female',
        salary: 66,
      },
      {
        name: 'Sam',
        gender: 'male',
        salary: 100,
      },
])

// outputs:
68
```

* `notMarried` - given an array of people objects, returns the people whose `status` is NOT set to `married`.

``` javascript
notMarried([
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
        status: 'divorced',
      },
      {
        name: 'Steve',
        status: 'married',
      },
])

// outputs:
[
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
        status: 'divorced',
      },
]
```

* `addToMultiDigitNumbers` - given a number in NUMBER format representing an addend and an array of numbers in STRING format, returns an array of numbers (still in STRING format!) that have had that addend added to them.

``` javascript
addToMultiDigitNumbers(3, [
      '50',
      '500',
      '32',
]);

// outputs:
[
      '53',
      '503',
      '35',
]
```

* **EXTRA CREDIT** `Faqtory` - a factory function that returns an object with methods for managing a FAQ list. It contains an array of questions set to empty to start with, an `addQuestion` method for adding questions to the list, and an `answerQuestion` method for answering those questions that have yet to be answered. See tests for details. **NOTE:** the questions being added are OBJECTS. Making a helper function that returns a question object may or may not be worth it, but either way, make sure those questions are objects! **HINT** the `id` of a new question can be set by looking at how many questions are already in the list. 
