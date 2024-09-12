# 云方法2种传参方式
云对象传参，云方法传参
## 定义云对象
api目录下创建Student.ts云对象，和greet，greet1云方法
````ts
export class Student  {
    name=''
    age=0
    sex=0
    score=0
    async hello(name) {
        return 'hello world'
    }
    async greet(name,age) {
        return `name:${name},age:${age}`
    }
    async greet1({name,age}) {
        return `name:${name},age:${age}`
    }
}

````
## 云对象传参
````ts
let s=new Student() //test.vue页面
s.name='bob'
s.age=18
s.greet()
````
````
响应结果:name:bob,age:18
````
## 云方法传参
````ts
let s=new Student() //test.vue页面
s.greet('bob',18)
或者
s.greet1({name:'body',age:18})
````
````
响应结果:name:bob,age:18
````
## 参数转换
若云对象没有该属性，则自动转换到方法参数里面
````ts
export class Student  {
    name=''
    age=0
    sex=0
    score=0
    async convert({type,code}) {
        console.log(type,code)
        return 'hello world'
    }
}
````
````ts
let s=new Student() //test.vue页面
s.type=1
s.code=2136
s.convert()  //type,code不属于Student对象，自动转换，等价与s.convert({type:1,code:2136})
````
