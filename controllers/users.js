const bcrypt = require('bcryptjs');

const User = require('../models/users');

exports.signup_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Sign Up',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            partial: 'partial-signup'
        }
    });
}

exports.login_get = (req, res) => {
    res.render('template', {
        locals: {
            title: 'User login',
            is_logged_in: req.session.is_logged_in,
            first_name: req.session.first_name
        },
        partials: {
            partial: 'partial-login'
        }
    });
}

exports.logout_get = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

exports.signup_post = (req, res) => {
    const { email, first_name, last_name, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const userInstance = new Users(null, first_Name, last_Name, email, hash);

    userInstance.save().then(() => {
        res.redirect('/');
    });
}

exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    const userInstance = new Users(null, null, null, email, password);

    const userData = await userInstance.getUserByEmail();
    const isValid = bcrypt.compareSync(password, userData.password);

        if(!!isValid) {
            req.session.is_logged_in = true;
            req.session.user_id = userData.user_id;
            response.user_id = userData.user_id;
            req.session.first_name = userData.first_name;
            req.session.last_name = userData.last_name;
            response.last_name;
            res.redirect('/');
        } else {
            res.sendStatus(401)
        
        }
}