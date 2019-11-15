//引入模块
const Sequelize = require('sequelize');

    let config = {
        name: 'JW',
        username: 'nodeuser',
        password: 'Dyx12345678.',
        host: '192.168.101.52',
        type: 'mysql'
    }

//得到实例对象
const sequelize = new Sequelize(config.name, config.username, config.password, {
    host: config.host,
    dialect: config.type
});

module.exports = {
    Sequelize,
    sequelize,
    config
}