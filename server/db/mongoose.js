var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
// 	localhost: 'mongodb://127.0.0.1:27017/Todo',
// 	mLab: 'mongodb://bharti25:Bh@rtiIsro2511@ds149268.mlab.com:49268/todo'
// }

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Todo');

module.exports = {
	mongoose
}