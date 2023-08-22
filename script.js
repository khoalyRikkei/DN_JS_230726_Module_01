// Cách 1: Object literal
function ex_01() {
  const student = {
    name: "Diệu Hương", // thuộc tính
    age: 21, // thuộc tính
    address: "Quảng Trị", //thuộc tính
    learn: function () {
      // hành vi
      return "Học lập trình JavaScript với RA";
    },
  };

  console.log("Kiểm tra đối tượng student", student);

  // Try vấn tới thuộc tính của đối tượng
  console.log("kiểm tra tên học viên", student.name);
  console.log("Kiểm tra hành vi học", student.learn());
  // Gán lại giá trị của thuôc tính

  student.name = "Duy Hiệu";
  // Try vấn tới thuộc tính của đối tượng
  console.log("kiểm tra tên học viên 2", student.name);
}

// Cách 2: Tạo đối tượng với new Object  -->

function ex_02() {
  const cat = new Object(); // phương thức tạo đối tượng của JS

  cat.name = "Kitty";
  cat.age = 1;
  cat.weight = 2;
  cat.speak = function () {
    // hành vi
    return "Meo Meo";
  };

  console.log("Tìm mèo", cat);

  // Ví dụ thêm
  const car_VF = {
    brand: "Vinfast",
    name: "VF3",
    isRun: false,
    run: function () {
      this.isRun = true;
    },
    stop: function () {
      this.isRun = false;
    },
    getName: function () {
      return this.name;
    },
  };

  console.log("kiểm tra xe", car_VF);
  car_VF.run();
  console.log("kiểm tra xe 2", car_VF);
  console.log("kiểm tra tên", car_VF.getName());
}
// Cách 3: Khai báo với object constructor function
function ex_03() {
  // Viết hoa chữ cái đầu của ---> model
  function Person(lastName, firstName, age, gender, address) {
    // thuộc tính - đặc điểm
    this.lastName = lastName;
    this.firstName = firstName;
    this.myAge = age;
    this.gender = gender;
    this.address = address;

    //   Hành vi
    this.speak = (words) => {
      return words;
    };
    //   Phương thức
    this.getFullName = () => {
      return this.firstName + " " + this.lastName;
    };
  }

  // Khai báo person cụ thể

  const aQuyet = new Person("Quyết", "Võ Sỹ", 32, true, "Quảng Bình");
  const aVien = new Person("Viễn", "Lê Văn", 30, true, "Đà Nẵng");

  console.log(aQuyet.getFullName());
  console.log(aVien.speak("Xin chào cả lớp, tôi là Viễn"));

  // Xây dựng một đối tượng Động vật

  // --> dựa vào mô hình Động vật --> khởi tạo 1 mèo + 1 chuột

  function Animal(name, weight, animal, gender) {
    this.name = name;
    this.animal = animal;
    this.weight = weight;
    this.gender = gender;
    this.speak = (voice) => voice;
    this.love = (animal) => {
      console.log(11111, animal === this.animal);
      console.log(2221, animal.gender !== this.gender);

      if (animal.animal === this.animal && animal.gender !== this.gender) {
        this.weight -= 0.01 * this.weight;
        animal.weight -= 0.01 * animal.weight;
      }
    };
  }

  const cat_tom = new Animal("Tom", 2, "cat", true);
  const cat_kitty = new Animal("Kitty", 1.5, "cat", false);

  console.log("Mèo Tom", cat_tom);
  console.log("Mèo Kitty", cat_kitty);

  cat_tom.love(cat_kitty);
  console.log("Mèo Tom 1", cat_tom);
  console.log("Mèo Kitty 1", cat_kitty);
}
// Cách 4: Sử dụng class --> model

function ex_04() {
  class Student {
    constructor(id, name, age, address, gender, numberPhone) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.gender - gender;
      this.address = address;
      this.numberPhone = numberPhone;
    }
    study() {
      return "Learn JS at RA";
    }
    speak = (words) => {
      return words;
    };
    getAddress = function () {
      return this.address;
    };
  }

  const student_1 = new Student(
    "SV001",
    "Nguyễn Văn A",
    20,
    "Đà Nẵng",
    0,
    "0909000999"
  );

  console.log("Kiểm tra student", student_1);
  student_1.id = "Hêlo";

  console.log("Kiểm tra student 2", student_1);
}
// console.log("Kiểm tra this", this);

// function MyArray(array) {
//   this.array = array;
//   this.myPush = (data) => {
//     this.array[this.array.length] = data;
//   };
// }

// const arr1 = new MyArray(["Hello"]);
// const arr2 = new Array("1", 2, 4, 5);
// arr1.myPush("Hi");

// console.log(arr1.array);

function ex_05() {
  const product = {
    price: 1000,
    name: "IP14",
    color: "pink",
    id: "IP_14__001",
    isSold: false,
  };
  // Truy vấn tới thuộc tín
  product.name;

  //   Gán lại giá trị
  product.name = "Iphone 14";

  const key = "isSold";

  product.key = true;

  console.log(11111, product);
  console.log(document);
  changeProduct("isSold", true, product);

  console.log(22222, product);
}

function ex_06() {
  const product = {
    price: 1000,
    name: "IP14",
    color: "pink",
    id: "IP_14__001",
  };

  // Truy vấn tới thuộc tín
  product["name"] = "Iphone 14 Pro Max";
  const color = "color";
  product[color] = "red";

  console.log(product);
}

function changeProduct(key, value, obj) {
  obj[key] = value;
}
