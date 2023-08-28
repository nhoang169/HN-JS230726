let array = [1, 2, 3, 4, 5,6 , 7, 8, 9];
let n = prompt("nhap vao chuoi ky tu so ngan cach boi dau ", "");
let array = n.split(",");
// Su dung ham sort
// let a = array.sort((a, b) => {
//   return a - b;
// });
// console.log(a);

// Su dung vong lap for de duyet tung phan tu sau do sap xep lai chung
// Tu be den lon
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < array.length; j++) {
    if (Number(array[i]) > Number(array[j])) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);


// Tai su dụng hàm trong JS

function timGiaTriLonNhat(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  const mangA = [5, 12, 8, 25, 3];
  const mangB = [100, 200, 150, 75];
  
  const maxA = timGiaTriLonNhat(mangA);
  console.log("Giá trị lớn nhất trong mảng A:", maxA);
  
  const maxB = timGiaTriLonNhat(mangB);
  console.log("Giá trị lớn nhất trong mảng B:", maxB);
