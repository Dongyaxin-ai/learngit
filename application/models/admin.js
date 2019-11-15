const {Sequelize,sequelize,config} = require('./initilize');

const Model = Sequelize.Model;
class admin extends Model { }

//定义模型
admin.init({
    // 对象的属性（对应的是数据库里边的字段）
    mobile: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    //模型的名称（数据库中的数据表会根据本配置项的复数创建表名）
    modelName: 'admin'
    // 参数
});

//表示将User模型和数据库的表结构进行同步
// Admin.sync();  
// console.log(module);
if(module.id == '.'){
    //当前模块被直接使用的时候
    admin.sync();
}else {
    //当前模块被其他模块引用的时候
    module.exports = admin;
}
