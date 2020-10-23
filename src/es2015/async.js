/**
 * 异步使用，包括 Promise,async,await
 */

//异步函数

//1.Promise 基本使用
/* const promise = new Promise((resolve,reject)=>{
    const obj = {
        name:"jerry",
        age:10
    }
    resolve(obj);
})

promise.then(({name,age})=>{
    // console.log(name);
    // console.log(age);
}) */


//2.测试执行时间

/* console.log(1);

new Promise(resolve=>{
    setTimeout(() => {
        console.log(2);
    }, 2000);
    console.log(3);
})

console.log(4); */

//执行顺序 1 3 4 2

//3.使用体系,链式调用
/* new Promise(resolve=>{
    resolve("hello");
}).then(val=>{
    s;
    return val+" world";
}).catch(err=>{
    console.log(`error is ${err}`);
    return "error  happend"
}).then(val=>{
    console.log(`last value is ${val}`);
    return "nothing";
}) */

//4.Promise对象上面的方法

//快速建立Promise对象
/* Promise.resolve("hello").then(val=>{
    console.log(val);
    return `${val} world`;
}).then(val=>{
    console.log(val);
}) */

/* Promise.reject("error").then(val=>{
    console.log(val);
    return val;
}).catch(err=>{
    console.log(err);
    return "失败"
}).then(val=>{
    console.log(`最后的结果${val}`);
}) */

/* const pro = Promise.all([
    new Promise((resolve,reject) => {
        reject("1");
    }),
    new Promise(resolve => {
        resolve("2")
    }),
    new Promise(resolve => {
        resolve("3")
    })
])
pro.then(val => {
    console.log(val);
}).catch(erro => {
    console.log(`error is ${erro}`);
}) */


//
async function change(){
    console.log(1);
    const result = await testAsync();
    console.log(2);
    console.log(result);
}

function testAsync(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("good")
        }, 3000);
    })
}

change();