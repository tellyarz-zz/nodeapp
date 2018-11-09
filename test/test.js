const request = require('supertest');
const app = require('../index');

describe('GET /', function(){
    it('should respond with Hello Jenkins CI/CD...',  function(done){
        request(app).get('/').expect('Hello Jenkins CI/CD...', done);
    });
});