var express = require('express');
var	bodyParser = require('body-parser');

var {mongoose}=  require('./db/mongoose');
var	{Todo} = require('./models/todo');
var	{User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todo', (request, response) => {
	var todo = new Todo({
		text: request.body.text,
		completed: request.body.completed,
		completedAt: request.body.completedAt
	});

	todo.save().then((doc) => {
		response.send(doc);
	}, (e) => {
		response.status(400).send(e);
	});
});

app.get('/todo', (request, response) => {
	Todo.find().then((todo) => {
		response.send(todo)
	}, (error) => {
		response.status(400).send(error);
	});
});

app.listen(3000, () => {
	console.log('Started app on port 3000');
});

module.exports = {app};

// var objTodo = new Todo({
// 	text: 'Read'
// });

// objTodo.save().then((doc) => {
// 	console.log('The saved todo is', doc);
// }, (e) => {
// 	console.log('Unable to save the todo.');
// });

// var newobjTodo = new Todo({
// 	// text: 'New Todo',
// 	// completed: false,
// 	// completedAt: 140
// 	text: 'A Todo'
// });

// newobjTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save the todo.', e);
// });

// var objUser = new User({
// 	email: 'abc@abc.com'
// });

// objUser.save().then((doc) => {
// 	console.log('Saved User', doc);
// }, (e) => {
// 	console.log('Unable to save the user.',e);
// });