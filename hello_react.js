/**
 * Author johnnyZhang
 * Site johnnyzhang.cn
 * CreateTime 2018/5/21.
 */
let i = 1;
let myStyle = {
    fontSize: 18,
    color: '#FF0000'
};
let arr = [
    <h1>Hello World</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
    <div>
        <div>{arr}</div>
        <h1>Hello, world!</h1>
        <p data-num="2">{1+1}</p>
        /* 这里是注释*/
        <p style={myStyle}>{i == 1 ? 'True' : 'False'}</p>
    </div>
    ,
    document.getElementById('example')
);