// JavaScript 基础练习 - 变量和数据类型

// 变量声明
let name = "zlong928";
let age = 24;
let isLearning = true;
let height = null; // 尚未知
let weight; // 未赋值，默认为 undefined

// 数据类型演示
console.log("姓名:", name, typeof name);
console.log("年龄:", age, typeof age);
console.log("是否在学习:", isLearning, typeof isLearning);
console.log("身高:", height, typeof height);
console.log("体重:", weight, typeof weight);

// 字符串拼接
let greeting = "你好，我是 " + name + "，今年 " + age + " 岁。";
console.log(greeting);

// 模板字符串（ES6+）
let greeting2 = `你好，我是 ${name}，今年 ${age} 岁。`;
console.log(greeting2);

// 数组
let skills = ["Git", "Zed", "HTML", "CSS"];
console.log("技能栈:", skills);
console.log("第一个技能:", skills[0]);

// 对象
let person = {
    name: "zlong928",
    age: 24,
    skills: ["Git", "Zed", "HTML", "CSS"],
    isLearning: true
};
console.log("个人信息:", person);
console.log("姓名:", person.name);
console.log("技能:", person.skills.join(", "));
