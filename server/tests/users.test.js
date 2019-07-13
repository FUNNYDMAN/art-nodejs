const index = require('../index');
const request = require('supertest')(index);

describe('Hello World', () => {
  it('GET /users', (done) => {
    request
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });
});