//1. Khai báo và cách gọi Function

ex_01("red");
ex_01("green");

const area_01 = caclulateArea(5); // 5 được gọi đối số // argument
const area_02 = caclulateArea(10);

console.log("area", area_01);
console.log("area 2", area_02);
console.log(1111, ex_01());

function ex_01(color) {
  console.log("%c Hello world", `color:${color}`);
}
function caclulateArea(r) {
  const PI = 3.14;
  const area = PI * r * r;
  return area;
}

// 2. Ví dụ về tham số, đối số
function caclulateRectangleArea(width, height, test) {
  console.log("chiều rông", width);
  console.log("chiều cao", height);
  console.log("test", test);
  const area = width * height;
  return area;
}
const rectangle_1 = caclulateRectangleArea(10, 20);
const rectangle_2 = caclulateRectangleArea(50, 20);

console.log("Diện tích hình chữ nhật là", rectangle_1);
console.log("Diện tích hình chữ nhật là", rectangle_2);

const arr = [1, 4, 5];
console.log("check arr", arr);

const total_1 = getSum(arr);

console.log("kiểm tra sum", total_1);
console.log("check arr 2", arr);

function getSum(array) {
  let sum = 0;
  array[0] = 10;
  for (const number of array) {
    sum += number;
  }

  return sum;
}

let status_1 = true;
function change() {
  console.log(1111, status_1);
  status_1 = !status_1;
  return status_1;
}

console.log("change", change()); // false
console.log("change", status_1); //true

//3. Khai báo function

// 3.1 Biểu thức
const getData = function () {
  console.log("Đây là biểu thức hàm");
};

getData();

// 3.2 Immediately invoked function expression (IIFE)
(function (name) {
  console.log("Tên của bạn là " + name);
})("Khoa");

// 3.3 Arrow function

const handleAdd = (index) => {
  const data = ["Dog", "cat", "bird"];

  console.log("Đây là con ", data[index]);
};
handleAdd(1);

// arrow function rút gọn
const sumTwoNumber = (a, b) => a + b;

// Arrow function
const sumTwoNumber_2 = (a, b) => {
  return a + b;
};

// function thông thường
function sumTwoNumber_3(a, b) {
  return a + b;
}

// 3.3 Closures

function changeNumber() {
  let price = 1000;

  function increase() {
    price += price * 0.1;
    return price;
  }

  return increase;
}
const numbeTest = changeNumber();

console.log("1111", numbeTest);

// changeNumber();
console.log("check 1", numbeTest());
console.log("check 2", numbeTest());

console.log("check 3", numbeTest());
// function check() {
let count = 1;

function increase() {
  count++;
  return count;
}
// }

increase();
increase();
increase();

count = 10;
function user() {
  let username = "Tuấn";

  function changeName(name) {
    return (username = name);
  }

  return changeName;
}
const change_1 = user();
console.log(change_1("Khoa"));

// Callback function
function findA() {
  return 10;
}
function findB() {
  const b = findA() * 5;
  return b;
}
const caclulateArea_2 = (a, b) => {
  return a() + b();
};

const result = caclulateArea_2(findA, findB);

console.log(result, 111111111111111);
