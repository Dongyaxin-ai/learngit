 class admin {
    login (req, res) {
        try {
            if(req.session.captcha == undefined){
                throw Error('2');
            }
            if(req.session.captcha != req.body.yzm.toLowerCase()){
                throw Error('1');
            }
            //验证码验证通过,根据用户提交的数据，到数据库中查找
            let Admin = require('./models/admin');
    
            (async () => {
                let result = await Admin.findOne({ where: { mobile: req.body.mobile } });
                if (result == null) {
                    res.send({ code: 3, msg: '您输入的用户名有误' })
                } else {
                    if (result.password != req.body.password) {
                        res.send({ code: 3, mag: '您输入的密码有误' })
                    } else {
                        //用户名和密码全部验证通过
                        //服务端将登陆的用户保存到session中
                        req.session.userLogin = result;
                        res.send({ code: 0, mag: '登录成功' })
                    }
                }
    
            })()
        } catch (e) {
            let data = {};
            switch (e.message) {
                case '1': data = { code: 1, msg: '验证码有误' }; break;
                case '2': data = { code: 2, msg: '验证码已过期，请刷新后重试！' }; break;
            }
            res.send(data);
        }
    
    
    };
    yzm (req, res) {
        var svgCaptcha = require('svg-captcha');
        var captcha = svgCaptcha.create({
            noise: 5,
            color: true,
            ignoreChar: 'o01i',
            background: '#cfa'
        });
        //将验证码中的字符存放到session中
    
        req.session.captcha = captcha.text.toLowerCase();
        res.type('svg');
        res.send(captcha.data);
    };
    mobileisallow (req, res) {
        //先验证手机号的格式
        let mobileReg = /^1[35789]\d{9}$/;
        res.send(mobileReg.test(req.query.mobile));
    }
    
}
module.exports = new admin();