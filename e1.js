const express = require('express');
const fs = require('fs');
const app = express();
// const route = require('./application/route');
const bodyParser = require('body-parser');
//cookie-parser 是Express的中间件，用来实现cookie的解析
const cookieParser = require('cookie-parser');
//http是无状态协议，网络服务器可以指定一个唯一的session ID 作为cookie来代替每一个客户端
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: 'root',
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.urlencoded({ extended: false }))
//注册路由中间件
// app.use(require('./application/router/admin'));
// app.use(require('./application/router/student'));

//异步的写法 不阻塞
// fs.readdir('./application/router',function(err,data) {
//     for (const i of data) {
//         app.use(require('./application/router/' + i));
//     }
// })

//同步的写法 会阻塞
let data = fs.readdirSync('./application/router/');
    for (const i of data) {
        app.use(require('./application/router/' + i));
    }




//注册静态资源中间件，管理静态资源
app.use('/static', express.static('./application/static'));
app.use('/html', express.static('./application/html'));


//参数1： 给模板引擎起的名字（和模板文件的后缀名有关）
app.engine('html', require('express-art-template'));
//配置使用的模板引擎
app.set('view engine', 'html');
//配置模板文件的存储路径
app.set('views', __dirname + '/application/views');

app.listen('2000', '127.0.0.1', function () {
    console.log('服务已启动');

})

