/*1)	ჯავასკრიპტში არსებობს სამი სახის ცვლადი, let, const და var. let, მასში შენახულ ცვლადს შეგვიძლია გადავაწეროთ, const-ის დროს კი ვერ შევცვლით. var არის ცვლადი, რომელიც არის მოძველებული და არ გამოიყენება.
2)	არსებობს 8 სახის ტიპი,
String; 
number; 
Boolean; 
null (განსაზღვრული არარსებობა, ანუ არარსებობა რომლის შეცვლაც შეიძლება); 
undefined (ობიექტის არარსებობა); 
bigint; 
symbol; 
object
3) split()
4) string პრიმიტიულია, რადგან სტრინგის შექმნის შემდეგ მისი შეცვლა შეუძლებელია, რადგან ამის მცდელობის დროს რეალურად იქმნება სრულიად ახალი სტრინგი და ასევე, როცა ერთ სტრინგს მეორეს ვუტოლებთ, მნიშვნელობები უტოლდება და არა თვითონ მისამართები.
5) ვისწავლეთ შემდეგი მეთოდები:
1. Length. (console.log(word.length)). თვლის სიგრძეს, ფაქტობრივად სიმბოლოების რაოდენობას.
2. Characterity. მისი საშუალებით ვიგებთ, თუ რომელი ელემენტი რომელ პოზიციაზე იმყოფება. (მაგ: 
let Name = “elene”
let character = Name.charAt(0)
console.log(character).
რაც დამიკონსოლებს e-ს.
იმავე ლეთზე თუ console.log(Name[Name.length-2])-ს გავუშვებთ let character = Name.charAt(0)-ის ნაცვლად, დაგვიკონსოლებს n-ს, ბოლოდან მეორეს.
3. slice, რომლის მეშვეობითაც შეგვიძლია მოვჭრათ კონკრეტული ნაწილი. (მაგ:
let firstName = “Giorgi”
let slicedStr = firstName.slice(0,3)  (საიდან სადამდე)
console.log(slicedStr). დააკონსოლებს Gio-ს.)
4. UpperCase და LowerCase; (მაგ: 
let firstName = “Giorgi elene”
console.log (firstName.toUpperCase())
ან toLowerCase(). 
5. concat, + გაერთიანება; (მაგ:
შეგვიძლია გასაერთიანებლად გამოვიყენოთ ეს მეთოდი:
let str1 = “hello”
let str2 = “world”
console.log(str1 + “ “ + str2)
ან console.log (`${str1} ${str2}`)
Concat:
let gavaertianot = str1.concat(str2)
console.log(gavaertianot), პირველი მეთოდის დროს შეგვიძლია განვაცალკევოთ სიტყვები, ქონქეთის მეთოდის შემთხევვაში კი ერთმანეთს ეწებება სიტყვები და მათი განცალკევება შეუძლებელია.)
6. trim + სფეისებს აქრობს თავში და ბოლოში, ვერ ვეხებით შუა ნაწილში. (მაგ:
let firstName = “ elene “
Console.log(firstName.trim(). დააკონსოლებს არა  elene  -ს, არამედ უსფეისო elene-ს. ეს მეთოდი განსაკუთრებულად მნიშვნელოვანია length-ის მეთოდის გამოყენებასთან ერთად.)
7. split.  ყოფს, მაგრამ სტრინგს აქცევს array-დ. (მაგ:
let word = “hello world”
let splitedStr = word.split(“ “)
console.log (splitedStr)
დააკონსოლებს როგორც [‘hello, ‘world’].
ll ვარიანტია let [str1,str2] = splitedStr
console.log(str1) დააკონსოლებს hello-ს.
console.log(str2) დააკონსოლებს world-ს.)
8. replace 
(მაგ:
let universal = “hello world”
let replacedStr = universal.replace(“world”,”tamar”)
console.log(replacedStr). დაკონსოლდება hello tamar.)
9. replaceAll. (მაგ:
let universal = „hello world“
let changechar = universal.replaceAll(“l”,”a”)
console.log(changechar). რაც შეცვლის სიტყვის ყველა l-ს a-თი)
10. includes. (მაგ:
let universal = “hello world”
console.log(universal.includes(“world”), რაც დაგვიბრუნებს true-ს)
11. შედარების ოპერატორი. (მაგ:
let number = 8
console.log(number >7 ?”კი მეტია“:“არ არის მეტი“).
12. loops. (while, for).
(For loop-ის მაგ:
for(let i = 0; i<3; i++) {
console.log(i)
}  ანუ საიდან ვიწყებთ, სადამდე აგრძელებთ და რამდენით ვზრდით, შემდეგ კონსოლში ვწერთ მიღებულ ინდექსს.
დაპრინტავს 0 1 2.)

*/