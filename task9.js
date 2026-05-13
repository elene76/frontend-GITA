//9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
let arr = [-1, 20, 90, 4, 5, 111]

let min = arr[0];
let min2 = arr[1]
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min2 = min;
        min = arr[i]
    } else if (arr[i] < min2) {
        min2 = arr[i]
    }
}

console.log(min + min2)