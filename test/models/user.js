// //引入模块
// const Sequelize = require('sequelize');
// const config = require('./config')
// //得到实例对象
// //数据库名称、账号、密码
// const sequelize = new Sequelize(config.name, config.username, config.password, {
//     host: config.host,
//     dialect: config.type
//   });

//解构赋值引用
const { Sequelize, sequelize, config } = require('./init')

const User = sequelize.define('user', {
    // 属性
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    // 参数
});

//   User.sync();创建表的时候用，创建完表之后 添加数据时，就可以将其注释 添加数据即可
module.exports = { User };