const express = require('express');
const route = express.Router();
const knex = require('knex')(require('../knexfile'));


route.get('/users', async (req, res) => {
    try {
        const users = await knex('user');
        return res.status(200).json({data: users});
    } catch (error) {
        return res.status(500).json(error);
    }
});

route.post('/users', async (req, res) => {
    try {
        const data = {
            username: req.data.username
        };
        const [user] = await knex('users')
            .insert(data)
            .returning('*');

        return res.status(201).json({data: user});
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = route;