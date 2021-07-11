const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://hamna:hamna@cluster0.loruh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/phase2task', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const Schema = mongoose.Schema;

var NewServiceSchema = new Schema({
    name:String,
    description:String,
    imagepath:String
});

var Servicedata= mongoose.model('Servicedata', NewServiceSchema);                  

module.exports = Servicedata;