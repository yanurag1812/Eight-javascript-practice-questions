// question 1

const array1 = [9, 2, 3, 2, 6, 6];

const findFirstUnique = (arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        break;
      }
    }
    if (j == arr.length) {
      newArr.push(arr[i]);
    }
  }
  return `First unique value from given an array is ==> ${newArr[0]}`;
};

console.log(findFirstUnique(array1));

// question 2

const array = [1, 2, 3, 4, 5];
const position = 3;

const shiftArray = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop());
  }
  return `The shifted array is ==> ${arr}`;
};

console.log(shiftArray(array, position));
