const express = require('express');
const router = express.Router();

const hackerDb = require('./hackerModel.js');

router.get('/', async (req, res) => {
    try {
        const hackaz = await hackerDb.find();
        res.status(200).json(hackaz);
    }
    catch (err) {
         
        res.status(500).json({err: err.message});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const done = await hackerDb.destroy(id);
        res.status(204).json(done);

    } 
    catch (err) {
        res.status(500).json(err);
    }
})
router.post('/', async (res, req) => {
    try {
        const hacker = await hackerDb.add(res.body);
        req.status(201).json(hacker);
    }
    catch (err) {
        req.status(500).json(err);
    }
})



module.exports = router;