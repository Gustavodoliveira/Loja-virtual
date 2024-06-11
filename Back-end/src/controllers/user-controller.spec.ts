require('iconv-lite').encodingExists('foo');
import request from 'supertest';
import { App } from '../App';
import { connect } from '../db/Conn';




	
	test('Register route', async () => {
		const app = new App().app
		const resp =  await request(app).post('/user/create').send({
		name: '123',
		cpf: '1230556',
		phone: '123',
		password: '123',
		confirmPassword:'123'
	});
	expect(resp.statusCode).toEqual(200);
	expect(resp.body).toHaveProperty('message');
	
});

