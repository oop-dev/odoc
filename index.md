---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "oop-dev对象开发平台"
  text: "全球首个面向对象的全栈框架"
  tagline: 基于vue+js+postgre,云对象，对象数据库，实现的全栈开发，这里没有http,接口, sql,vo,三层架构等概念，云对象+odb实现快速开发，解放生产
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 云对象:user.get() 代替http
      link: /markdown-examples
    - theme: brand
      text: 5表联查:super.sel("id", "name", Role.sel('**')).get()
      link: /markdown-examples      
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

