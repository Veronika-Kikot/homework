// // Change code below this line
// function sayHi() {
// console.log("Hello, this is my first function!");
// }
// sayHi();



// -----
// // Change code below this line
// function add(a,b,c) {
//     console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   // Change code below this line

// return a+b+c;

//   // Change code above this line
// }

// let result = add(2, 5, 8); // 15

// add(15, 27, 10)
// console.log(result);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// console.log(add(1, 3, 2));


// --------------------
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//     return message;
    
// }
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));


// --------------
// console.log(Math.random())
// let computerChoise = "";
// const number = Math.random();
// if (number < 0.33) {
//     computerChoise = 'stone';
// } else if(number >= 0.33 && number <= 0.66) {
//     computerChoise = 'scissors';
// } else {
//     computerChoise = 'paper';
// }

// let userChoise = prompt('Enter your variant');

// if (userChoise === computerChoise) {
//     console.log('Draw');
// } else if ( (userChoise === 'scissors' && computerChoise === 'paper') || (userChoise === 'stone' && computerChoise === 'scissors') || (userChoise === 'paper' && computerChoise === 'stone')) {
//     console.log('You WON');
// } else {
//     console.log(`Computer WON he's choose ${computerChoise}`);
// }

// --------------------

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));
// console.log(calculateTotalPrice(2, 200));

// --------
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


//   // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// ---
// function isAdult(age) {
//   // Change code below this line
//   const passed = age>=20;

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));



//
// function checkAge(age) {
//   let message;

//   if (age>=20) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(14));
// console.log(checkAge(8));
// console.log(checkAge(37));



//
// function checkStorage(available, ordered) {
//   let message;
//   //Change code below this line
//   if (available < ordered) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// --------------
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// -----
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";

//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));



//-----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// -----
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));



// -----
// function isNumberInRange(start, end, number) {
//   const isInRange =number > start && number < end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));


// -----
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType ==="pro" || subType ==="vip"; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));


// -----

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));


// -----
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else{
//     discount = GOLD_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));


// -----
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

// //   if (ordered > available) {
// //     message = "Not enough goods in stock!";
// //   } else {
// //     message = "The order is accepted, our manager will contact you";
// //   }
// message = ordered > available? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));


// ----------------------------------------------------------------
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//      case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));


// -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //   }
//     switch (password) {
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break
//         case null:
//             message = "Canceled by user!";
//             break
//         default:
//             message = "Access denied, wrong password!";
// }
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//-----
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//     switch (country) {
//         case "China":
//             message = "Shipping to China will cost 100 credits";
//             break
//         case "Chile":
//             message = "Shipping to Chile will cost 250 credits";
//             break
//         case "Australia":
//             message = "Shipping to Australia will cost 170 credits";
//             break
//         case "Jamaica":
//             message = "Shipping to Jamaica will cost 120 credits";
//             break
//         default:
//             message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));


// -----
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));


// -----
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength -1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);


// -----
// function getSubstring(string, length) {
//   const substring = string.slice(0, length ); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));


// -----
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//     //result = message.lenght < maxLength? message.slice(0) : (message.slice(0, maxLength));
    
// if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + "...";
// } else {
//     result = message;
// }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));


// -----
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));


// -----
// function checkForName(fullName, name) {
//  const result = fullName.includes(name);// Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));


// -----
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
// result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam") && message.toLowerCase().includes("sale")
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));



// -----
// function checkAge(age) {
//   if (age >= 15) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));



// -----
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

  
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


////////////////////////////////
// function checkStorage(available, ordered) {
//   // Change code below this line
//   let message;

//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
//   // Change code above this line
// }



// -----
// checkStorage(100, 50)
// function checkStorage(available, ordered) {
//   // Change code below this line
 
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
 
//   // Change code above this line
// }
// console.log(checkStorage());
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));


// -----
// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);



// -----
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


// -----
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);


// -----
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);


// -----
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// console.log(lastElementIndex);


// -----
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0]
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];

//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// -----
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));


// -----
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const messageArrays = message.split(" ");
// const messageIndex = messageArrays.length;
//   const cost = messageIndex * pricePerWord;
//   return cost;

//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));


// -----
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


//-----
// function slugify(title) {
//   // Change code below this line
  
//   let result = title.toLowerCase();
//   let split = result.split(" ");
//   let slug = split.join("-")
//     // Change code above this line
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));


//-----
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);


// -----
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
//  // Change this line
// console.log(allClients);
 

// -----
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const array = firstArray.concat(secondArray);
//   const result = array.slice(0,maxLength);
//   return result;


//     // Change code above this line
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// console.log(makeArray(["Mango"], ["Poly", "Ajax", "Chelsea"], 2));


 // -----
//  const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// -----
// function calculateTotal(number) {
//  // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i
// }
  
// return sum;
//   // Change code above this line
// }

// console.log(calculateTotal(7));


////////////////////////////////
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



// -----
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i+=1) {
//     total += order[i];
//   }
  
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// -----!!!!!
// function findLongestWord(string) {
//   // Change code below this line
// const stringSplit = string.split(' ');
//   let total = stringSplit[0];
//   for (let max of stringSplit) {
//     if (max.length > total.length) [
//       total = max
//    ]
//   }
//   return total;

//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))


// -----!!!!!!!
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));


// -----!!!!
// function filterArray(numbers, value) {
//    // Change code below this line
// let filter = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     filter.push(numbers[i]);
//   }
  
// }
// return filter;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// -----
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));


// ---!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function getCommonElements(array1, array2) {
//   // Change code below this line

// let newArray = [];
//   for (let i = 0; i < array1.length; i+=1) {
//     if (array2.includes(array1[i])) {
//   newArray.push(array1[i]);
// }
//   }
//     return newArray;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));


// -----
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
// for (let i of order) {
//     total += i;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// -----!!!!!
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }
// for (let i of numbers) {
   
//     if (i > value) {
//       filteredNumbers.push(i);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));


// -----
// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;



// -----
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let numbers = [];
//   for (let i = start; i <= end; i += 1){
//    if (i % 2 === 0) {
//   numbers.push(i);
// }
//   }
 
//   return numbers;
//     // Change code above this line
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(7, 7));



// -----
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);


// -----
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   // let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//        return i;
      
//     }
//   }
  
//   // return number;
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));



// -----
// function includes(array, value) {
//   // Change code below this line
// let result = array.includes(value)
//   // Change code above this line
//   return result;
// }

// console.log(includes([1, 2, 3, 4, 5], 3))
// function includes(array, value) {
//   // Change code below this line
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//     // Change code above this line
      
//   };
// return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));