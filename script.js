// alert("Nhúng JS bằng External");
console.log(1);
console.log(2);
console.log(3);
console.log(10);
console.log(5);

// Đặt 1 biến để lấy giá trị

// const number = prompt("Nhập vào một số bất kỳ?");

// console.log("kết quả", number);

// const checkLove = confirm("Em có yêu anh không?");
// console.log("Kiểm tra em có yêu anh: ", checkLove);

// Có 3 cách khai báo biến

// var  --> Khai báo toàn cục, có thể khai báo lại, có thể gán lại

// let --> Khai báo cục bộ, không thể khai báo lại, có thể gán lại

// const --> Khai báo cục bộ, không thể khai báo lại và không thể gán lại

// Giá trị

// Kiểu number --> số

// Kiểu string --> chữ

// Kiểu boolean --> true và false

//  Kiểu object

const NUMBER_LICENSE = "43";

var x = 10;
console.log("kiểm tra x 1", x);
var x = 20;
console.log("kiểm tra x 2", x);

let y = 5;

y = 10;

// Các kiểu dữ liệu

// Kiểu dữ liệu nguyên thủy --> Primitive Data Types

// Kiểu number --> số

// Kiểu string --> chữ

// Kiểu boolean --> true và false

//

// string

const answer = "Đà Nẵng là thành phố đáng sống nhất Việt Nam";
const question = "What's name?";
const number_text = "123";

let number_test = 20;
number_test %= 5; // number_test = number_test % 5 = 20 % 5 = 0

console.log("2" == 2, "2 và 2");
console.log("2" === 2, "2 và 2 string");

console.log("2" != 2, "2 và 2 !");
console.log("2" !== 2, "2 và 2 string !");

console.log("Kiểm tra kiểu của 5 ", typeof 5, 5);
console.log("Kiểm tra kiểu của '5' ", typeof "5", "5");

// Bài 1: Tính số điểm trung bình
function bai_01() {
  const mathMark = Number(prompt("Nhập vào điểm toán"));
  const physMark = Number(prompt("Nhập vào điểm Lý"));
  const chemMark = Number(prompt("Nhập vào điểm Hóa"));
  const averageMark = (mathMark + physMark + chemMark) / 3;
  console.log("Điểm trung bình của bạn là", averageMark);
}

// Bài 2: Chuyển đổi tiền tệ
function bai_02() {
  // B1: Nhập tiền đô la mỹ
  const usd = Number(prompt("Nhập tiền USD"));
  // B2: Đặt biến và tính VND
  const vnd = usd * 23750;

  console.log(usd + " USD bằng " + vnd + " VND");
  console.error("Đây là error");
  console.warn("Đây là warning");
}

let fullName;
console.log("check fullname", fullName);
// Bài 3: Nhập và hiển thị họ và tên bằng alert()
function bai_03() {
  console.log("function chạy");
  const firstName = prompt("Nhập họ của của");
  const lastName = prompt("Nhập tên của bạn");

  fullName = firstName + " " + lastName;
  alert("Họ và tên là: " + fullName);
}
function bai_03_1() {
  const age = prompt("Nhập tuổi của bạn");
  console.log(typeof fullName);
  alert("Họ và tên:" + fullName + " " + "tuổi" + age);
}

let a = 10;
{
  let a = 20;
  console.log("check a", a);
}

console.log("check a 2: ", a);

var b = 5;
{
  var b = 20;
  console.log("check b", b);
}

console.log("check b 2:", b);

let c = true;
{
  c = !c;
  console.log("check c", c);
}

console.log("check c2: ", c);

// Bài 4: Chuyển đổi nhiệt độ
function bai_04() {
  const temperatureC = prompt("Nhập vào độ C");
  const temperatureF = (9 * temperatureC) / 5 + 32;
  console.log("Độ F là:", temperatureF);

  //   Giúp truy vấn tới element có id result-4
  const resultElement = document.querySelector("#result-4");
  console.log(resultElement);

  //   Chưa cần hiểu --> copy và thay thế nội dung
  resultElement.innerHTML =
    temperatureC + " độ C bằng " + temperatureF + " độ F";
}

// Bài 5: Tính chu vi hình tròn
function bai_05() {
  const radius = prompt("Nhập bán kính");
  const PI = 3.14;

  const perimeter = (2 * PI * radius).toFixed(2);
  const area = PI * radius * radius;
  //   Giúp truy vấn tới element có id result-4
  const resultElement = document.querySelector("#result-5");
  console.log(resultElement);

  //   Chưa cần hiểu --> copy và thay thế nội dung
  resultElement.innerHTML =
    "Chu vi hình tròn là: " + perimeter + " và diện tích là: " + area;
}

function bai_06() {
  const color = prompt("Nhập vào một màu bất kỳ");
  console.log("%cBạn đã đổi màu trong console.log()", `color: ${color}`);
  //   dấu backtick (`)
}

a = 6;

console.log(++a + a + a++ + ++a + a);
console.log(a);

// const test_null = prompt("Không nhập");
// console.log("test null", test_null);

// const radius = Number(prompt("Nhập bán kính"));

// if (radius > 0) {
//   alert("Vui lòng nhập số lớn hơn 0");
// } else {
//   console.log("Helle falsy");
// }

// Bài tập 1: Nhập 1 số --> Thông báo người dùng số chẵn hay lẻ
// Bài tập 2: Nhập tuổi --> Cho xem thể loại film tương ứng
// (dưới 16t: xem thiếu nhi, dưới 18: xem phim hành động + thiếu nhi, từ 18 trở lên: xem được các loại film)
// Bài tập 3: Nhập điểm toán, lý, hóa, sinh --> Cho biết học sinh đạt loại gì

// Giỏi: tổng điểm trung bình lớn hơn 8.0, không có môn dưới 7đ

// Khá: tổng điểm trung bình lớn hơn 7.0, không có môn dưới 5đ

// Trung bình: tổng điểm trung bình lớn hơn 5.0, không có môn dưới 3.5đ

// Yếu: còn lại
