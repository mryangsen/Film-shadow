## 配置
### pxtrem配置
+ 安装依赖
```shell
    npm install lib-flexible –-save
    npm install postocss-pxtorem -dev
```
+ 添加meta
```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

```

+ 引入文件

```
    main.js  import 'lib-flexible'
```

+ 配置postcss-pxtorem
```shell
   
    postcss
    module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      "rootValue": 75, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
      "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
   }
  }
}



```

### 配置别名

```shell
  const path = require('path');
  function resolve (dir) {
      return path.join(__dirname, dir)
  }
  console.log('vue.config.js ============>')
  module.exports = {
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@assets',resolve('src/assets'))
          .set('@components',resolve('src/components'))
          .set('@static',resolve('src/static'))
    }
  }

```


### 原则
### 切图部分

### 样式
> 为了保持整体样式统一, 定义了基本样式 采用sass变量调用

```css
  统一padding
  $basePadding: 17.5px
  版心
  $baseCenterWidth: 340px;
  字体颜色 
  $baseFontColor: #DFDFDF;
  字体颜色2
  $baseFontColor2: #FBC34A;
  背景色
  $baseBgColor: #22262D;
  次级背景色
  $baseBgLightColor: #22262D;
  渐变色 
  @mixin changeColor(){
    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
  }
  button{
    outline: none;
    border: none;
  }

```

### 代码结构

+ components  全局公共组件
+ router  路由 原则上除了一级路由 不应该出现 其他一级路由 比如/home  /xxxx
  - 自行添加自己部分路由 注释清楚 不要修改别人的 冲突手动合并
+ store  vuex
  - modules  模块
    - xx.js
  - index.js 
+ api  模拟数据接口,返回promise,数据从mock获取
  - xx.js
+ mock
  - xx.js
+ view  视图部分
  - home
    - components  当前域下的公用组件
    - Home.vue  主视图
    - other
      - other.vue  其他页面
  - cinema 
+ utils 工具类
+ assets 静态资源
  - imgs
    - icons  公共icon
    - home   home路由下图片资源
      - xxx  有必要可建立二级文件夹




