require('dotenv').config()

const {PASSWORD} = process.env

const users = [{email: "mraymundo@gmail.com", password: PASSWORD}];
module.exports = users;