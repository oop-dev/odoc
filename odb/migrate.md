# 自动建表
继承Base后，启动项目会自动建表，登录分配的数据库查看
## 创建用户表示例
以下云对象项目启动自动创建商家表
````ts
import {Base,Col,Menu} from "../node_modules/oop-core/Base";
import {Manager} from "./Manager";
@Menu("商家")
export class Merchant extends Base<Merchant> {
    @Col({tag:'名称',type:'',filter:true,show:'1111',link:'n1'})//1111代表增删改查是否显示
    name=''
    @Col({tag:'余额',show:'1111',link:'sstr'})//rstr
    balance=0//支持11,1n,n1,nn,前两个默认子指向父亲，后两个显示申明父持有子
    @Col({tag:'区域经理',sel:[],link:'n1',show:'1111'})//1111代表增删改查是否显示
    manager=new Manager()
    @Col({tag:'订单',link:'1n',show:'0111'})//1111代表增删改查是否显示
    order=[]
    @Col({tag:'应用',link:'1n',show:'1111'})//1111代表增删改查是否显示
    app=[]
    async gets() {
        return await super.gets()
    }
}
````
## 关系
````
建表会自动关联关系,请配置关系,11,1n,n1,nn，代表1对1,1对多,多对1,多对多
````
## 对象类型
````
关系是1个用对象，manager=new Manager()，直接创建对象，方便获取类型和依赖注入
````
## 数组类型
````
关系是多个用数组，如order=[]，由于js语言限制,无法获取数组类型,
因此这里有个约定，属性名就是类名小写，如Order类型,属性名只能写成order
而且不写类型可以巧妙解决循环依赖问题，用户持有订单，订单又持有用户，很麻烦
````
