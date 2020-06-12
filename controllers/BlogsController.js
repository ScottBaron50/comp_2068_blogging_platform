const viewPath = ('blogs');
const Blog = require('../models/blog');

exports.index = (req, res) => {
    res.send('Got to catch em all');
}

exports.show = (req, res) => {
    res.send('Yeah');
}

exports.new = (req, res) => {
    res.render(`${viewPath}/new`, {
        pageTitle: 'New Blog'
    });
}

exports.create = (req, res) => {
    res.send('Hi there');
}

exports.edit = (req, res) => {
    res.send('Hey there');
}

exports.update = (req, res) => {
    res.send('Wowza');
}

exports.delete = (req, res) => {
    res.send('Goodbye');
}