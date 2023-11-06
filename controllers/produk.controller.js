const req = require('express/lib/request');
const res = require('express/lib/response');

exports.create = async (req, res) => {
  res.send({
    message: 'OK',
  });
};

exports.findAll = async (req, res) => {
  res.send({
    message: 'OK Find All',
  });
};
