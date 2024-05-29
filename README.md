
# 1、pokemonDex
一个简易版微信小程序精灵图鉴，使用的技术栈为uni-app(前端)+express(后端)+sqlite数据库，其中sqlite中的的数据皆基于[jousp](https://github.com/jhy/jsoup)爬取自[神奇宝贝百科](https://wiki.52poke.com/wiki/%E4%B8%BB%E9%A1%B5)。

# 2、如何运行？
* pokemon-control为基于express的简易后端程序。
---
```
将数据库文件地址替换为自己的地址
yarn&npm i
yarn start&npm run start
```
* wqwqw为基于express的简易后端程序。
```
直接使用hbuildX运行到微信模拟器即可，
将main.js中的baseUrl改为自己的地址或者localhost：3000
```
#3、爬虫参考
爬虫程序使用的是[fantasticmao](https://github.com/fantasticmao/pokemon-wiki/tree/master)这位大佬的，原网站有些元素有所变动需要自己调整。


