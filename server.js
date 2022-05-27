const express = require("express");
const app = express();
const port = 3000;
const {response} = require("express");
const ejs = require('ejs')

const main = require('./routes/routerIndex')
const about = require('./routes/routerAbout')
const contact = require('./routes/routerContact')
const watch = require('./routes/routerWatch')

require('./config/db')
const mongoose = require("mongoose");

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.engine('ejs', require('ejs').__express);
app.set('view engine', ejs);



app.use('/', main);
app.use('/about', about);
app.use('/contact', contact);
app.use('/watch', watch);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://AlikhanTurash:10080405a@cluster0.xjmm0.mongodb.net/?retryWrites=true&w=majority')
        app.listen(process.env.port || port, () =>
            console.log(`App listening at localhost:${port}`)
        )
    } catch (e) {
        console.log(e)
    }
}

start()

