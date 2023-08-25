function ex_01() {
  // Ví dụ//
  // Đưa dữ liệu lên local

  const accounts = [{ name: "Khoa", password: "123" }];
  const test = 2;
  const text = { title: "Hello world" };

  //Đưa lên --> tạo mới

  const convertAccounts = JSON.stringify(accounts); // đóng gói khi gửi -- chuyển kiểu dữ liệ thành JSON để gửi lên
  localStorage.setItem("accounts", convertAccounts);
  localStorage.setItem("test_data", test);
  localStorage.setItem("text_title", text);

  //   Lấy về
  const accountsDB = localStorage.getItem("accounts");
  const testDB = localStorage.getItem("test_data");
  // Khi lấy về phải khui hàng --- chuyển từ JSON --> dữ liệu baon đầu

  const dataParse = JSON.parse(accountsDB);
  console.log(">>> account", dataParse);
  console.log(">>> test", testDB);

  //   Xóa dữ liệu
  localStorage.removeItem("text_title");

  // Xóa tất cả

  // localStorage.clear()
}

function ex_02() {
  const username = prompt("Nhập tên user!!");

  localStorage.setItem("username", JSON.stringify(username));
  renderHeader();
}

function renderHeader() {
  const usernameDB = JSON.parse(localStorage.getItem("username"));

  const usernameElement = document.getElementById("username");
  usernameElement.innerHTML = "Xin chào " + usernameDB;

  console.log(usernameDB, 111111111);
}

// render dữ liệu lần đầu
renderEx_03();
// Đẩy thông tin lên localStorage
function handleAddEx_03() {
  // B1: Lấy thông tin từ input
  const inputElement = document.querySelector("#input-ex-03");

  const usernameInput = inputElement.value;
  inputElement.value = "";
  //   B2: Đẩy lên local
  localStorage.setItem("username", JSON.stringify(usernameInput));
  renderEx_03();
}

function handleDeleteEx_03() {
  localStorage.removeItem("username");
  renderEx_03();
}

function renderEx_03() {
  const resultElement = document.querySelector("#result-ex-03");
  const btnAddEditElement = document.querySelector("#btn-add-edit");

  const username = JSON.parse(localStorage.getItem("username"));
  if (!username) {
    btnAddEditElement.textContent = "ADD";
    resultElement.innerHTML = "";
  } else {
    btnAddEditElement.textContent = "EDIT";
    resultElement.innerHTML = `${username}   <button onclick="handleDeleteEx_03()">Delete</button>`;
  }
}

function ex_04_get() {
  const username = JSON.parse(sessionStorage.getItem("username"));

  console.log(">> check session", username);
}

function ex_04_set() {
  sessionStorage.setItem("username", JSON.stringify(["dog", "cat"]));
}

function ex_04_remove() {
  sessionStorage.removeItem("username");
}

function ex_05_add() {
  document.cookie =
    "username=khoaddddddddddddddd; SameSite=None; Secure; expires=Thu, 05 Jan 2024 23:59:00 UTC";
  document.cookie = "age=18;";
}
