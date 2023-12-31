// //determines if there exists an element in the array of numbers
// // that the sum of the elements on its left
// // is equal to the sum of the elements on its right.

// // if NO elements to the left/right, their sum is 0.

// // Print the index in between OR
// // Print "no" if no such index.

// function equalSums(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       leftSum += arr[j];
//     }
//     for (let y = i + 1; y < arr.length; y++) {
//       rightSum += arr[y];
//     }
//     if (leftSum == rightSum) {
//       console.log(i);
//       return; //This is useful if you're only interested in finding a single index that satisfies the condition and you want to exit early for efficiency.
// //Also, return ends the entire function if the condition is met.
//     }
//   }
//   console.log("no");
// }
// equalSums([1, 2, 3, 3]); //2
// equalSums([1, 2]); //no
// equalSums([1]); //0
// equalSums([1, 2, 3]); //no
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); //3

function equalSums(array) {
  for (let i = 0; i < array.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let leftStart = i - 1; leftStart >= 0; leftStart--) {
      leftSum += array[leftStart];
    }
    for (let rightStart = i + 1; rightStart < array.length; rightStart++) {
      rightSum += array[rightStart];
    }
    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
  }
  console.log("no");
}
equalSums([1, 2, 3, 3]);
// equalSums([1, 2]);
// equalSums([1]);
// equalSums([1, 2, 3]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
