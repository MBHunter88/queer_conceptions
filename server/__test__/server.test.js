import request from 'supertest';
import app from  '../server';

describe('GET /', () => {
  it('should return a 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});