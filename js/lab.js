// Function thông thường

function sum(a, b) {
  //   console.log(a + b);
  return a + b;
}

// Arrow function

const sum_2 = (a, b) => a + b;

const test_1 = sum(10, 20);

console.log("test 1", test_1);
console.log("test 2", sum_2(4, 5));
console.log("test 2", sum_2(4, "Hello"));

// Kiểm tra phải số hay không

function isNumber(data) {
  const convertNumber = Number(data);
  //   if (isNaN(convertNumber) === false) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // return !isNaN(convertNumber)

  return isNaN(convertNumber) ? false : true;
}
function isNumber(data) {
  const convertNumber = Number(data);

  return isNaN(convertNumber) ? false : true;
}
function isNumber(data) {
  const convertNumber = Number(data);
  if (isNaN(convertNumber)) {
    return false;
  }

  return true;
}

console.log("check number", isNumber("hihi"));
