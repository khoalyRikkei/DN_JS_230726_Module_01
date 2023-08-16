function ex_01() {
  for (let i = 0; i < 5; i++) {
    console.log("Lặp lần thứ:", i + 1);
  }
}

// Ví dụ hiển thị bảng cửu chương
function ex_02() {
  for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${6 * i}`);
  }
}

// Ví dụ hiển thị bảng cửu chương
function ex_03() {
  const number = Number(prompt("Nhập một số bất kỳ từ 1 --> 9"));

  if (number < 1 || number > 9 || isNaN(number)) {
    alert("Vui lòng nhập số từ 1 -> 9");
    return;
  }

  let result = "";
  for (let i = 1; i <= 10; i++) {
    result += `<p>${number} x ${i} = ${number * i}</p>`;
    console.log(`${number} x ${i} = ${number * i}`);
  }

  //   Hiển thị
  const resultElement = document.querySelector("#result-ex-03");
  resultElement.innerHTML = result;
}

function ex_04() {
  // Khối lệnh khởi tạo
  let i = 0;
  for (;;) {
    // Điều kiện lặp
    if (i >= 20) {
      break;
    }

    console.log(i);

    //   Khối lệnh thực thi sau kết thúc vòng lặp
    i++;
  }

  for (let i = 0; i <= 20; i++) {
    if (i == 10) {
      break;
    }
    if (i % 2 == 0) {
      console.log("Số chẵn:", i);
    } else {
      console.log("Số lẻ:", i);
    }
  }
}

function ex_04_1() {
  for (let i = 0; i <= 20; i++) {
    if (i == 10) {
      continue;
    }
    if (i % 2 == 0) {
      console.log("Số chẵn:", i);
    } else {
      console.log("Số lẻ:", i);
    }
  }
}

// WHILE

function ex_05() {
  let answer;

  while (!answer) {
    /// !undefined --> !false === true
    answer = confirm("Bạn còn tiền không?");
  }

  if (answer) {
    // answer === true

    alert("Cho tôi mượn 200k");
  }
}

// Tìm tổng 5 số chẵn đầu tiên
function ex_06() {
  let sum = 0;
  let count = 0;
  for (let i = 0; true; i += 2) {
    if (i % 2 == 0) {
      count++;
      sum += i;
    }
    if (count == 5) {
      break;
    }
  }
  console.log("Tổng 5 số chẵn đầu tiên là", sum);
}

function ex_06_1() {
  let sum = 0;
  let count = 0;
  let i = 0;
  while (count < 5) {
    console.log("count 1:", count);
    if (i % 2 == 0) {
      count++;
      console.log("count 2:", count);

      sum += i;
    }
    i++;
  }

  console.log("Tổng 5 số chẵn đầu tiên là", sum);
}

function ex_07() {
  const length = Number(prompt("Nhập độ dài tam giác"));
  let count = 0;
  let text = "";
  while (count < length) {
    text += '<hr width="' + count + '%">';
    count++;
  }
  document.getElementById("result-ex-07").innerHTML = text;
}

function ex_08() {
  let sum = 0;
  let number;
  do {
    number = parseInt(prompt("Enter a number"));
    sum += number;
  } while (number > 0);
  console.log("Sum", sum);
}

function ex_09() {
  for (let m = 1; m <= 9; m++) {
    console.log("Bảng cửu chương:", m);
    for (let i = 1; i <= 10; i++) {
      console.log(`${m} x ${i} = ${m * i}`);
    }
  }
}

// bài tập 1:

function lab_01() {
  for (let i = 0; i < 10; i++) {
    // parseInt là lấy phần nguyên  hoặc Math.floor() --> làm tròn xuống
    // Math.random() --> cho một số ngẫu nhiên từ 0 --> < 1
    const r = parseInt(Math.random() * 255);
    const g = parseInt(Math.random() * 255);
    const b = parseInt(Math.random() * 255);

    const color = `rgb(${r},${g}, ${b})`;

    console.log(color);
    //   Tạo màu cho console
    console.log("%c Rikkei Academy!!!", `color:${color}`);
  }
}

function lab_02() {
  // Có 4 trường hợp
  //1. chia hết 3 và 5 --> FizzBuzz
  // 2. Chia hết cho 3  --> Fizz
  // 3. CHia hết cho 5 --> Buzz
  // 4. còn lại --> i

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function lab_02_1() {
  for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 == 0) {
      result += "Fizz";
    }
    if (i % 5 == 0) {
      result += "Buzz";
    }
    console.log(result ? result : i);
  }
}

// Kiểm tra số nguyên tố
function lab_03() {
  const number = Number(prompt("Nhập một số lớn hơn 1"));
  //   Kiểm tra dữ liệu đầu vào
  if (number < 2) {
    alert("Số đã cho không phải là số nguyên tố");
    return; //kết thúc function
  }
  //   Nếu thỏa thì tiếp tục
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false; // gán cờ
      break;
    }
  }

  if (isPrime) {
    // số nguyên tố
    alert("Số " + number + " là số nguyên tố");
  } else {
    alert("Số " + number + " không phải là số nguyên tố");
  }
}

function lab_03_1() {
  const number = Number(prompt("Nhập một số lớn hơn 1"));
  const resultElement = document.querySelector("#result-lab-03");
  //   Kiểm tra dữ liệu đầu vào
  if (number < 2) {
    resultElement.innerHTML = "Số " + number + " không phải là số nguyên tố";
    return; //kết thúc function
  }
  //   Nếu thỏa thì tiếp tục

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      resultElement.innerHTML = "Số " + number + " không phải là số nguyên tố";
      return;
    }
  }

  resultElement.innerHTML = "Số " + number + " là số nguyên tố";
}

// Tìm số hoàn hảo
function lab_04() {
  // Số hoàn hảo --> Tổng các ước bằng chính nó --> các ước --> dùng for lặp qua

  // Nhập N
  const number = Number(prompt("Nhập một số dương để kiểm tra"));
  //   kiểm duyệt số dương
  if (number < 1) {
    alert("Không phải số hoàn hảo");
    return;
  }
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      // Lúc này i là ước của N
      sum += i; // cộng các ước lại
    }
  }
  const resultElement = document.querySelector("#result-lab-04");
  //   Kiểm tra sum có bằng N
  if (sum === number) {
    resultElement.innerHTML = "<p>Số đã cho là số hoàn hảo</p>";
  } else {
    resultElement.innerHTML = "<p>Số đã cho không phải là số hoàn hảo</p>";
  }
}
