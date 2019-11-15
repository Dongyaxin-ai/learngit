// const models = require('./test/db2');

// models.User.create({
//     username: '545444',
//     password: '12345678'
// }).then(function(result) {
    // console.log(result);
    
// })

// let config = require('./test/models/config')
let models = require('./application/models/models');

// models.admin.findAll().then((data) => {
//     console.log(data);
    
// })
// models.student.findAll().then((data) => {
//     console.log(data);
    
// })
models.student.create({
    cls_id: '2',
    mobile: '15037510458',
    sex: '1',
    id_card: '456879',
    dorm: '1'
}).then((data) => {
        console.log(data);
        
})

