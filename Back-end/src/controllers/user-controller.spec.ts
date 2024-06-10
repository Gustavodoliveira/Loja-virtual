require('iconv-lite').encodingExists('foo');
import request from 'supertest';
import { app }from '../App';
import { connect } from '../db/Conn';


test('first test', async () => {
	
	const resp =  await request(app).post('/user/create')
	expect(resp.status).toEqual(200)
	
});