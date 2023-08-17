function lab_01() {
  const dictionaryVN = ["Chó", "Mèo", "Rắn", "Gà", "Heo"];
  const dictionaryUK = ["dog", "cat", "snake", "chicken", "Pig"];

  //   Người dùng nhập

  const word = prompt("Nhập vào một từ tiếng anh cần tìm");
  let isFound = false;
  for (let i = 0; i < dictionaryUK.length; i++) {
    if (word.toLowerCase().trim() == dictionaryUK[i].toLowerCase()) {
      alert("Nghĩa của từ " + word + " là " + dictionaryVN[i]);
      isFound = true;
      break;
    }
  }
  //   Tìm không thấy từ
  if (!isFound) {
    alert("Không thấy nghĩa cần tìm cho từ " + word);
  }
}

function lab_01_2() {
  const dictionaryVN = ["Chó", "Mèo", "Rắn", "Gà", "Heo"];
  const dictionaryUK = ["dog", "cat", "snake", "chicken", "Pig"];

  // B2: Lấy giá trị từ form
  const englishInput = document.querySelector("#english");
  const vietnameseInput = document.querySelector("#vietnamese");

  const word = englishInput.value;
  let isFound = false;
  for (let i = 0; i < dictionaryUK.length; i++) {
    if (word.toLowerCase().trim() == dictionaryUK[i].toLowerCase()) {
      // Hiển thị
      vietnameseInput.value = dictionaryVN[i];
      isFound = true;
      break;
    }
  }
  //   Tìm không thấy từ
  if (!isFound) {
    alert("Không thấy nghĩa cần tìm cho từ " + word);
  }
}
