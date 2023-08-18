# FUNCTION

## Lưu ý

### Tham số --> được sử dụng khi khởi tạo function, tương tự như tạo 1 biến, giá trị của nó bằng đối số tương ứng khi gọi function

### Đối số --> Được dùng khi gọi function, là những giá trị hoặc biến đã được tạo trước đó đưa vào

## Các cách khai báo function

### Arrow function

```
const sum = (a,b) => {
       return a + b
}

const  sum = (a,b) => a + b
```

- Arrow function giúp cú pháp ngắn gọn hơn
- Arrow function không có this

### Immediately invoked function expression (IIFE)

```
(function (name) {
  console.log("Tên của bạn là " + name);
})("Khoa")

```

### Function Expression – biểu thức hàm

```
const variableName = function(parameters){
// statements;
}
```
