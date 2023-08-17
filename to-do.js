const tasks = [];

function handleAdd() {
  // Lấy giá trị từ ô input

  const searchElement = document.querySelector("#search");
  const searchValue = searchElement.value;
  // Đưa dữ liệu vào mảng
  if (searchValue) {
    tasks.push(searchValue);
  }
  //   Làm trống ô input
  searchElement.value = "";

  //   Hiển thị
  render();
}

function handleDelete() {
  const deleteElement = document.querySelector("#delete");
  const deleteIndex = Number(deleteElement.value);

  //   delete
  if (deleteIndex > 0 && deleteIndex <= tasks.length) {
    tasks.splice(deleteIndex - 1, 1);
  } else {
    alert("Vị trí không phù hợp");
  }

  // Hiển thị
  render();
}

function render() {
  const taskElement = document.querySelector("#task");
  let result = ` <tr>
  <th>#</th>
  <th>Nhiệm vụ</th>
  <th>Hành động</th>
</tr>`;
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    result += ` <tr><td>${i + 1}</td>
    <td>${task}</td>
    <td><button>Edit</button><button>Delete</button></td>
  </tr>`;
  }
  taskElement.innerHTML = result;
}
