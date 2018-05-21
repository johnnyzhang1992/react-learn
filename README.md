# react-learn
React.js 学习记录

# 样式

React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
```$xslt
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```

# 注释

注释需要写在花括号中，实例如下：

```$xslt
ReactDOM.render(
    <div>
    <h1>菜鸟教程</h1>
    {/*注释...*/}
     </div>,
    document.getElementById('example')
);
```
# 数组

JSX 允许在模板中插入数组，数组会自动展开所有成员：
```$xslt
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```

# HTML 标签 vs. React 组件
React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。

要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。
```$xslt
var myDivElement = <div className="foo" />;
ReactDOM.render(myDivElement, document.getElementById('example'));
```

要渲染 React 组件，只需创建一个大写字母开头的本地变量。
```$xslt
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。

## 关于React注释的问题：

1、在标签内部的注释需要花括号

2、在标签外的的注释不能使用花括号

```$xslt
ReactDOM.render(
    /*注释 */
    <h1>孙朝阳 {/*注释*/}</h1>,
    document.getElementById('example')
);
```

## 关于React入门容易出错的地方：

如同上面说的，代码中嵌套多个 HTML 标签，需要使用一个标签元素包裹它

1.错误例子：
```$xslt
ReactDOM.render(
  <h1>这是错误的例子</h1>
  <span>假设这里是标题下面的内容</span>,
  document.getElementById("example")
);
```

2.正确例子：
```$xslt
ReactDOM.render(
  <section>
    <h1>这是正确的例子</h1>
    <span>假设这里是标题下面的内容</span>
  </section>,
  document.getElementById("example")
);
```
