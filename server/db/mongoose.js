var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let db = {
// 	localhost: 'mongodb://127.0.0.1:27017/Todo',
// 	mLab: 'mongodb://bharti25:Bh@rtiIsro2511@ds131551.mlab.com:31551/todoapp'
// }

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Todo');

// mongoose.connect( process.env.PORT ? db.mLab : db.localhost);

module.exports = {
	mongoose
}