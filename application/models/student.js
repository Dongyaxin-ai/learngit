const {Sequelize,sequelize,config} = require('./initilize');

const Model = Sequelize.Model;
class student extends Model { }

//定义模型
student.init({
    // 对象的属性（对应的是数据库里边的字段）
    cls_id: {
        type: Sequelize.INTEGER ,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    sex: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_card: {
        type: Sequelize.STRING(18),
        allowNull: false
    },
    dorm: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    //模型的名称（数据库中的数据表会根据本配置项的复数创建表名）
    modelName: 'student',
    //不自动维护createdAt和updateat
    timestamps: false
    
});

//表示将User模型和数据库的表结构进行同步
// student.sync();  
// console.log(module);
if(module.id == '.'){
    //当前模块被直接使用的时候
    student.sync();
}else {
    //当前模块被其他模块引用的时候
    module.exports = student;
}
