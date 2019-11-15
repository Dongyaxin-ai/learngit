//引入模块
const Sequelize = require('sequelize');

//得到实例对象
const sequelize = new Sequelize('SS', 'nodeuser', 'Dyx12345678.', {
    host: '192.168.101.52',
    dialect: 'mysql'
})

const Model = Sequelize.Model;
class User extends Model { }

//定义模型
User.init({
    // 对象的属性（对应的是数据库里边的字段）
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    //模型的名称（数据库中的数据表会根据本配置项的复数创建表名）
    modelName: 'user'
    // 参数
});

//表示将User模型和数据库的表结构进行同步
User.sync();