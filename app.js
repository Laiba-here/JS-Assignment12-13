//                .... QUESTION 1 ....
// function checkCharacter() {
//     let char = document.getElementById("character").value;
//     if (char.length !== 1) {
//         document.getElementById("resultMessage").innerHTML = "Please enter a single character.";
//         return;
//     }
//     let asciiCode = char.charCodeAt(0);
//     if (asciiCode >= 48 && asciiCode <= 57) {
//         document.getElementById("resultMessage").innerHTML = "The character '" + char + "' is a number.";
//     }
//     else if (asciiCode >= 65 && asciiCode <= 90) {
//         document.getElementById("resultMessage").innerHTML = "The character '" + char + "' is an uppercase letter.";
//     }
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         document.getElementById("resultMessage").innerHTML = "The character '" + char + "' is a lowercase letter.";
//     }
//     else {
//         document.getElementById("resultMessage").innerHTML = "The character '" + char + "' is neither a number nor an uppercase or lowercase letter.";
//     }
// }

//           .... QUESTION 2 ....
// function compareIntegers() {
//     let firstNumber = parseInt(document.getElementById("firstNumber").value);
//     let secondNumber = parseInt(document.getElementById("secondNumber").value);
//     if (firstNumber > secondNumber) {
//         document.getElementById("resultMessage").innerHTML = "The larger number is: " + firstNumber;
//     } else if (secondNumber > firstNumber) {
//         document.getElementById("resultMessage").innerHTML = "The larger number is: " + secondNumber;
//     } else {
//         document.getElementById("resultMessage").innerHTML = "Both numbers are equal.";
//     }
// }

//   .... QUESTION 3 ....
// function checkVowel() {
//     let char = document.getElementById("character").value.toLowerCase();
//     if (char.length !== 1) {
//         document.getElementById("resultMessage").innerHTML = "Please enter a single character.";
//         return;
//     }
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(char)) {
//         document.getElementById("resultMessage").innerHTML = "True - The character '" + char + "' is a vowel.";
//     } else {
//         document.getElementById("resultMessage").innerHTML = "False - The character '" + char + "' is not a vowel.";
//     }
// }

 //          .... QUESTION 4 ...
//  function checkNumber() {
//     let number = parseFloat(document.getElementById("number").value);
//     if (number > 0) {
//         document.getElementById("resultMessage").innerHTML = "The number is positive.";
//     } else if (number < 0) {
//         document.getElementById("resultMessage").innerHTML = "The number is negative.";
//     } else {
//         document.getElementById("resultMessage").innerHTML = "The number is zero.";
//     }
// }

//            .... QUESTION 5 ....
// let correctPassword = "12345"; 
//         function validatePassword() {
//             let userPassword = document.getElementById("passwordInput").value;
//             if (userPassword === "") {
//                 document.getElementById("resultMessage").innerHTML = "Please enter your password.";
//             } 
//             else if (userPassword === correctPassword) {
//                 document.getElementById("resultMessage").innerHTML = "Correct! The password you entered matches the original password.";
//             } 
//             else {
//                 document.getElementById("resultMessage").innerHTML = "Incorrect password.";
//             }
//         }

//    .... QUESTION 6 .... 
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting); 

