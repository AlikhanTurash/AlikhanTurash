const {
    Schema,
    model
} = require('mongoose')

const modelOrder = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

module.exports = model('Order', modelOrder)