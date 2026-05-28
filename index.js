

const data = {
    name: "Dexter",
    age: 20,
    city: "New York"
}
const response = {
  statusCode: 200,
  message: "Users retrieved successfully",
  success: true,
  data: {
    users: [
      {
        id: 1,
        username: "dexter",
        email: "dexter@gmail.com",
        city: "Laguna"
      },
      {
        id: 2,
        username: "john",
        email: "john@gmail.com",
        city: "Manila"
      },
      {
        id: 3,
        username: "maria",
        email: "maria@gmail.com",
        city: "Cebu"
      }
    ]
  }
}
const users = response.data.users;

const manilaUsers = users.filter(user => user.city === "Manila")

manilaUsers.forEach(user => {
  console.log(user.id)
  console.log(user.username)
  console.log(user.email)
  console.log(user.city)
})

const map = users.map(user => user.username)

console.log(map)


let x = 5;

function function1(){
  let x = 2;
  console.log(x)
}

function function2(){
  let y = 5;
  console.log(x + y)
}

function2(x)
const textBoxs = document.getElementById("textBox");
const toFahrenheit = document.getElementById("fahrenheit");
const toCelsius = document.getElementById("celciuis");
const result = document.getElementById("result");



function convert(event) {
    event.preventDefault();

    let temp = Number(textBoxs.value);
    
    if (toFahrenheit.checked) {
        let answer = (temp * 1.8) + 32;
        result.textContent = answer;    
    } 
    else if (toCelsius.checked) {
        let sagot = (temp - 32) / 2
        result.textContent = sagot
    } 
    else {
        result.textContent = "Please select an option";
    }
}


let numbers = [1,2,3,4,5]

let max = Math.max(...numbers)
let min = Math.min(...numbers)
console.log(`max: ${max} | min: ${min}`)

let fruits = ["apple", "orange", "banana"]
let veg = ['celery', 'magustine', 'carrots']

let temp = [...veg, ...fruits, 1]
console.log(temp)


const food1 = 'pizza';
const food2 = 'hotdog';
const food3 = 'apple';
const food4 = 'meat';

function fridge(...foods){
    console.log(foods)
}

function sum(...numbers){
    let result = 0;

    for(let number of numbers){
        result += number 
    }
    return result
}

console.log(sum(1,2,3,4,5))



// let numbers = [10,89,23,54,34,2,4,22,105]

// let min = Math.min(...numbers)
// let max = Math.max(...numbers)
// console.log(min)
// console.log(max)

// const drinks = ['water', 'juice'];
// const snacks = ['chips', 'cookies'];

// let temp = [...drinks, ...snacks];

// const colors = ['red', 'blue', 'green'];

// let newColors = [...colors, 'yellow']

// console.log(newColors)
// console.log(temp)

// function showNames(...names){
//     console.log(names)
// }

// showNames("James", "John", "Dexter");


// function average(...numbers){
//     let temp = 0;

//     for(let number of numbers){
//         temp += number
//     }
//    let average = temp / numbers.length
//    console.log(average)
// }

// average(10,20,30)





// function generateRandomPass (length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

//     const lowerCase = "abcdefghijklmnopqrstuvwxyz"
//     const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     const numbers = "1234567890"
//     const symbols = "!@#$%^&()"


//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowerCase : ""
//     allowedChars += includeUpperCase ? upperCase : ""
//     allowedChars += includeNumbers ? numbers : ""
//     allowedChars += includeSymbols ? symbols : ""

//     if(length <= 0){
//         console.log(`Password Length must be greate than 0`)
//     }

//     if(allowedChars.length === 0 ){
//         console.log(`password must have atleast 1 Character`)
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length)
//         password += allowedChars[randomIndex]
//     }

//     return password;
// }


// const passwordLength = 12;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;



// console.log(generateRandomPass(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols )
// )


// let arr = [,,,]
// let arr1 = [1,2,3,4]
// let arr2 = [[1,2,3],[4,5,6]]

// console.log(arr.length)
// console.log(arr1.length)
// console.log(arr2.length)



// let temp = arr.sort((a,b) => a - b)

// let arr = [1,18,9,81,98,123]

// for(let i = 0; i < arr.length - 1; i++){

//     if(arr[i] > arr[i + 1]){

//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

//     }
// }

// console.log(arr)

// const data = {
//     message: "Get all users Successfully",
//     statusCode: 200,
//     data: [
//         {
//             id: "1",
//             name: "John Doe",
//             role: "Admin",
//             status: "Active",
//             email: "john.doe@example.com"
//         },
//         {
//             id: "2",
//             name: "Jane Smith",
//             role: "Developer",
//             status: "Active",
//             email: "jane.smith@example.com"
//         },
//         {
//             id: "3",
//             name: "Michael Johnson",
//             role: "QA Engineer",
//             status: "Inactive",
//             email: "michael.johnson@example.com"
//         },
//         {
//             id: "4",
//             name: "Sarah Williams",
//             role: "Project Manager",
//             status: "Active",
//             email: "sarah.williams@example.com"
//         },
//         {
//             id: "5",
//             name: "David Brown",
//             role: "UI/UX Designer",
//             status: "Pending",
//             email: "david.brown@example.com"
//         }
//     ]
// }

// const active = data.data.map(user => user.name === "Sarah Williams");

// console.log(active)

// let arr = [1,18,9,81,98,123]

// arr.splice(6,0,124)

// console.log(arr)

// let newarr = arr.filter((item) => item > 100 )

// console.log(newarr)

// let arr = [1,18,9,81,98,123]

// arr.length = 0

// console.log(arr)

// let arr = new Array(1,2,3,4,5)

// console.log(arr)

// let arr1 = Array.of(1,2,3,4,5)
// console.log(arr1)


// let arr23 = [1,18,9,81,98,123,18,9]

// let temp = []

// for(let i = 0; i < arr23.length; i++){
//     if(!temp.includes(arr23[i])){
//         temp.push(arr23[i])
//     }
// }

// console.log(temp)


// let arr2 = [1,18,9,81,98,123,18,9]

// let unique = [...new Set(arr2)]
// console.log(unique)

// function abc(a,b,c,d,e){

// }

// function pqr(a=0,b,c,d,e){

// }

// console.log(abc.length, pqr.length)

// const pi = 3.14;
// let pi1 = 3.14

// console.log(pi)
// console.log(pi1)


// pi1 = 1.14

// console.log(pi)
// console.log(pi1)


// const user = [
//     {name: "john", age: 22}
// ]
// user[0].name = "didyeey"
// console.log(user)

// let string = "This is quinay dexter"

// let quinay = string.slice(string.indexOf("q"), string.indexOf("y") + 1)
// let quinayUp = quinay[0].toUpperCase() + quinay.slice(1)

// let dexter = string.slice(string.indexOf("d"), string.indexOf("r") + 1)
// let dexterUp = dexter[0].toUpperCase() + dexter.slice(1)



// console.log(`${quinayUp} \n${dexterUp}`)


// const num = [1,2,3,4,5]

// num.splice(0,2,20)

// console.log(num)


// hello(hi)
// hi(goodbye)
// function hello(callback){
//     console.log(`hello!`);
//     callback()
// }

// function hi(callback){
//     console.log(`hi`);
//     callback()
// }


// function goodbye (){
//     console.log(`goodbye`)
// }

// sum(display, 2, 3)

// let numbers = [1,2,3,4,5]

// sum1(average, ...numbers);

// function sum1(callback, ...numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }  
    
//     console.log(`1st function passing : ${numbers.length} and ${sum}`)

//     callback(numbers.length, sum)

    
// }

// function average(length, actualNum){
//     let result = actualNum / length;
//     console.log(`Callback now: ${result}`)
// }

// function sum(callback, x,y){
//     let result = x + y;
//     callback(result);
// }

// function display(result){
//     console.log(result)
// }



// function processScores(callback, score1, score2, score3, score4, score5){ 
//     let sum = score1 + score2 + score3 + score4 + score5;
//     let average = sum / 5
//     let arr = []

//     arr.push(score1)
//     arr.push(score2)
//     arr.push(score3)
//     arr.push(score4)
//     arr.push(score5)

//     console.log(arr)

//     let max = Math.max(...arr)
//     let min = Math.min(...arr)

//     callback(sum, average, max, min)

    
// }

// function showReport(sum, average, max, min){
//     console.log(`Total Score: ${sum}`)
//     console.log(`Average Score: ${average}`)
//     console.log(`Highest Score: ${max}`)
//     console.log(`Lowest Score: ${min}`)
// }

// processScores(showReport, 90, 85, 100, 70, 95)


// let numbers = [1,2,3,4,5]

// // for(let num of numbers){
// //     console.log(num)
// // }

// function double(element, index, array){
//     array[index] = element * 2;

// }

// function triple(element, index, array){
//     array[index] = element * 3;

// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);

// }

// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);

// }



// function sum (element){
//     console.log(element)
// }

// numbers.forEach(cube)
// numbers.forEach(sum)



// let fruits = ["apple", "Orange", "banana", "coconut"]

// fruits.forEach(capitalize)

// function display(element){
//     console.log(element)
// }

// function UpperCase(element){
//     console.log(element.toUpperCase())
// }

// function LowerCase(element){
//     console.log(element.toLowerCase())
// }

// function capitalize(element){
//     console.log(element.charAt(0).toUpperCase() + element.slice(1))
// }

// const foods = ["Pizza", "Burger", "Pasta", "Fries"];


// const numbers = [1, 2, 3, 4, 5];

// function display(element){
//     console.log(element)
// }

// function double(element, index, array){
//     array[index] = element * 2
// }

// numbers.forEach(double)
// numbers.forEach(display)


// const fruits = ["apple", "banana", "mango", "orange"];

// function Capitalizes(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }


// fruits.forEach(Capitalizes)
// fruits.forEach(display)

// let sum = 0;

// const prices = [100, 250, 75, 50];

// prices.forEach((num) => {
//     sum += num
// })

// console.log(sum)

// const students = ["John", "Maria", "Alex"];


// students.forEach((elements, index) => {
//     for(let j = 0; j < 1; j++){
//         console.log(`${index} - ${elements}`)
//     }
// })


// const nums = [1, 2, 4, 7, 8, 10, 13];

// let even = []

// nums.forEach(countEven)

// function countEven(element){
// if(element % 2 == 0){
//     even.push(element)
// }
// }

// console.log(even)
// console.log(`Even numbers: ${even.length}`)

// const nums = [1, 2, 3, 4];

// nums.forEach(square)
// nums.forEach(display)
// function display(element){
//     console.log(element)
// }
// function square(element, index, array){
//     array[index] = element ** 2
// }
// const num = [1,2,3,4,5]
// const squared = num.map(cube)
// console.log(squared)
// function square(element){
//     return Math.pow(element, 2)
// }
// function cube(element){
//     return Math.pow(element, 3)
// }
// const fruits = ["banana", "orange", "grapes", "watermelon"]
// const capitaled = fruits.map(toUppercase);
// const lower = fruits.map(toLowerCase);
// console.log(lower)
// console.log(capitaled)
// function toUppercase(element){
//     return element.toUpperCase();
// }
// function toLowerCase(element){
//     return element.toLowerCase();
// }


// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
// const formated = dates.map(formater);
// console.log(formated);
// function formater(element){
//     const parts = element.split("-")
//     return `${parts[1]} | ${parts[2]} | ${parts[0]}`;
// }


// const students = [
//     "juan dela cruz",
//     "maria santos",
//     "pedro penduko",
//     "ana marie reyes",
//     "joseph villanueva",
//     "charles bautista",
//     "samantha lee",
//     "alexa mae fernandez",
//     "mark anthony santos",
//     "christine joy reyes"
// ];


// function details(element){
//     //full Name
//     let fullName = element;
//     //initial
//     let matches = element.match(/\b(\w)/g);
//     let initial = matches.join('').toUpperCase();
//     //unsername
//     let user = element.slice(element.charAt(0), element.indexOf(" "));
//     let username = `${user}123`
//     //length
//     let length = element.replaceAll(" ", "").length;
//     return {
//         FullName: fullName,
//         initials: initial,
//         username: username,
//         length: length
//     }
// }

// const result = students.map(details);

// console.log(result)


// let num = [1,2,3,4,5,6,7,8,9]

// let oddNum = num.filter(Odd)

// let evenNum = num.filter(even)

// console.log(oddNum)
// console.log(evenNum)

// function even(element){
//     return element % 2 === 1;
// }
// function Odd(element){
//     return element % 2 === 0;
// }

// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"]

// const shortWordss = words.filter(shortWords)

// console.log(shortWordss)

// function shortWords(element){
//     return element.length < 6;
// }


// const users = [
//   { name: "John", active: true },
//   { name: "Maria", active: false },
//   { name: "Alex", active: true },
//   { name: "Sophia", active: false }
// ];

// let active = users.filter(actives)

// console.log(active)

// function actives(element){
//     return element.active == true;
// }


// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Monitor", price: 12000 }
// ];

// let expensive = products.filter(expensiveness)

// console.log(expensive)

// function expensiveness(element){
//     return element.price > 10000;
// }


// const words = [
//   "javascript",
//   "cat",
//   "developer",
//   "hi",
//   "programming",
//   "dog"
// ];


// let longWords = words.filter(long)

// console.log(longWords)

// function long(element){
//     return element.length > 5;
// }


const prices = [5,30,10,25,15,20]

const total = prices.reduce(sum);

console.log(`$ ${total.toFixed(2)}`)

function sum(previous, next){
  return previous + next
}


const grade = [75,50,90,80,65,95]

const max1 = grade.reduce(getMax)
const min1 = grade.reduce(getMin)

console.log(max1)
console.log(min1)

function getMax(previous, next){
  return Math.max(previous, next);
}

function getMin(previous, next){
  return Math.min(previous, next);
}



const fruits1 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const result2 = fruits1.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(result2);


const hello = function(){
  console.log(`Hello`)
}

hello();

setTimeout(function(){
  console.log(`hello`)
}, 3000)



const numbers1 =[1,2,3,4,5,6,7]

const string = ["apple", "orange", "sunkist", "coconut"]

const capitalize = string.map(function(element){
  return element.charAt(0).toUpperCase() + element.slice(1)
})

const squared = numbers1.map(function(element){
  return Math.pow(element, 2)
})

const even = numbers1.filter((element) => {
  return element % 2 === 0;
})

const odd = numbers1.filter((element) => {
  return element % 2 === 1;
})

const sum1 = numbers1.reduce((previous, next) => {
  return previous + next;
})

console.log(odd)
console.log(even)
console.log(squared)
console.log(capitalize)
console.log(sum1)


const person1 = {
  firstName: "Didyeey",
  lastName: "Quins",
  age: 22,
  isEmployed: true,
  dangalGreetings: () => {console.log(`Dangal Greetings Kapatid`)}
}

const person2 = {
  firstName: "James",
  lastName: "Reid",
  age: 28,
  isEmployed: false,
  food: "hamburger",
  eating: function() {
    console.log(`Hello my name is ${this.firstName} and my favorite food is ${this.food}`)
  }
}

person2.eating();


const employees = [
  {
    firstName: "James",
    lastName: "Reid",
    age: 28,
    salary: 50000,
    active: true,
    skills: ["JavaScript", "React", "Node.js"],

    introduce() {
      console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
    }
  },

  {
    firstName: "Maria",
    lastName: "Santos",
    age: 22,
    salary: 35000,
    active: false,
    skills: ["HTML", "CSS"],

    introduce() {
      console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
    }
  },

  {
    firstName: "Alex",
    lastName: "Cruz",
    age: 30,
    salary: 70000, 
    active: true,
    skills: ["Python", "Django", "SQL"],

    introduce() {
      console.log(`Hi I'm ${this.firstName} ${this.lastName}`);
    }
  }
];


const activeUsers = employees.filter((element) => {
  if(element.active == true){
    return element.introduce()
  }
})

const competitive = employees.filter((element) => {
  if(element.salary > 40000){
    return element.firstName + element.lastName
  }
})

const fullNames = employees.map((element) => {
  return element.firstName + element.lastName
})

const totals = employees.reduce((total, employees) => {
  return total + employees.salary;
}, 0)

const topEmployee = employees.reduce((highest, employees) => {
  return highest.salary > employees.salary ? highest : employees
})

const python = employees.filter((element) => {
  if(element.skills.includes("Python")){
    return element.firstName + element.lastName;
  }
})


console.log(python)
console.log(topEmployee)
console.log(totals)
console.log(fullNames)
console.log(competitive)
console.log(activeUsers)


// ===================Start=================================
class User{
  
  static userCount = 0;

  constructor(username, age, role){
    this.username = username
    this.age = age
    this.role = role
    User.userCount++;
  }
}

const user1 = new User("Didyeey");
const user2 = new User("Didyeeys");
const user3 = new User("Didyeeys", 22, "admin");

console.log(`${user3.username} ${user3.age} ${user3.role}`)
console.log(`${user1.username} ${User.userCount}`)

// Destructuring 
let a = 5;
let b =10

a = a + b;
b = a - b;
a = a - b

console.log(`${a} ${b}`)

let c = 1;
let d = 2;

[c, d] = [d, c];

console.log(c, d);

const nums = [1,2,3,4,5,6,7,8,9];

[nums[1], nums[3]] = [nums[3], nums[1]];

console.log(nums)

const colors = ['red', 'green', 'blue', 'violet', 'pink']

const [color1, color2, color3, ...extraColors] = colors;

console.log(`${color1} ${color2} ${color3}`)
console.log(extraColors)


const person3 = {
  firstName: "dexter",
  lastName: "reid",
  age: 22,
};

const person4 = {
  firstName: "Madi",
  lastName: "Diaz",
  age: 29,
  role: "Lead"
};

// const {firstName, lastName, age, role="staff"} = person3;

// console.log(`${firstName} ${lastName} ${age} ${role}`)

function display({firstName, lastName, age, role="unemployed"}){
  console.log(`name: ${firstName} ${lastName}`)
  console.log(`age: ${age}`)
  console.log(`role: ${role}`)
}


display(person4);


const fruitss = [
  {
    name: "Apple",
    color: "Red",
    calories: 950
  },

  {
    name: "Banana",
    color: "Yellow",
    calories: 105
  },

  {
    name: "Orange",
    color: "Orange",
    calories: 62
  },

  {
    name: "Mango",
    color: "Yellow",
    calories: 202
  },

  {
    name: "Grapes",
    color: "Purple",
    calories: 69
  },

  {
    name: "Watermelon",
    color: "Green",
    calories: 85
  },

  {
    name: "Strawberry",
    color: "Red",
    calories: 4
  },

  {
    name: "Pineapple",
    color: "Brown",
    calories: 452
  }
];


const fruitNames = fruitss.map(fruit => fruit.name);
const fruitColor = fruitss.map(fruit => fruit.color);
const fruitCalories = fruitss.map(fruit => fruit.name + " " + fruit.calories)
const highCal = fruitss.filter(fruit => fruit.calories > 100)

const expensive = fruitss.reduce((max, fruit) => {
  return fruit.calories > max.calories ? fruit : max
})
console.log(fruitNames)
console.log(fruitColor)
console.log(fruitCalories)
console.log(highCal)
console.log(expensive)


const num =[20,3,15,5,16,22,40,32]

const ascending = [...num].sort((a,b) => {
  return a - b;
})

const descending = [...num].sort((a,b) => {
  return b - a;
})

console.log(ascending)
console.log(descending)


const sorted = fruitss.sort()
console.log(sorted)


const idols = ["john", "Angel", "bob"]

const sorted1 = [...idols].sort((a,b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase())
})

const sorted2 = [...idols].sort((a,b) => {
  return b.toLowerCase().localeCompare(a.toLowerCase())
})

console.log(sorted1)
console.log(sorted2)


const sorted3 = [...fruitss].sort((a,b) => {
  return a.calories - b.calories
})

const sorted4 = [...fruitss].sort((a,b) => {
  return a.name - b.name
})

console.log(sorted3)
console.log(sorted4)

const posts = [
  {
    title: "Frontend Developer Roadmap",
    createdAt: "2026-05-22"
  },

  {
    title: "Building a Todo App",
    createdAt: "2026-05-15"
  },

  {
    title: "Learning JavaScript Basics",
    createdAt: "2026-05-01"
  },

  {
    title: "Working with APIs",
    createdAt: "2026-05-20"
  },

  {
    title: "Introduction to React",
    createdAt: "2026-05-12"
  },

  {
    title: "Understanding Async Await",
    createdAt: "2026-05-18"
  },

  {
    title: "Mastering Objects in JS",
    createdAt: "2026-05-10"
  },

  {
    title: "Understanding Array Methods",
    createdAt: "2026-05-05"
  }
];


const newest = [...posts].sort((a,b) => {
  return new Date(a.createdAt) - new Date(b.createdAt)
})

const oldest = [...posts].sort((a,b) => {
  return new Date(b.createdAt) - new Date(a.createdAt)
})

console.log(newest)
console.log(oldest)


let string1 = "the javascript by didyeey"

let words = string1.split(" ")
console.log(words)
let answer = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1)
})

console.log(answer.join("\n"))

let the = string1.charAt(0).toUpperCase() + string1.slice(1,3)
let js = string1.charAt(4).toUpperCase() + string1.slice(5,15)
let by = string1.charAt(15).toUpperCase() + string1.slice(16,18)
let didyeey = string1.charAt(18).toUpperCase() + string1.slice(19)

console.log(`${the} \n ${js} \n ${by} \n ${didyeey}`)


console.log(typeof Nan)
console.log(NaN===NaN)
console.log(NaN===NaN)

let y = 2;

console.log(++y)
console.log(y)


console.log([]==![])


function fn (){
  return {
    name: "didyeey"
  }
}

console.log(fn())

console.log(typeof null)


const mun = [1,2,3,4,5,6,7,8]

const totals2 = mun.reduce((accumulator, element) => {
  return accumulator += element
})


console.log(totals2)



const names2 = "hello love good bye"

const formateds2 = names2.split(' ')


const results = formateds2.map((element => 
   element.charAt(0).toUpperCase() + element.slice(1)
)).join(" ")

console.log(formateds2)
console.log(results)


// const time = setTimeout(() => {
//   console.log(`Hello`)
// }, 3000)


let timeOutID;

function startTimer() {
  timeOutID = setTimeout(() => {
    window.alert("LAloves")
    console.log(`Started`)
  }, 3000)
}

function timeOut(){
  clearTimeout(timeOutID)
  console.log(`cleared`)
}


//Promises 

function walkDog(){
  
  return new Promise((resolve, reject) => {

        const walkedDog = true;

        if(walkedDog){
          resolve(`Walk the dog 🐕`)
        }else {
          reject(`fail Walk the dog 🐕`)
        }
  })
}

function takeOutTrash(){

  return new Promise((resolve, reject) => {

      const taskDone = true;

      if(taskDone){
    resolve(`taking our the trash 🐕`)
      }else{
        reject(`didn't taking our the trash 🐕`)
      }
  })
}

function cleanKitchen(){
  
  return new Promise((resolve, reject) => {
    const taskDone = true; 

    if(taskDone){
      resolve(`cleaning the Kitchen 🐕`)
    }else{
      reject(`didn't cleaning the Kitchen 🐕`)
    }
  })
}

// const chores = walkDog().then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); console.log(`All house chores completed`)})
//          .catch(error => {console.log(error)})


async function doChores() {
  
  const task1 = await Promise.all([
    walkDog(),
    takeOutTrash(),
    cleanKitchen()

  ]);

  console.log(task1)

}

doChores()


//API 

// const responses = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//                   .then(response => {
//                     if(!response.ok){
//                       throw new Error("Could not fetch resources")
//                     }

//                     return response.json()
//                   })
//                   .then(values => {
//                     const total = values.stats.reduce((acc, element) => {
//                       return acc + element.base_stat
//                     }, 0)

//                     console.log(total)
//                   })
//                   .catch(error => console.log(error))

console.log(0.1 + 0.2 === 0.3)


const obj = {
  a:1, 
  b:2
}

const stri = JSON.stringify(obj)
console.log(stri)

// const muns = [1,2,3,4,5]

// const totals23 = muns.reduce((acc, element) => {
//   return acc += element
// })

// console.log(totals23)




const data1 = fetch("https://pokeapi.co/api/v2/pokemon/blastoise")
              .then(response => response.json())
              .then(values => {
                console.log(values)
                const min = Math.min(...values.stats.map((element) => {
                 return element.base_stat
                }));
                console.log(min)
              })
              .catch(error => console.log(error));


const dups = [1,2,3,4,1,3,5,6,7]

const dumps = dups.reduce((acc, element) => {
  acc[element] = (acc[element] || 0) + 1
  return acc;
}, {})
console.log(dumps)


const abc = {};
abc.key = "test";
const abc2 = {...abc}

abc2.key = "test1"

console.log(abc.key)


console.log(test2);
var test2 = 100;