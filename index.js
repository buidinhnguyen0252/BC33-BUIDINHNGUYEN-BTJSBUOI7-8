var array = [];
function getNumber() {
  var n = +document.getElementById("inputNum").value;
  array.push(n);
  console.log(array);
  var result = (document.getElementById("txtArray").innerHTML = array);
}

// Bài 1 : Tổng số dương

function sumPositive() {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum = sum + array[i];
    }
  }
  var resultBT1 = (document.getElementById("txtSum").innerHTML = sum);
}

// Bài 2 : Đếm số dương
function countPositive() {
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count += 1;
    }
  }
  var resultBT2 = (document.getElementById("txtCount").innerHTML = count);
}

// Bài 3 : Tìm số nhỏ nhất
function findMin() {
  var min = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  var resultBT3 = (document.getElementById("txtMin").innerHTML = min);
}

// Bài 4 : Tìm số dương nhỏ nhất
function findMinPos() {
  var a = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && a.push(array[i])) {
      if (a.length > 0) {
        var e = a[0];
        for (r = 1; r < a.length; r++) {
          a[r] < e && (e = a[r]);
        }
        var resultBT4 = (document.getElementById("txtMinPos").innerHTML =
          "Số dương nhỏ nhất là : " + e);
      } else
        var resultBT4 = (document.getElementById("txtMinPos").innerHTML =
          "Không có số dương trong mảng");
    }
  }
}

//Bài 5 : Tìm số chẵn cuối cùng
function findEven() {
  var b = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      b = array[i];
    }
  }
  var resultBT5 = (document.getElementById("txtEven").innerHTML =
    "Số chẵn cuối cùng là : " + b);
}

//Bài 6 : Đổi chỗ

function swap(array, a, b) {
  var e = array[a];
  array[a] = array[b];
  array[b] = e;
}
function changePosition() {
  var a = +document.getElementById("inputIndex1").value;
  var b = +document.getElementById("inputIndex2").value;
  swap(array, a, b);
  var resultBT6 = +(document.getElementById("txtChangePos").innerHTML = array);
}

//Bài 7 : Sắp xếp tăng dần
function sortIncrease() {
  for (var k = 0; k < array.length; k++) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  var resultBT7 = (document.getElementById("txtIncrease").innerHTML = array);
}

//Bài 8 : tìm số nguyên tố đầu tiên
function checkPrime(n) {
  if (n < 2) return !1;
  for (var r = 2; r <= Math.sqrt(n); r++) if (n % r == 0) return !1;
  return !0;
}
function findPrime() {
  for (var n = -1, r = 0; r < array.length; r++) {
    if (checkPrime(array[r])) {
      n = array[r];
      break;
    }
  }
  var resultBT8 = (document.getElementById("txtPrime").innerHTML = +n);
}

// Bài 9 : Đếm số nguyên
var arrayFloat = [];
function getFloat() {
  var n = +document.getElementById("inputFloat").value;
  arrayFloat.push(n);
  document.getElementById("txtArrayFloat").innerHTML = arrayFloat;
}
function findInt() {
  var n = 0;
  for (r = 0; r < arrayFloat.length; r++)
    Number.isInteger(arrayFloat[r]) && n++;
  var resultBT9 = (document.getElementById("txtInt").innerHTML =
    "Số nguyên : " + n);
}

//Bài 10 : so sánh số âm và số dương

function compareNum() {
  var n = 0;
  var r = 0;
  for (e = 0; e < array.length; e++)
    if (array[e] > 0) {
      n++;
    } else if (array[e] < 0) {
      r++;
    }

  var resultBT10 = (document.getElementById("txtCompare").innerHTML =
    n > r
      ? "Số dương > Số âm"
      : n < r
      ? "Số âm > Số dương"
      : "Số âm = Số dương");
}
