# CSS BASIC

## Nhúng CSS vào HTML

- Inline: độ ưu tiên cao nhất
- Internal
- External (nên dùng)

## Độ ưu tiên trong CSS

- Sự phổ biến càng thấp thì độ ưu tiên càng cao id > class > tagname
- Đường dẫn bộ chọn càng chi tiết thì ưu tiên càng cao
- Sắp xếp sau thì ưu tiên hơn sắp xếp trước nếu cùng thuộc tính và các độ ưu tiên khác ngang nhau

## Nhóm display:

- block: set được width, height, ... nhưng luôn tạo 1 dòng mới
- inline: không set được width, height, ... nằm trên 1 dòng nếu còn khoảng trống
- inline-block: set được width, height,.. và có thể nằm trên cùng 1 dòng nếu còn khoảng trống

## Box model

- content: nội dung bên trong element, có thể là phần tử khác hoặc chữ
- padding: phần đệm bên ngoài content, trong suốt (sử dụng khi muốn tạo khoảng cách cho element cha và element con (hoặc chữ))
- border: tạo đường viền cho element
- margin: tạo khoảng cách bên ngoài element, dùng để tạo khoảng cách giữa các element cạnh nhau
  **_Cách tính width, height trong box model _**
- Khuyến khích sử dụng thuộc tính box-sizing: border-box để kiểm soát được tổng kích thước element từ border đến content

## Một số nhóm thuộc tính thông dụng

