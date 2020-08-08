const knex = require('knex');

const knexfile = require('../knexfile.js');
const environment = process.env.NODE_ENV || 'developoment';

module.exports = knex(knexfile[environment]);