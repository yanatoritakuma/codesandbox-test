// let val2 = "let2";
// console.log("val2");

// const val4 = {
//   name: "aaa",
//   age: 24
// };
// val4.name = "iiii";
// val4.addre = "tokyo";
// console.log(val4);

// const test = ["dog", "cat"];
// test[0] = "bard";
// test.push("monkey");
// console.log(test);

// const name = "takuma";
// const age = 24;
// const message = `名前は${name}です。年齢は${age}です。`;
// console.log(message);

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2で"));

// const func3 = (num1, num2) => {
//   return num1 + num2
// };
// console.log(func3(10, 20));

// const my = {
//   name: "takuma",
//   age: "24"
// };
// const message = `名前は${my.name}です。年齢は${my.age}歳です。`;
// console.log(message);

// const { name, age } = my;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const my = ["takuma", 24];
// const message3 = `名前は${my[0]}年齢は${my[1]}歳です。`;
// console.log(message3);
// const [name, age] = my;
// const message4 = `名前は${name}年齢は${age}歳す。`;
// console.log(message4);

// const sayHellow = (name = "ゲスト") => console.log(`こんにちわ${name}さん`);
// sayHellow();

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

const nameArr = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((n) => {
//   return n % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "鈴木") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1200;

// const forNum = typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(forNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲";
// };
// console.log(checkSum(50, 10));

const num = null;
const fee = num || "金額未設定";
console.log(fee);
