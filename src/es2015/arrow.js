/**
 * 箭头函数
 */

//基础语法
/* 
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式（单一）   //相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; } 但是如果返回对象的话要注意

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明} */

//高级语法
/* 
//加括号的函数体返回对象字面表达式：
参数=> ({foo: bar})

//支持剩余参数和默认参数
(参数1, 参数2, ...rest) => {函数声明}
(参数1 = 默认值1,参数2, …, 参数N = 默认值N) => {函数声明}

//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6 */

/**
 * 示例
 */

//表达式写法：箭头函数中如果参数只有1个那么可以省略到括号，函数体中只是一个表达式的话代表的是返回值。 
const arr = [2,4,6,8];
let newArr = arr.map(v=>v*2);
//console.log(newArr);

//语句写法
let newArr1 = arr.map((value,index)=>{
    let val;
    if(value%4==0){
        val = value*2;
    }else{
        val = value;
    }
    return val;
})
//console.log(newArr1);

//this对象
let obj = {
    _name:'张三',
    _age:20,
    //对象的简写方式
    _friends:['关','张','刘'],
    print(){
        this._friends.forEach(val=>{
            //这里的this会继承上下文的this，而不再是undefined（严格模式）或则window（非严格模式）
            console.log(`${this._name}的朋友是${val}`); //字符串模板
        })
    }
}
//obj.print();

