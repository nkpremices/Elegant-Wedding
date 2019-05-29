import chaiHttp from 'chai-http';
import chai from 'chai';
import dotenv from 'dotenv';
import server from '../server';


dotenv.config();

const { expect } = chai;
chai.use(chaiHttp);

describe('Book a service', () => {
    it('should let a service provider see booked dates', (done) => {
        chai.request(server)
            .get('/api/providers/bookings/1')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });
    it('should let a service provider see booked dates', (done) => {
        chai.request(server)
            .get('/api/providers/bookings/posts/Sundowner')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});
