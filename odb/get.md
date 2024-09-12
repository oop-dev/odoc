# 1.单表查询
````ts
super.get(id) //根据id查询单个
super.get(where) //根据条件查询单个
super.get() //若没有条件，则动态查询，对象的属性就是动态and条件
super.sel("id", "name").get() //选择字段
super.gets(id)   //根据id查询多个
super.gets(where)  //根据id查询多个

````
````ts
export class User extends Base<User> {
    @Col({tag:'名称',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    name=''
    @Col({tag:'密码',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    pwd=''
    @Col({tag:'角色',sel:[],link:'nn',show:'1111'})//1111代表增删改查是否显示
    role: Role[]|Role=[];
    async getid() {
        return await super.get(1)
    }
    async getsel() {
        return await super.sel('id',name).get(1)
    }
    async getwhere() {
        return await super.get(`id=1 and name='bob'`)
    }
    async getDynamic() {
        this.id=1
        this.name='bob'
        return await super.get() //等价与super.get(`id=1 and name='bob'`)
    }
}
````
# 2.多表联查
````ts
super.wh(where).sel("id", "name", Role.sel('**')).get(where) 
说明:第一个where是单表自己的条件,最后get中的where是笛卡尔积结果集的条件
举例:查第一页用户的信息，角色，权限,
super.wh('offset 0 limit 10').sel("id", "name", Role.sel('**')).get() 
说明：此时分页条件只能属于用户，而不能写在get()中,那是笛卡尔积的前十条
````
# **表达式
````ts
Role.sel('*') //代表查Role对象的所有数值类型,查角色id,name，不查Permission
Role.sel('**') //代表查Role对象的所有数值类型+引用类型,查角色id,name,Permission所有
````
## 对象条件和笛卡尔积条件
第一个where是单表自己的条件,最后get中的where是笛卡尔积结果集的条件<br>
## 主对象条件案例
用户分页查询
````ts
super.wh('offset 0 limit 10').sel("id", "name", Role.sel('**')).get()
//分页是取用户前10条，而非笛卡尔积前10条，分页条件不能写在get中，那是笛卡尔积条件
````
## 子象条件案例
用户分页查询,用户的角色只显示admin
````ts
super.wh('offset 0 limit 10').sel("id", "name", Role.sel('**').wh(`name=admin`)).get()
//先查10条user，然后这10条只和角色的admin数据连表,不是admin，user有数据，只是role那里显示空
````
## 笛卡尔积条件查询
只查admin角色的用户
````ts
super.sel("id", "name", Role.sel('**')).get(`role.name==admin`)
//用户表和角色表所有数据连表，笛卡尔积结果集里筛选只要admin的数据
````
````ts
export class User extends Base<User> {
    @Col({tag:'名称',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    name=''
    @Col({tag:'密码',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    pwd=''
    @Col({tag:'角色',sel:[],link:'nn',show:'1111'})//1111代表增删改查是否显示
    role: Role[]|Role=[];
    async getpage() {
        return await super.sel("id", "name", Role.sel('**')).get()
    }
}
````
## 其他查询api
只查admin角色的用户
````ts
super.getpage(1,10) //分页
super.count(where) //行数
super.query(sql) //原生sql,可以操作增删改查
````
