const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('POST a user');
});

router.get('/getAll', (req, res) => {
    console.log('GET all users');
});

router.post('/getOne/:id', (req, res) => {
    console.log('GET a user');
});

router.patch('/update/:id', (req, res) => {
    console.log('UPDATE a user');
});

router.delete('/delete/:id', (req, res) => {
    console.log('Delete a user');
});

module.exports = router;