<<<<<<< HEAD
let str = "luka"
let slicedStr = str.slice(0, 3)
console.log(slicedStr.toUpperCase())
=======
//3)დააბრუნე ყველა დადებითი რიცხვის ჯამი

let arr = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum = sum + arr[i]
    }
}

console.log(sum)
>>>>>>> c1be464 (initial commit for homework3)
