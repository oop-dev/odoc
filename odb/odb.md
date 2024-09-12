# 对象数据库odb
以面向对象形式操作数据库，避免复杂的sql，简化开发,一行代码实现5表，甚至10表联查
## 举例:查用户信息，角色，权限
普通sql是user,user_role,role,role_permission,permission,5表联查,odb只需要一行,<br>
多表增删改查都是一行代码完成，对象里面嵌套的对象是子表，增删改查自动连表，支持n层嵌套<br>
**表达式代表查双层所有,查Role本层数据，和下层Permission数据
````ts
export class User extends Base<User> {
    @Col({tag:'名称',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    name=''
    @Col({tag:'密码',type:'',filter:true,show:'1111'})//1111代表增删改查是否显示
    pwd=''
    @Col({tag:'角色',sel:[],link:'nn',show:'1111'})//1111代表增删改查是否显示
    role: Role[]|Role=[];
    async getuser() {
        return await super.sel("id", "name", Role.sel('**')).get()
    }
}
````

