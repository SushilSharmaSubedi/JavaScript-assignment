let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.table(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.splice(4, 3);
console.table(arr); // [1, 2, 3, 4, 8, 9, 10]
arr.splice(4, 0, 11, 12, 13, 14, 15);
console.table(arr); // [1, 2, 3, 4, 11, 12, 13, 14, 15, 8, 9, 10]
