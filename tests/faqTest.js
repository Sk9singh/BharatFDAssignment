const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('GET /api/faqs', function() {
  it('should return FAQs in English', async function() {
    const res = await request(app).get('/api/faqs');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});