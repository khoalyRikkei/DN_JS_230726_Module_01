// Function thông thường

function sum(a, b) {
  //   console.log(a + b);
  return a + b;
}

// Arrow function

const sum_2 = (a, b) => a + b;

const test_1 = sum(10, 20);

console.log("test 1", test_1);
console.log("test 2", sum_2(4, 5));
console.log("test 2", sum_2(4, "Hello"));

// Kiểm tra phải số hay không

function isNumber(data) {
  const convertNumber = Number(data);
  //   if (isNaN(convertNumber) === false) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // return !isNaN(convertNumber)

  return isNaN(convertNumber) ? false : true;
}
function isNumber(data) {
  const convertNumber = Number(data);

  return isNaN(convertNumber) ? false : true;
}
function isNumber(data) {
  const convertNumber = Number(data);
  if (isNaN(convertNumber)) {
    return false;
  }

  return true;
}

console.log("check number", isNumber("hihi"));

function lab_01() {
  // B1: Nhập vào chuỗi số
  const string = prompt('Nhập vào một chuỗi số cách nhau bới dấu "-"');
  console.log("Kiểm tra chuỗi đã nhập", string);

  //   B2: Chuyển đổi chuỗi thành mảng
  const numbers = string.split("-");
  console.log("Kiểm tra chuỗi số", numbers);

  //   //   Chuyển string trong phần tử thành số
  //   convertNumber(numbers);

  //   B3: Lấy kết quả
  const min = findMin(numbers); // findMin là 1 hàm giúp tìm ra số bé nhất trong 1 mảng

  //   B4: Hiển thị kết quả
  console.log("Số bé nhất trong chuỗi là ", min);
}

function findMin(input) {
  let min = Number(input[0]);
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i]) < min) {
      min = Number(input[i]);
    }
  }
  return min;
}

function convertNumber(array) {
  for (let index = 0; index < array.length; index++) {
    array[index] = Number(array[index]);
  }
}

const data = ["1", "2", 5];
console.log(111, data);
convertNumber(data);
console.log(2222, data);

// Kiểm tra số nguyên tố
function lab_02() {
  // B1: Nhập vào 1 số
  const number = Number(prompt("Nhập một số bất kỳ!!"));

  //   Hiển thị
  isPrime(number)
    ? alert("Số " + number + " là số nguyên tố")
    : alert("Số " + number + " là không số nguyên tố");
}

function isPrime(num) {
  // Tất cả số bé hơn 2 đều không phải là số nguyên tố
  if (num < 2) {
    return false;
  }

  //   Lặp qua vòng lặp để kiểm tra xem có số đó có chia hết số nào từ 2 -> < nó hay không
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      // Nếu chia hết --> nó không phải là số nguyên tố
      return false;
    }
  }
  return true;
}

function lab_03() {
  // B1: Nhập chuỗi số
  const string = prompt('Nhập vào chuỗi số bất kỳ cách nhau bằng dấu "-"');

  // B2: Chuyển chuỗi số thành array
  const numbers = string.split("-");

  // B3: Chuyển các phần tử trong numbers thành số
  convertNumber(numbers);

  // B4: Lặp qua từng phần tử để kiểm tra
  let result = "";
  for (const number of numbers) {
    // B5: kiểm tra number có phải số nguyên tố hay không
    if (isPrime(number)) {
      result += number + " ";
    }
  }

  //   B6: Hiển thị
  result
    ? alert("Chuỗi đã cho có các số nguyên tố là: " + result)
    : alert("Không có số nguyên tố nào trong chuỗi");
}
