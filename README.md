# OBJECT

## Khái niệm

- Object là một đối tượng được sử dụng để mô tả thuộc tính cụ thể của một sự vật nào đó
- Thuộc tính bao gồm 2 thành phần key(tên của thuộc tính) và value (giá trị của thuộc tính)
- Những thuộc tính có giá trị là 1 function được gọi là Phương thức (Method)/Hành vi (Behavior)/Hành động (Action)/Khả năng (Capability) ( tùy vào mục đích sử dụng)

## Các cách khai báo OBJECT

### Cách 1: Dùng object literals

```
const student = {
    name: "Nguyễn Văn A",
    age: 20
}
```

### Cách 2: Dùng object của JS

```
const student = new Object()
student.name = "Nguyễn Văn A"
student.age = 20
```

### Cách 3: Tạo model bằng object constructor function

```
//Khởi tạo model
function Student(name, age) {
    this.name = name
    this.age = age
}

// Khởi tạo đối tượng dựa theo model
const student = new Student("Nguyễn Văn A", 20)

```

### Cách 4: Tạo model bằng Class (ES6)

```
//Khởi tạo model
class Student {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

// Khởi tạo đối tượng dựa theo model
const student = new Student("Nguyễn Văn A", 20)

```

## Các truy vấn đến 1 thuộc tính và gán lại giá trị

### Cách 1: truy vấn trực tiếp từ key

```
const student = {
    name: "Nguyễn Văn A",
    age: 20
}
student.name = "Nguyễn Văn B
```

### Cách 2: truy vấn từ 1 biến

```
const student = {
    name: "Nguyễn Văn A",
    age: 20
}
cons key = "name"
student[key] = "Nguyễn Văn B
```

## Cách xóa 1 thuộc tính (dùng delete )

```
const student = {
    name: "Nguyễn Văn A",
    age: 20
}

delete student.name


```

## Cách clone 1 object

- Vì Object có kiểu dữ liệu là tham chiếu (giống array) - nên muốn clone 1 object mà không ảnh hưởng đến object đó, chúng ta có thể làm như sau:

### Cách 1: gán trực tiếp giá trị

```
const student = {
    name: "Nguyễn Văn A",
    age: 20,
    address: "ĐN"
}

const newStudent = {
    name: "Nguyễn Văn B",
    age: student.age,
    address: student.address
}

```

### Cách 2: Chuyển đổi thành JSON sau đó trả về

```
const student = {
    name: "Nguyễn Văn A",
    age: 20,
    address: "ĐN"
}

const newStudent = JSON.parse(JSON.stringify(student))

```

### Cách 3: Dùng assign với 1 object rỗng

```
const student = {
    name: "Nguyễn Văn A",
    age: 20,
    address: "ĐN"
}

const newStudent = {}

const newStudent_1 = Object.assign(newStudent, student)

```

## Duyệt qua các key trong Object

- Sử dụng for in để duyệt qua các key
- Sử dụng Object.keys() để lấy tất cả key

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```
