console.log({
  test: document,
});

function ex_01() {
  const h3Element = document.getElementById("text-title");
  console.log(h3Element);
}

function ex_02() {
  const textElement = document.getElementsByClassName("text-red");

  console.log(textElement);

  console.log("Kiểm tra class thứ 2", textElement[1]);
}

function ex_03() {
  // Truy vấn tới element cha
  const boxElement = document.getElementById("box");

  const textElement = document.getElementsByTagName("p");
  console.log(">>> document", textElement);
  const textElemen2 = boxElement.getElementsByTagName("p");
  console.log(">>>> box", textElemen2);
}

function ex_04() {
  const boxElement = document.querySelector("#box");
  const pElement = document.querySelector("p");

  console.log(boxElement);

  console.log(pElement);
}

function ex_05() {
  const pElements = document.querySelectorAll("section .text-red");
  pElements.forEach((item) => {
    item.innerHTML = "Hello";
    console.log(item);
  });
  console.log(pElements);
}

function ex_06() {
  const h3Element = document.querySelector("#change-text");
  h3Element.innerHTML = "<i>Hello lớp</i>";

  //   textContent --> thấy toàn bộ nội dung bằng text cho dùng display none

  // innerText --> thấy nội dung đang có
}

function ex_07() {
  const inputElement = document.querySelector("fieldset input");
  if (inputElement.type === "password") {
    inputElement.type = "text";
  } else {
    inputElement.type = "password";
  }

  //   Chuyển tất cả button sang xanh

  const btnElements = document.querySelectorAll("button");

  for (const element of btnElements) {
    element.style.backgroundColor = "blue";
    element.style.padding = "20px";
  }
}

function ex_08() {
  const inputElement = document.querySelector("fieldset input");
  inputElement.setAttribute("index", 1);

  //   getAttribute()
}

function lab_01() {
  // B1: Nhập độ dài 2 cạnh --> prompt
  const width = Number(prompt("Nhập chiều rộng"));
  const height = Number(prompt("Nhập chiều cao"));

  // B2. truy vấn tới element --> querySelector()
  const rectangleElement = document.querySelector("#rectangle");
  console.log({ i: rectangleElement });
  console.log(rectangleElement);

  // B3. Thay đổi kích thước --> element.style
  rectangleElement.style.width = width + "px";
  rectangleElement.style.height = height + "px";

  const element = {
    style: {
      width: "",
      height: "",
    },
    id: "",
    class: "",
    value: "",
  };
}

function ex_09() {
  const toggleElement = document.querySelector("#toggle");
  toggleElement.innerHTML = "Xin chào các bạn";
  toggleElement.classList.toggle("hidden");

  //   add()
  // remove()
  console.log(toggleElement.classList);

  // if (toggleElement.className == "hidden") {
  //   toggleElement.className = "";
  // } else {
  //   toggleElement.className = "hidden";
  // }
}

// B1: Truy vấn đến ảnh

// B2: Dựa vào function --> thay đổi thuuộc tính css
let movetop = 0;
let moveleft = 0;

function moveTop() {
  movetop -= 100;
  imgElement.style.top = movetop + "px";
}
function moveDown() {
  movetop += 100;
  imgElement.style.top = movetop + "px";
}

function moveLeft() {
  moveleft -= 100;
  imgElement.style.left = moveleft + "px";
}

function moveRight() {
  moveleft += 100;
  imgElement.style.left = moveleft + "px";
}

function move(action) {
  const imgElement = document.querySelector(".image");
  console.log("Kiểm tra", action);
  switch (action) {
    case "top":
      movetop -= 100;
      break;
    case "down":
      movetop += 100;
      break;
    case "left":
      moveleft -= 100;
      break;
    case "right":
      moveleft += 100;
      break;
  }

  imgElement.style.top = movetop + "px";
  imgElement.style.left = moveleft + "px";
}

function changeBackground() {
  // B1: Tạo mảng màu sắc
  const colors = ["blue", "orange", "red", "green", "grey", "white", "dark"];

  //   B2: Lấy số ngẫu nhiên
  const indexRandom = parseInt(Math.random() * colors.length);

  //   const body = document.querySelector("body")

  //   B3: Thay đổi màu
  document.body.style.background = colors[indexRandom];
}

function addElement() {
  const contentLi = prompt("Nhập nội dung cần thêm");

  const ulElement = document.querySelector("#list-add");
  console.log(ulElement);

  //   Tạo một phần tử
  const liElement = document.createElement("li");
  liElement.textContent = contentLi;

  //   Đưa vào trong thẻ cha
  ulElement.appendChild(liElement);
}

function addImg(a) {
  console.log(a);
  const url = prompt("Nhập vào link ảnh");
  const bodyElement = document.body;
  //   Tạo một phần tử img
  const imgElement = document.createElement("img");
  //   Thay đổi thuộc tính src của img
  imgElement.src = url;
  // Thêm vào cha
  bodyElement.appendChild(imgElement);
}

function deleteElement() {
  const id = prompt("Nhập vào id của thẻ");

  const element_1 = document.getElementById("text-title");
  const parent_1 = document.getElementById("main");
  console.log(parent_1);
  console.log(element_1);
  parent_1.removeChild(element_1);
}

// LÀM VIỆC VỚI EVENT
const headerElement = document.querySelector("header");
function mouseover() {
  headerElement.style.background = "green";
  console.log("Mouse over");
}

headerElement.addEventListener("click", onClickHeader);

function onClickHeader(event) {
  console.log("Click", event);
}

window.addEventListener("keydown", (e) => {
  console.log(e);
});

// on

//addEventLister("", (event)=> {})
