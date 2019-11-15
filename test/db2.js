// //引入模块
// const Sequelize = require('sequelize');
// //得到实例对象
// //数据库名称、账号、密码
// const sequelize = new Sequelize('SS', 'nodeuser', 'Dyx12345678.', {
//     host: '192.168.101.52',
//     dialect: 'mysql'
//   });


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

//   User.sync();
  module.exports = {User};