## 项目名称：vuearl

**描述**
跟着Glutinous Rice项目一起学Spring Book;
Glutinous Rice项目用的是vue2+element2,
而这个项目尝试用vue3+element plus。
跟着教程走一遍看看先.

### 初始化安装node_modules

```
npm install
```

### 编辑并热加载启动

```
npm run serve
```

### 编译并缩小为可部署的工程

```
npm run build
```

### 可以使用以下命令清楚npm未使用的依赖

```
npm prune
```

### 自定义配置

查看： [Configuration Reference](https://cli.vuejs.org/config/).

## 关于Maven项目文件的目录结构

### 什么是mvnw

`mvnw`是Maven Wrapper的缩写。因为我们安装Maven时，默认情况下，系统所有项目都会使用全局安装的这个Maven版本。但是，对于某些项目来说，它可能必须使用某个特定的Maven版本，这个时候，就可以使用Maven
Wrapper，它可以负责给这个特定的项目安装指定版本的Maven，而其他项目不受影响。

简单地说，Maven Wrapper就是给一个项目提供一个独立的，指定版本的Maven给它使用。

### 安装Maven Wrapper

安装Maven Wrapper最简单的方式是在项目的根目录（即`pom.xml`所在的目录）下运行安装命令：

```
mvn -N io.takari:maven:0.7.6:wrapper
```

它会自动使用最新版本的Maven（`0.7.6`只是举例）最新的Maven
Wrapper版本可以去[官方网站](https://github.com/takari/maven-wrapper)查看。

如果要指定使用的Maven版本，使用下面的安装命令指定版本，例如`3.1.3`：

```
mvn -N io.takari:maven:0.7.6:wrapper -Dmaven=3.1.3
```

安装后，查看项目结构，发现多了`mvnw`、`mvnw.cmd`和`.mvn`目录，我们只需要把`mvn`命令改成`mvnw`就可以使用跟项目关联的Maven。例如：

```
mvnw clean package
```

在Linux或macOS下运行时需要加上`./`：

```
./mvnw clean package
```

可以把项目的`mvnw`、`mvnw.cmd`和`.mvn`提交到版本库中，这样就可以使所有开发人员使用统一的Maven版本。

# 项目框架搭建完成，准备开始！

_2023年02月23日 19:59:28_

## 项目初始框架

```ascii
Paimon
├── .mvn
│   └── wrapper
│       ├── maven-wrapper.jar
│       └── maven-wrapper.properties
├── mvnw
├── mvnw.cmd
├── pom.xml
├── ryne
│   ├── node_modules/*
│   ├── package.json
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── vue.config.js
│   ├── babel.config.js
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   └── src
│       ├── assets/*
│       ├── comonents/*
│       ├── router
│       │      └── index.js
│       ├── views/*
│       ├── utils/*
│       ├── App.vue
│       └── main.js
└── src
    ├── main
    │   ├── java
    │   └── resources
    └── test
        ├── java
        └── resources
```

### 安装element plus

```
npm install element-plus --save
```

### 引入element plus

```javascript
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
```

###  创建模块

