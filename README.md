# Javascript Basic

## Khai báo biến

- var: Khai báo toàn cục, có thể khai báo lại, có thể gán lại (ít dùng)
- let: khai báo cục bộ, không thể khai báo lại, có thể gán lại
- const: khai báo cục bộ, không thể khai báo lại, không thể gán lại

## Các kiểu dữ liệu

#### Kiểu dữ liệu nguyên thủy --> Primitive Data Types

- Kiểu number --> số

- Kiểu string --> chữ

- Kiểu boolean --> true và false

#### Kiểu dữ liệu không nguyên thủy (tham chiếu )

- Object
- Array
- Function

## Một số lưu ý:

- Phép (+) trong **_string_** là nối chuỗi lại với nhau
- Trong kiểu **_string_** thì không có phép (-)(\*)(/) --> Khi gặp các phép tính sẽ tự chủ động chuyển kiểu thành **_number_** --> Nếu nó không thể chuyển thành **_number_** --> NaN (Not A Number)

### Cách để chuyển String thành number

- Sử dụng Number() --> ví dụ Number('2')
- Sử dụng parseInt() --> ví dụn parseInt('3.1') --> chỉ lấy phần nguyên (parse số nguyên)
- Sử dụng parseFloat() --> ví dụn parseFloat('3.1') --> parse số thực
- Sử dụng phép (+) phía trước (ít dùng)

### Nhập dữ liệu

- prompt() --> trả về string hoặc null
- confirm --> trả về kết quả true fase (boolean)

### Hiển thị kết quả:

- console.log()
- alert()
- innerHTML
- document.write()

### truthy và falsy

- falsy: 0, null, undefined, " ", false, NaN

### git clone -- git pull

- git pull
