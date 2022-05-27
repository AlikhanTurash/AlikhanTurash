const express = require('express')
const router = express.Router()
const path = require('path')
const controllerOrder = require('../controller/controllerOrder')
const modelOrder = require('../models/modelOrder')

router
    .route("/")
    .get(async (req,res) => {
        const order = await modelOrder.find()
        res.render(path.resolve('views/contact.ejs'), {
            activePage: 'contact',
            order: order,
        })
    });

router.post('/addOrder', controllerOrder.addOrder)
router.post('/deleteOrder', controllerOrder.deleteOrder)


module.exports = router