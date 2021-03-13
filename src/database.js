const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://marco:marco@cluster0.u5nl3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB is connected'))
.catch(e => console.log(e));