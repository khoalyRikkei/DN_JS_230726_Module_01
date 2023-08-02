# FORM

## Các thuộc tính

- id: thuộc tính giúp xác định element (phần tử) duy nhất trong file HTML
- class: thuộc tính dành để chọn được nhóm phần tử có cùng chung một số định kiểu hoặc chức năng, truy vấn js
- name: thuộc tính dùng trong form dùng để truy vấn hoặc lấy các giá trị tương ứng khi submit form
- value: giá trị của ô input (có thể không hiển thị)

## Các lưu ý

- ở type="radio": khi muốn lựa chọn 1 trong các kết quả --> giá trị của **_name_** phải giống nhau + đặt **_value_** cho từng radio
- type="checkbox" : dùng để lựa chọn nhiều kết quả --> các giá trị của **_name_** phải khác nhau, có thể không cần có **_value_**
- thuộc tính **_for_** trong label phải cùng id với ô input tương ứng

## Một số thuộc tính khác

- maxlength: giới hạn số lượng ký tự trong input
- max, min: giới hạn số trong type="number"
- pattern: mẫu format theo dạng regular expression của input nhập vào của types: text, date, search, url, tel, email, and password
- required: yêu cầu không để trong input khi submit
- readonly: chỉ có thể xem mà không sửa nội dung trong input
- disable: vô hiệu hóa input
- selected: dùng để xác định giá trị được lựa chọn trong option
- checked: dùng để checked ban đầu của type radio, checkbox
- placeholder: mô tả ô input
- step: bước nhảy giá trị của type number, range, date, datetime-local, month, time and week

## Thư viện icon fontweasome

- link cnd: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

1. Đưa thẻ chứa cnd vào trong head
2. Truy cập https://fontawesome.com/
3. Tìm kiếm icon và lựa chọn free
4. Copy HTML về
5.
