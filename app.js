// ******************** Assignment 5 **********************

// -------------------- Chapter 1 ----------------

// Question 1
// var multiArr = [[1.1, 1.2, 1.3], [2.1, 2.2, 2.3], [3.1, 3.2, 3.3]];
// document.write(multiArr)

// Question 2
// var multiArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (var i = 0; i < multiArr.length; i++) {
//     for(var j = 0; j < multiArr[i].length; j++){
//         document.write(multiArr[i][j], "  ");
//     }
//     document.write("<br />")
// }

// Question 3
// for(var i = 1; i <= 10; i++){
//     document.write(i, "<br />");
// }

// Question 4
// var num = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length multiplication table");
// document.write("Multiplication table of ", num);
// document.write("<br /> Length ", length, "<br />");
// for (var i = 1; i <= length; i++) {
//     document.write("<br />", num, " X ", i, " = ", num * i);
// }

// Question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i], "<br />");
// }
// for (var idx = 0; idx < fruits.length; idx++) {
//     document.write("<br /> Element at index ", idx, " is ", fruits[idx]);
// }

// Question 6
// document.write("<b>Counting:</b> <br /> <br />");
// for (var count = 1; count <= 15; count++) {
//     document.write(count, ", ")
// }
// document.write("<br /> <br /> <b>Reverse counting:</b> <br /> <br />");
// for (var rCount = 10; rCount >= 1; rCount--) {
//     document.write(rCount, ", ")
// }
// document.write("<br /> <br /> <b>Even:</b> <br /> <br />");
// for (var e = 0; e <= 20; e = e + 2) {
//     document.write(e, ", ")
// }
// document.write("<br /> <br /> <b>Odd:</b> <br /> <br />");
// for (var o = 1; o < 20; o = o + 2) {
//     document.write(o, ", ")
// }
// document.write("<br /> <br /> <b>Series:</b> <br /> <br />");
// for (var s = 2; s <= 20; s = s + 2) {
//     document.write(s, "k, ")
// }

// Question 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var found = false;
// for (var i = 0; i < A.length; i++){
//     if(A[i] == item){
//         found = true;
//     }
// }
// if(found){
//     document.write(item, " is <b>available</b> at index ", i, " in our bakery");
// }
// else{
//     document.write("We are sorry. ", item, " is <b>not available</b> in our bakery");
// }

// Question 8
// var A = [24, 53, 78, 91, 12];
// var largest = 0;
// for(var i = 0; i < A.length; i++){
//     if(largest < A[i]){
//         largest = A[i];
//     }
// }
// document.write("Array items: ", A);
// document.write("<br />The largest number is ", largest);

// Question 9
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (smallest > A[i]) {
//         smallest = A[i];
//     }
// }
// document.write("Array items: ", A);
// document.write("<br />The largest number is ", smallest);

// Question 10
// for (var i = 5; i <= 100; i = i + 5) {
//     document.write(i, ", ");
// }