// Ví dụ về câu điều kiện

function ex_01() {
  const r = +prompt("Nhập vào bán kiến");

  //   Điều kiện
  if (r >= 0) {
    area = radius * radius * PI;
    console.log("The area is: " + area);
  }

  if (r < 0) {
    console.log("Bán kính bị âm rồi! Vui lòng nhập lớn hơn không");
  }
}

function ex_02() {
  const answer = confirm("Bạn có người yêu chưa?");
  console.log("answer", answer);
  //   Điều kiện
  //   if (answer == true) {
  //     console.log("Em không phù hợp với công ty chúng tôi");
  //   } else {
  //     console.log("Em được tuyển! Mai đi làm luôn nhé!!!");
  //   }
  if (answer) {
    console.log("Em không phù hợp với công ty chúng tôi");
  } else {
    console.log("Em được tuyển! Mai đi làm luôn nhé!!!");
  }
}

function ex_03() {
  const number = Number(prompt("Nhập một số"));
  console.log("answer", number);
  //   Điều kiện
  //   if (answer == true) {
  //     console.log("Em không phù hợp với công ty chúng tôi");
  //   } else {
  //     console.log("Em được tuyển! Mai đi làm luôn nhé!!!");
  //   }

  console.log(typeof NaN);

  //   isNaN

  //   validator --> Kiểm duyệt dữ liệu
  if (isNaN(number)) {
    alert("Bạn phải nhập số!!!");
  } else {
    if (number % 2 == 0) {
      console.log(number + " là số chẵn");
    } else {
      console.log(number + " là số lẻ");
    }
  }
}

// tìm số lớn nhất

function ex_04() {
  const number_1 = Number(prompt("Nhập số đầu tiên"));
  const number_2 = +prompt("Nhập số thứ 2");
  const number_3 = parseInt(prompt("Nhập số thứ 3"));

  if (number_1 > number_2) {
    if (number_1 > number_3) {
      console.log(
        "Số lớn nhất trong ba chữ số " +
          number_1 +
          ", " +
          number_2 +
          ", " +
          number_3 +
          " là:" +
          number_1
      );
    } else {
      console.log(
        "Số lớn nhất trong ba chữ số " +
          number_1 +
          ", " +
          number_2 +
          ", " +
          number_3 +
          " là:" +
          number_3
      );
    }
  } else {
    if (number_2 > number_3) {
      console.log(
        "Số lớn nhất trong ba chữ số " +
          number_1 +
          ", " +
          number_2 +
          ", " +
          number_3 +
          " là:" +
          number_2
      );
    } else {
      console.log(
        "Số lớn nhất trong ba chữ số " +
          number_1 +
          ", " +
          number_2 +
          ", " +
          number_3 +
          " là:" +
          number_3
      );
    }
  }
}

function ex_05() {
  const number_1 = Number(prompt("Nhập số đầu tiên"));
  const number_2 = +prompt("Nhập số thứ 2");
  const number_3 = parseInt(prompt("Nhập số thứ 3"));
  let max = number_1;
  if (max > number_2) {
    if (max < number_3) {
      max = number_3;
    }
  } else {
    if (number_2 > number_3) {
      max = number_2;
    } else {
      max = number_3;
    }
  }
  console.log(
    "Số lớn nhất trong ba chữ số " +
      number_1 +
      ", " +
      number_2 +
      ", " +
      number_3 +
      " là:" +
      max
  );
}

// Bài 6: Xếp loại học lực học sinh
function ex_06() {
  const mark = Number(prompt("Nhập điểm học sinh"));
  let rank = "";

  if (mark >= 9) {
    rank = "A+";
  } else if (mark >= 8) {
    rank = "A";
  } else if (mark >= 7) {
    rank = "B";
  } else if (mark >= 5) {
    rank = "C";
  } else if (mark >= 3.5) {
    rank = "D";
  } else if (mark >= 0) {
    rank = "E";
  } else {
    alert("Giáo viên tập trung nhập điểm!");
  }

  console.log("Xếp loại học sinh là loại " + rank);
}

function lab_01() {
  // B1: Nhập thông tin
  const weight = Number(prompt("Nhập vào cân nặng của bạn (kg)"));
  const height = Number(prompt("Nhập vào chiều cao của bạn (m)"));

  //   B2: Tính toán BMI
  const BMI = (weight / (height * height)).toFixed(1);
  let type = "";
  let level = "";
  //   B3: Xét điều kiện
  if (BMI < 18.5) {
    type = "gầy";
  } else if (BMI <= 24.9) {
    type = "bình thường";
  } else {
    type = "thừa cân";
    if (BMI <= 29.9) {
      level = "Tiền béo phì";
    } else if (BMI <= 34.9) {
      level = "béo phì cấp độ I";
    } else if (BMI <= 39.9) {
      level = "Béo phì cấp độ II";
    } else {
      level = "Béo phì cấp độ III";
    }
  }

  //   B4: Hiển thị kết quả

  const resultElement = document.querySelector("#result-lab-01");

  if (BMI >= 25) {
    resultElement.innerHTML =
      "BMI của bạn là: " + BMI + " và phân loại " + type + " cấp độ:" + level;
  } else {
    resultElement.innerHTML =
      "BMI của bạn là: " + BMI + " và phân loại " + type;
  }
}

function lab_01_1() {
  // B1: Nhập thông tin
  const weight = Number(prompt("Nhập vào cân nặng của bạn (kg)"));
  const height = Number(prompt("Nhập vào chiều cao của bạn (m)"));

  //   B2: Tính toán BMI
  const BMI = (weight / (height * height)).toFixed(1);
  let type = "";
  let level = "";
  //   B3: Xét điều kiện
  if (BMI >= 40) {
    level = "béo phì cấp độ III";
  } else if (BMI >= 35) {
    level = "béo phì cấp độ II";
  } else if (BMI >= 30) {
    level = "béo phì cấp độ I";
  } else if (BMI >= 25) {
    level = "tiền béo phì";
  } else if (BMI >= 18.5) {
    type = "bình thường";
  } else {
    type = "gầy";
  }

  //   B4: Hiển thị kết quả

  const resultElement = document.querySelector("#result-lab-01");

  if (BMI >= 25) {
    type = "thừa cân";
    resultElement.innerHTML =
      "BMI của bạn là: " + BMI + " và phân loại " + type + " cấp độ:" + level;
  } else {
    resultElement.innerHTML =
      "BMI của bạn là: " + BMI + " và phân loại " + type;
  }
}

// Bài 02: Tìm cung hoàng đạo

function lab_02() {
  const month = Number(prompt("Bạn sinh tháng mấy?"));
  const date = Number(prompt("Bạn sinh ngày mấy?"));
  if (month < 1 || month > 12) {
    alert("Phải nhập đúng định dạng tháng từ 1 -> 12");
    return;
  }
  console.log(1111111111111111111);
  let zodiac = "";
  let imgZodiac = "";

  //   Điều kiện về ngày và tháng

  if ((month == 1 && date <= 19 && date >= 1) || (month == 12 && date > 22)) {
    zodiac = "ma kết ";
    imgZodiac = "ma-ket";
  } else if ((month == 1 && date >= 20) || (month == 2 && date < 18)) {
    zodiac = "bảo bình ";
    imgZodiac = "bao-binh";
  } else if ((month == 2 && date >= 19) || (month == 3 && date < 20)) {
    zodiac = "song ngư ";
    imgZodiac = "song-ngu";
  } else if ((month == 3 && date >= 21) || (month == 4 && date < 19)) {
    zodiac = "bạch dương ";
    imgZodiac = "bach-duong";
  } else if ((month == 4 && date >= 20) || (month == 5 && date < 20)) {
    zodiac = "kim ngưu ";
    imgZodiac = "kim-nguu";
  } else if ((month == 5 && date >= 21) || (month == 6 && date < 21)) {
    zodiac = "song tử";
    imgZodiac = "song-tu";
  } else if ((month == 6 && date >= 22) || (month == 7 && date < 22)) {
    zodiac = "cự giải";
    imgZodiac = "cu-giai";
  } else if ((month == 7 && date >= 23) || (month == 8 && date < 22)) {
    zodiac = "sư tử ";
    imgZodiac = "su-tu";
  } else if ((month == 8 && date >= 23) || (month == 9 && date < 22)) {
    zodiac = "xử nữ ";
    imgZodiac = "xu-nu";
  } else if ((month == 9 && date >= 23) || (month == 10 && date < 23)) {
    zodiac = "thiên bình ";
    imgZodiac = "thien-binh";
  } else if ((month == 10 && date >= 24) || (month == 11 && date < 21)) {
    zodiac = "bọ cạp";
    imgZodiac = "ho-cap";
  } else if ((month == 11 && date >= 22) || (month == 12 && date < 21)) {
    zodiac = "nhân mã ";
    imgZodiac = "nhan-ma";
  } else {
    zodiac = "nhập sai ngày tháng";
  }

  const resultElement = document.querySelector("#result-lab-02");
  resultElement.innerHTML = `<p>Bạn thuộc cung hoàng đạo ${zodiac}.</p><img src="images/${imgZodiac}.png" width="200"/>`;
}

function lab_03() {
  const year = Number(prompt("Nhập vào một năm"));
  let isLeapYear = false;

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  }
}

// Ví dụ switch case

function ex_07() {
  const month = Number(prompt("Nhập vào tháng"));

  let result = "";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result = "31 ngày";
      break;
    case 2:
      result = "28 hoặc 29 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result = "30 ngày";
      break;

    default:
      result = "Vui lòng nhập đúng số tháng từ 1 --> 12";
      break;
  }

  console.log(result);
}

function ex_08() {
  const mark = Number(prompt("Nhập điểm học sinh"));
  let rank = "";

  switch (true) {
    case mark >= 9:
      rank = "A+";
      break;
    case mark >= 8:
      rank = "A";
      break;
    case mark >= 7:
      rank = "B";
      break;
    case mark >= 5:
      rank = "C";
      break;
    case mark >= 3.5:
      rank = "D";
      break;
    case mark >= 0:
      rank = "E";
      break;
    default:
      alert("Mời giáo viên nhập lại");
  }

  console.log("Xếp loại học sinh là loại " + rank);
}

function ex_09() {
  const number = Number(prompt("Nhập 1 số"));
  number > 0 ? alert("Số dương") : alert("Số âm");
}

function ex_10() {
  const number = Number(prompt("Nhập 1 số"));
  const isEven = number % 2 == 0 ? true : false;

  console.log("Kiểm tra số chẵn:", isEven);
}

function lab_04() {
  const month = Number(prompt("Bạn sinh tháng mấy?"));
  const day = Number(prompt("Bạn sinh ngày mấy?"));
  let maxDay = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      maxDay = 31;
      break;
    case 2:
      maxDay = 29;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      maxDay = 30;
      break;
    default:
      alert("Vui lòng nhập đúng số tháng từ 1 --> 12");
      return;
  }
  if (day > maxDay || day < 1) {
    alert("Vui lòng nhập đúng số ngày");
    return;
  }

  let zodiac = "";
  let imgZodiac = "";

  //   Điều kiện về ngày và tháng
  switch (true) {
    case (month == 1 && day <= 19 && day >= 1) || (month == 12 && day > 22):
      zodiac = "ma kết ";
      imgZodiac = "ma-ket";
      break;
    case (month == 1 && day >= 20) || (month == 2 && day < 18):
      zodiac = "bảo bình ";
      imgZodiac = "bao-binh";
      break;
    case (month == 2 && day >= 19) || (month == 3 && day < 20):
      zodiac = "song ngư ";
      imgZodiac = "song-ngu";
      break;
    case (month == 3 && day >= 21) || (month == 4 && day < 19):
      zodiac = "bạch dương ";
      imgZodiac = "bach-duong";
      break;
    case (month == 4 && day >= 20) || (month == 5 && day < 20):
      zodiac = "kim ngưu ";
      imgZodiac = "kim-nguu";
      break;
    case (month == 5 && day >= 21) || (month == 6 && day < 21):
      zodiac = "song tử";
      imgZodiac = "song-tu";
      break;
    case (month == 6 && day >= 22) || (month == 7 && day < 22):
      zodiac = "cự giải";
      imgZodiac = "cu-giai";
      break;
    case (month == 7 && day >= 23) || (month == 8 && day < 22):
      zodiac = "sư tử ";
      imgZodiac = "su-tu";
      break;
    case (month == 8 && day >= 23) || (month == 9 && day < 22):
      zodiac = "xử nữ ";
      imgZodiac = "xu-nu";
      break;
    case (month == 9 && day >= 23) || (month == 10 && day < 23):
      zodiac = "thiên bình ";
      imgZodiac = "thien-binh";
      break;
    case (month == 10 && day >= 24) || (month == 11 && day < 21):
      zodiac = "bọ cạp";
      imgZodiac = "ho-cap";
      break;
    case (month == 11 && day >= 22) || (month == 12 && day < 21):
      zodiac = "nhân mã ";
      imgZodiac = "nhan-ma";
  }

  const resultElement = document.querySelector("#result-lab-04");
  resultElement.innerHTML = `<p>Bạn thuộc cung hoàng đạo ${zodiac}.</p><img src="images/${imgZodiac}.png" width="200"/>`;
}
