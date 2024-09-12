# 云对象调用
在views/test.vue里面调用云对象，点击admin的云对象测试菜单，看页面结果<br>
打开f12看http请求，这是云对象调用，非本地调用
````vue
<script setup lang="ts">
  import {Student} from "../../../api/Student";
  import {onMounted, ref} from "vue";
  let s=new Student() //创建云对象
  let msg=ref('')
  onMounted(async ()=>{
    let rsp=await s.hello()//异步调用hello云方法
    alert(rsp)     //弹窗显示云方法调用结果
    msg.value=rsp  //把结果展示到页面
  })
</script>
<template>
  <view>云对象测试页面</view> <br>
  <br>
  <view>云方法hello响应结果:{{msg}}</view>
</template>
<style scoped>
</style>
````
## 云对象的响应式
前端创建的云对象是具有响应式的，同时，如果云方法返回值是云对象的属性，则返回数据自动刷新云对象，响应到页面<br>
如:查询用户信息，查询用户列表,结果是属于对象本身的,结果会自动赋值给云对象<br>
user.get后user就是结果,user.gets后user.list就是结果，无需赋值
````vue
<script setup lang="ts">
  import {User} from "../../../api/User";
  let s=new User() //创建云对象
  s.gets()//无限手动赋值,s.list就是云方法结果
</script>
<template>
  <view>云对象测试页面</view> <br>
  <br>
  <view>云方法hello响应结果:{{JSON.stringify(s.list)}}</view>
</template>
<style scoped>
</style>
````
