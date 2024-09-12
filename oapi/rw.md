# 获取请求对象
请求对象是云方法的末尾参数
````ts
export class Student  {
    name=''
    age=0
    sex=0
    score=0
    async hello(r) {
        console.log(r)
        return 'hello world'
    }
    async hello(name,age,r) {
        console.log(r)
        return 'hello world'
    }
}
````
# 获取响应对象
Rsp()或者new Response(),后者是bun.js原生对象
````ts
export class Student  {
    name=''
    age=0
    sex=0
    score=0
    async hello() {
        let rsp=Rsp(403, 'Forbidden')
        return 
    }
    async hello1(name,age,r) {
        rsp = new Response('', {status: 302});
        rsp.headers.set('Location', 'http://ww.baidu.com');
        return rsp
    }
}
````
