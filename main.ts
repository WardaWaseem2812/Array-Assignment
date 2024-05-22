                            // ASSIGNMENT # 01 - ARRAYS
                        // WARDA WASEEM - THURSDAY 9 TO 12 

// Question 1: Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
let fruits : string[] = ["apple", "banana", "mango", "orange"];
console.log("Array of Fruits: ", fruits); 
// OUTPUT:  Array of Fruits:  [ 'apple', 'banana', 'mango', 'orange' ]


// Question 2: Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
let numbers : number[] = [10, 20, 30, 40];
console.log("Array of Numbers: ", numbers); 
// OUTPUT: Array of Numbers:  [ 10, 20, 30, 40 ]


// Question 3: Access the third element of the fruits array and assign it to a variable named thirdFruit.
let thirdFruit = fruits[2];
console.log("The Third Element of Fruits Array: ", thirdFruit); 
// OUTPUT: The Third Element of Fruits Array:  mango


// Question 4: Change the second element of the numbers array to 25.
numbers[1] = 25 ;
console.log("Now, the Second Element of Numbers Array: ", numbers);
// OUTPUT: Now, the Second Element of Numbers Array:  [ 10, 25, 30, 40 ]


// Question 5: Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log("Adding grape to the end of the array: ", fruits);
// OUTPUT: Adding grape to the end of the array:  [ 'apple', 'banana', 'mango', 'orange', 'grape' ]


// Question 6: Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let lastFruit = fruits.pop();
console.log("Removing the last element of fruits array: ", lastFruit);
// OUTPUT: Removing the last element of fruits array:  grape


// Question 7: Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let firstFruit = fruits.shift();
console.log("Removing the first element from fruits array: ", firstFruit);
// OUTPUT: Removing the first element from fruits array:  apple


// Question 8: Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("kiwi");
console.log("Adding Kiwi to the beginning of fruits array: ", fruits);
// OUTPUT: Adding Kiwi to the beginning of fruits array:  [ 'kiwi', 'banana', 'mango', 'orange' ]


// Question 9: Remove 2 elements from the fruits array starting from index 1 using the method.
fruits.splice(1,2);
console.log("Removing 2 elements starting from index 1: ", fruits);
// OUTPUT: Removing 2 elements starting from index 1:  [ 'kiwi', 'orange' ]


// Question 10: Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2,0,"pineapple","pear");
console.log("Inserting 2 elements at index 2: ", fruits);
// OUTPUT: Inserting 2 elements at index 2:  [ 'kiwi', 'orange', 'pineapple', 'pear' ]


// Question 11: Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits : string[] = fruits.slice(0,2);
console.log("Citrus Fruits: ", citrusFruits);
// OUTPUT: Citrus Fruits:  [ 'kiwi', 'orange' ]


// Question 12: Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let lastTwoFruits : string[] = fruits.slice(-2);
console.log("Last two elements of Fruits array: ", lastTwoFruits);
// OUTPUT: Last two elements of Fruits array:  [ 'pineapple', 'pear' ]