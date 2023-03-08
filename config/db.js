const mongoose = require('mongoose')

const DB = 'mongodb+srv://abdul:abdul@cluster0.n9clbqm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB,{
}).then(()=>{
    console.log('connection sucussfull');

}).catch((err)=>{
    console.log('no connection',err)

})

// 