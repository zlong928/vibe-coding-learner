// JavaScript 基础练习 - 函数和作用域

// 函数声明方式1：函数声明
function greet(name) {
    return "你好，" + name + "！";
}
console.log(greet("Alice"));

// 函数声明方式2：函数表达式
const greet2 = function(name) {
    return `你好，${name}！`;
};
console.log(greet2("Bob"));

// 函数声明方式3：箭头函数 (ES6)
const greet3 = (name) => {
    return `你好，${name}！`;
};
console.log(greet3("Charlie"));

// 简化的箭头函数（单行返回）
const greet4 = name => `你好，${name}！`;
console.log(greet4("Dave"));

// 作用域示例
let globalVar = "我是全局变量";

function testScope() {
    let functionVar = "我是函数内部变量";
    console.log("在函数内部:", globalVar); // 可以访问全局变量
    console.log("在函数内部:", functionVar);
}

// testScope(); // 取消注释来看效果
console.log("在函数外部:", globalVar);
// console.log("在函数外部:", functionVar); // 错误！无法访问函数内部变量

// 块级作用域
if (true) {
    let blockLet = "我是块级变量";
    const blockConst = "我是块级常量";
    var blockVar = "我是用var声明的（函数作用域）";
}
// console.log(blockLet); // 错误！块级作用域外无法访问
// console.log(blockConst); // 错误！
console.log(blockVar); // 可以访问！（var 的特性）

// 闭包简单示例
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log("第一次调用:", counter());
console.log("第二次调用:", counter());
console.log("第三次调用:", counter());
