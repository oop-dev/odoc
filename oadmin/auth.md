# 登录和权限
User云对象已经实现jwt登录，和权限查询
````ts
async login({code,token}) {
if (await sha256(code)!=token)throw '验证码错误'
//5表联查，等于user,user_role,role,role_permision,permission的sql 5表联查
this.pwd=await sha256(this.pwd)
let user=await super.sel("id", "name", Role.sel('**')).get()
if (!user)throw '用户名密码错误'
return {user:user,token:await jwtToken(user)}
}
````
## 前端权限
v-if判断has('user/add'),判断是否有权限展示
````vue
<el-button v-if="has('user/add')" >新增</el-button>
````
## 后端登录拦截，和权限拦截
查看index.ts云对象全局拦截器
````ts
import {run, conf, verifyToken,getJwt, Rsp} from "oop-core/oapi";
run(intercepter)
async function intercepter(r) {
    const path = new URL(r.url).pathname.substring(1);
    let token=r.headers.get('Authorization')
    console.log('token',token)
    if (conf.auth && !conf.blacklist.includes(path) && !(await verifyToken(token))){
        //返回Response对象或者抛出Error代表终止
        return Rsp(401, 'Unauthorized')
    }
    if (conf.auth&&!conf.blacklist.includes(path) &&!has(getJwt(token).payload,path)){
        return Rsp(403, 'Forbidden')
    }
}
function has(user,perm) {
    console.log(user)
    let permissions=user?.role.flatMap(r=>r.permission)
    let has=permissions?.some(p =>['*',perm].includes(p.name))
    return has
}

````
