import request from 'supertest';
import app from '../server.js';

describe('User Endpoints', () => {

  it('should create a new user - POST /users/signup', async () => {
    const res = await request(app)
      .post('/users/signup')
      .send({
        email: 'newuser@example.com',
        password: 'password123',
        name: 'Test User',
        location: 'Test Location',
        pronouns: 'they/them',
        age: 25,
        family_structure: 'single',
        has_partner: false,
        user_id: 1
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'User created successfully');
    expect(res.body).toHaveProperty('token');
  });

  it('should login an existing user - POST /users/login', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: 'newuser@example.com',
        password: 'password123',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Login successful');
    expect(res.body).toHaveProperty('token');
  });

  it('should fail to login with invalid credentials - POST /users/login', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: 'wronguser@example.com',
        password: 'wrongpassword',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('message', 'Invalid email');
  });

  it('should update a user - PATCH /users/update/:id', async () => {
    const loginRes = await request(app)
      .post('/users/login')
      .send({
        email: 'newuser@example.com',
        password: 'password123',
      });

    const token = loginRes.body.token;
    const userId = loginRes.body.user.id;

    const res = await request(app)
      .patch(`/users/update/${userId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Updated User',
        email: 'newuser@example.com',
        location: 'Updated Location',
      });
      
    expect(res.statusCode).toEqual(200);
    expect(res.body.user).toHaveProperty('name', 'Updated User');
  });

  it('should delete a user - DELETE /users/delete/:id', async () => {
    const loginRes = await request(app)
      .post('/users/login')
      .send({
        email: 'newuser@example.com',
        password: 'password123',
      });

    const token = loginRes.body.token;

    const res = await request(app)
      .delete('/users/delete/1') 
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted successfully');
  });
});
