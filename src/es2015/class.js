/**
 * es2015中支持静态方法
 */

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

//Super expression must either be null or a function, not object
function Fun({name,age}){
    this.name = name;
    this.age = age;
}

console.log(Fun.prototype);

class Baisc extends Fun{
    constructor(obj){
        super(obj);//在派生类中, 必须先调用 super() 才能使用 "this"。
    }

    static change(str){
        let arr = str.split("");
        console.log(arr);
    }
}

let baisc = new Baisc({name:'张三',age:20});
//console.log(baisc.__proto__.__proto__.prototype);
Baisc.change("你好啊！");