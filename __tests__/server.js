const { ModalBody } = require('react-bootstrap');
const request = require('supertest');
const assert = require('assert');
const server = 'http://localhost:3000';

const itineraryController = require('../server/controllers/itineraryController');

describe('Route integration', () => {
  // This will test servers root routes to ensure correct return of content type
  describe('/', () => {
    describe('GET', () => {
      it('Responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  // test for itinerary POST request
  describe('/itinerary', () => {
    describe('POST', () => {
      it('Response with status 200 and an object as content type', () => {
        return request(server)
          .post('/itinerary')
          .send({ location: 'Los Angeles', country: 'USA' })
          .expect(200);
      });
    });
  });
  // test for main path GET request
  describe('/main', () => {
    describe('GET', () => {
      it('Responds with 200 status and text/html content type /main', () => {
        return request(server)
          .get('/main')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  // test signup POST request
  describe('/signup', () => {
    describe('POST', () => {
      it('Response with status 200 and an object as content type', () => {
        const testInfo = {
          firstName: 'Jesus',
          email: 'Jesus@gmail.com',
          username: 'BigJ',
          password: 'YourNameHere',
        };

        return request(server)
          .post('/signup')
          .send(testInfo)
          .expect((res) => {
            expect(res.body.name).toEqual(testInfo.firstName);
          })
          .expect(200);
      });
    });
  });

  // test error handling

  // test global error handling
});
