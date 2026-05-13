//7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია
let arr = [1, 2, 3, 4, 5, 6]
let filteredArr = arr.map((num) => num * 2)
let filteredArr1 = filteredArr.filter((el) => el > 5)
console.log(filteredArr1)