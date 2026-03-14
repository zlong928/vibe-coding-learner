// JavaScript 基础练习 - 运算符和表达式

// 算术运算符
let a = 10;
let b = 3;
console.log("a + b =", a + b); // 加法
console.log("a - b =", a - b); // 减法
console.log("a * b =", a * b); // 乘法
console.log("a / b =", a / b); // 除法
console.log("a % b =", a % b); // 取模
console.log("a ** b =", a ** b); // 幂运算 (ES7)

// 自增自减
let counter = 0;
console.log("++counter:", ++counter); // 前增
console.log("counter++:", counter++); // 后增
console.log("counter after post-inc:", counter);

// 赋值运算符
let x = 5;
x += 3; // 等同于 x = x + 3
console.log("x after += 3:", x);
x -= 2;
console.log("x after -= 2:", x);
x *= 4;
console.log("x after *= 4:", x);
x /= 2;
console.log("x after /= 2:", x);
x %= 3;
console.log("x after %= 3:", x);

// 比较运算符
console.log("5 == '5':", 5 == "5"); // 宽松相等 (类型转换)
console.log("5 === '5':", 5 === "5"); // 严格相等 (类型和值)
console.log("5 != '5':", 5 != "5");
console.log("5 !== '5':", 5 !== "5");
console.log("10 > 5:", 10 > 5);
console.log("10 >= 10:", 10 >= 10);
console.log("5 < 10:", 5 < 10);
console.log("5 <= 5:", 5 <= 5);

// 逻辑运算符
let isSunny = true;
let isWeekend = false;
console.log("isSunny && isWeekend:", isSunny && isWeekend); // AND
console.log("isSunny || isWeekend:", isSunny || isWeekend); // OR
console.log("!isSunny:", !isSunny); // NOT

// 三元运算符
let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';
console.log("Score 85 grade:", grade);

// 字符串运算
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);
console.log("Length of fullName:", fullName.length);
console.log("First char:", fullName[0]);
console.log("Index of 'o':", fullName.indexOf('o'));
