const numbers = [1, 10, 20, 50];
// Tên mảng: numbers
// Phần tử trong mảng:
// --> độ dài của mảng: numbers.length là tổng số phần tử trong mảng
const number_0 = numbers[0];
console.log("mảng số", numbers);
console.log("phần tử đầu tiên", number_0);

// Cách khai báo mảng:
// Cách 1:
const students = ["Thái", "Hiệu", "Hương", "Việt", "Viễn", "Tuấn"];

const student_2 = students[2];

console.log("Mảng sinh viên", students);
console.log("Sinh viên", student_2);

// Cách 2:
const cars = new Array("BMW", "Vinfast", "Lexus");
console.log("cars", cars);
// Gán lại phần tử trong mảng
cars[1] = "Toyota";

console.log("cars 2", cars);

cars[3] = "Honda";

console.log("cars 3", cars);

// Thêm phần tử mới cho mảng
students[students.length] = "Quyết";

// Duyệt qua các phần tử trong mảng
for (let i = 0; i < students.length; i++) {
  console.log("Sinh viên thứ " + (i + 1) + " là " + students[i]);
}

const emptyArr = [];

console.log("chiều dài của mảng emptyArr", emptyArr.length);

function ex_01() {
  const resultElement = document.querySelector(".result-ex-01");

  let resultContent = "";

  //   Duyệt qua các phần tử trong mảng
  for (const student of students) {
    resultContent += `<li>${student}</li>`;
  }

  resultElement.innerHTML = resultContent;
  console.log(resultContent);
}
const fruits = ["banana", "lemon", "mango"];
function ex_02() {
  const fruitInput = prompt("Nhập vào một trái cây");
  const lengthFuit = fruits.push(fruitInput);
  console.log(fruits);
  console.log("length", lengthFuit);
}

function ex_02_1() {
  const users = [];
  // Nhập vào thông tin cho đến khi --> cancel mới ngừng nhập. Những thông tin đã nhập đưa vào mảng --> hiển thị
  let username;
  console.log(username === null);
  //   B1: Tạo vòng lặp vô hạn cho đến khi cancel
  while (username !== null) {
    username = prompt("Nhập vào user name");

    // B2: Thêm user name vào mảng
    if (username !== null) {
      users.push(username);
    }
  }
  //   log
  console.log(users);
  const resultElement = document.querySelector(".result-ex-02");
  let resultContent = "";
  //   Duyệt qua các phần tử trong mảng
  for (const user of users) {
    resultContent += `<li>${user}</li>`;
  }
  resultElement.innerHTML = resultContent;
}

function ex_03() {
  const stringCar = cars.join("---");
  console.log(stringCar);
}

function ex_04() {
  const a = [1, 2, 3];
  const b = [];

  const c = a.concat(b);
  c[0] = 10;
  console.log("Kiểm tra a", a);
  console.log("Kiểm tra c", c);

  const d = a;
  d[2] = 200;
  console.log("Kiểm tra a", a);
  console.log("Kiểm tra c", c);
}

function ex_05() {
  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb"); // Thêm

  months.splice(2, 1, "May"); // Thay thế
  months[10] = "test";
  months.splice(months.length, 1);
  console.log(11111, months.splice(2, 0, "May"));

  for (const month of months) {
    console.log(month);
  }
}

// Mảng 2 chiều

const location_1 = [
  [10, 20], //0
  [50, 5], // 1
  [10, 30], // 2
];
const TreeDimesion = [
  [
    [1, 2, 4],
    [2, 4, 6],
  ],
  [
    [1, 2, 4],
    [2, 4, 6],
  ],
];
const check_number = location_1[1][0];

function ex_06() {
  //   const newArr = [];
  let tableContent = "";
  for (let row = 1; row <= 10; row++) {
    //     const arr = [];
    let tdElements = "";
    for (let col = 1; col <= 9; col++) {
      tdElements += `<td> ${col} x ${row} = ${row * col}</td>`;
    }
    tableContent += "<tr>" + tdElements + "</tr>";
  }

  //   Hiển thị
  const resultElement = document.querySelector(".result-ex-06");
  resultElement.innerHTML = tableContent;
}

function lab_01() {
  // B1: Nhập yêu cầu
  const string = prompt("Nhập vào chuỗi số cách nhau bởi dấu phẩy (,)");

  //   B2: chuyển thành array
  const covertArray = string.split(",", 10);
  console.log(1111, covertArray);
  if (covertArray.length < 10) {
    alert("Phải nhập 10 số");
    return;
  }
  let sum = 0;
  let result = "";
  for (let index = 0; index < covertArray.length; index++) {
    const number = Number(covertArray[index]);
    if (number >= 10) {
      sum++;
      result += number + "  ";
    }
  }
  alert("Số lớn hơn 10 là: " + sum + " là:" + result);
}

function lab_02() {
  const string = prompt("Nhập vào chuỗi số cách nhau bởi dấu phẩy (,)");

  const numbers = string.split(",");
  let max_index = 0;
  let max = Number(numbers[max_index]);

  for (let i = 0; i < numbers.length; i++) {
    const number = Number(numbers[i]);
    if (max < number) {
      max = number;
      max_index = i;
    }
  }
  console.log(numbers);
  console.log("Số lớn nhất trong mảng là: " + max + " tại vị trí " + max_index);
}

function lab_02_1() {
  const string = prompt("Nhập vào chuỗi số cách nhau bởi dấu phẩy (,)");

  const numbers = string.split(",");
  let max_index = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
    if (numbers[max_index] < numbers[i]) {
      max_index = i;
    }
  }
  console.log(numbers);
  console.log(
    "Số lớn nhất trong mảng là: " +
      numbers[max_index] +
      " tại vị trí " +
      max_index
  );
}

function ex_n() {
  const numbers = [1, 34, 45, 6, 7, 74, 3];

  for (let i = 0; i < numbers.length; i++) {
    console.log("Vị trí thứ " + i + " là phần tử: " + numbers[i]);
  }
}

ex_n();

function lab_03() {
  const string = prompt("Nhập vào chuỗi số cách nhau bởi dấu phẩy (,)");

  const numbers = string.split(",");
  const numbersReverse = [];
  for (let index = numbers.length - 1; index >= 0; index--) {
    numbersReverse.push(numbers[index]);
  }

  console.log("Chuỗi số đảo ngược", numbersReverse);
}
