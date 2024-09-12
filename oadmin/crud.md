# 1对1:看Permission云对象和页面
启动下面,数据库表和前端页面自动生成
````
import {Base, Col, Menu} from "../node_modules/oop-core/Base";
export class Permission extends Base<Permission> {
    @Col({tag: '名称', type: '', filter: true, show: '1111'})//1111代表增删改查是否显示
    name = ''
}

````
# 注解说明
启动项目,数据库表和前端页面自动生成
````
tag  //前端字段说明
sel  //下拉框形式输入，默认input输入
radio //单选形式输入，默认input输入
check //单多选形式输入，默认input输入
filter //是否作为查询条件
show   //1111代表增删改查页面显示该字段
link   //11,1n,n1,nn四种对象关系,11,1n这两种关系可以默认不写，n1,nn必须声明
````
# 1对多:看Merchant云对象和页面
# 多对1:看Order云对象和页面
# 多对多:看Role云对象和页面
