# 单表删除
````ts
super.del(id)
super.del(where)
super.del() //若没有条件，则动态查询，对象的属性就是动态and条件
````
````ts
export class User extends Base<User> {
    @Col({tag:'名称',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    name=''
    @Col({tag:'密码',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    pwd=''
    @Col({tag:'角色',sel:[],link:'nn',show:'1111'})//1111代表增删改查是否显示
    role: Role[]|Role=[];
    async del() {
        return await super.del()
    }
    async delId() {
        return await super.del(1)
    }
    async delWhere() {
        return await super.del('id=1')
    }
    async getDynamic() {
        this.id=1
        this.name='bob'
        return await super.del() //等价与super.get(`id=1 and name='bob'`)
    }
}
````
