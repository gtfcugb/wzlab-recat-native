# wzlab-recat-native
基于react native的界面开发架构研讨

# Install
react native 0.37版本，react-native  init wzlab 

安装以下依赖包：
npm i --save-dev babel-preset-react-native babel-plugin-module-alias

npm install --save react-redux

npm install --save redux

npm i --save redux-logger

npm i --save redux-thunk

然后复制index.ios.js 和src到工程,修改根目录下.babelrc ,增加如下：
"plugins": [
    ["module-alias", [
      { "src": "../../../src", "expose": "src" }
    ]]
  ]
  
# Show
![image](https://github.com/gtfcugb/wzlab-recat-native/blob/master/doc/wzlab-1.png)

![image](https://github.com/gtfcugb/wzlab-recat-native/blob/master/doc/wzlab-2.png)

![image](https://github.com/gtfcugb/wzlab-recat-native/blob/master/doc/wzlab-3.png)

![image](https://github.com/gtfcugb/wzlab-recat-native/blob/master/doc/wzlab-4.png)
