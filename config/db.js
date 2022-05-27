const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://AlikhanTurash:10080405a@cluster0.xjmm0.mongodb.net/?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log('Connect is stable')
    } catch (e) {
        console.log(e)
    }
}

start();