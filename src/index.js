/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(`The awesome coders for today is the driver ${driver} and the navigator ${navigator}`);
};
theCoders('Jennie', 'Alfons');
/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

theCoders('Jennie');

/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
const longestName = (driver, navigator) => {
  if (driver.length > navigator.length) {
    console.log('The driver has the longest name.');
  } else if (navigator.length > driver.length) {
    console.log('The navigator has the longest name.');
  } else {
    console.log('The driver and the navigator have equally long names.');
  }
};
longestName('Bobby Thomson', 'Johny Bravo');

/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its userAge, then depending on the userAge will alert back different messuserAges such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

const userAgeCheck = () => {
  let userAge = prompt('How old are you?');

  if (userAge >= 1 && userAge <= 6) {
    alert("Aww, you're tiny! No driving — but you can definitely master a tricycle.");
  } else if (userAge >= 7 && userAge <= 12) {
    alert('Still too young to drive, but old enough to beat adults at video games.');
  } else if (userAge >= 13 && userAge <= 20) {
    alert('Teen energy detected. Driving soon… but maybe practice patience first.');
  } else if (userAge >= 21 && userAge <= 25) {
    alert("You're legal, you're grown, and you're allowed to drive… just not like Fast & Furious.");
  } else if (userAge >= 26 && userAge <= 35) {
    alert('Prime adult mode activated. You can drive, pay bills, and question your life choices.');
  } else if (userAge >= 36 && userAge <= 50) {
    alert('Experienced adult! You drive with one hand and judge everyone else on the road.');
  } else if (userAge >= 51 && userAge <= 65) {
    alert("You've been driving longer than most apps have existed. Respect.");
  } else if (userAge > 65) {
    alert('65+! A legend on the road. Cruise control recommended.');
  } else {
    alert('Hmm… that does not look like a real age. Please enter a valid number.');
  }
};

userAgeCheck();

/*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
const calculationTest = () => {
  const mathChoice = prompt(
    'What mathematical operation would you like to practice?\n' +
      '\n' +
      '   We have the following options:\n' +
      '     1. Addition\n' +
      '     2. Subtraction\n' +
      '     3. Multiplication\n' +
      '     4. Division\n' +
      '\n' +
      'Please enter the number of your choice.',
  );

  let userAnswer;
  let correctAnswer;

  switch (parseInt(mathChoice)) {
    case 1:
      userAnswer = prompt('What is 5 + 6?');
      correctAnswer = 5 + 6;
      break;
    case 2:
      userAnswer = prompt('What is 10 - 4?');
      correctAnswer = 10 - 4;
      break;
    case 3:
      userAnswer = prompt('What is 7 * 3?');
      correctAnswer = 7 * 3;
      break;
    case 4:
      userAnswer = prompt('What is 20 / 5?');
      correctAnswer = 20 / 5;
      break;
    default:
      alert('Invalid choice. Please refresh the page and try again.');
      return;
  }

  if (parseInt(userAnswer) === correctAnswer) {
    alert('Yay! Correct');
  } else {
    alert(`Noooo, the answer is ${correctAnswer}`);
  }
};

calculationTest();

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
