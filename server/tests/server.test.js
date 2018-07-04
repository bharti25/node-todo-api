const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// beforeEach lets us run some code before every single test.

beforeEach((done) => {
	Todo.remove({}).then(() => done());
});

describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((response) => {
				expect(response.body.text).toBe(text);
			})
			.end((error, response) => {
				if (error) {
					return done(error);
				}

				Todo.find().then((todo) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e));
			});
	});

	it('should not create todo with invalid data body', (done) => {
		
		request(app)
			.post('/todos')
			.send()
			.expect(400)
			// .expect((response) => {
			// 	expect(response.body)
			// })
			.end((error, response) => {
				if (error) {
					return done(error);
				}
				Todo.find().then((todos) => {
					expect(todos.length).toBe(0);
					done();
				}).catch((e) => done(e));
			});
	});
});