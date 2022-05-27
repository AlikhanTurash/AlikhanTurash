const modelOrder = require('../models/modelOrder')

class controllerOrder {
    async addOrder(req, res){
        try{
            const order = new modelOrder({
                name: req.body.nameOrder,
                email: req.body.emailOrder,
                phone: req.body.phoneOrder,
                message: req.body.messageOrder
            })
            await order.save();
            res.redirect('/contact')
        } catch (e) {
            console.log(e)
        }
    }
    async deleteOrder(req, res){
        try{
            const orderName = req.body.deleteOrderByName
            const order = await modelOrder.findOneAndDelete({name: orderName})
            res.redirect('/contact')
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new controllerOrder()