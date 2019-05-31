import chaiHttp from 'chai-http';
import chai from 'chai';
import dotenv from 'dotenv';
import server from '../server';


dotenv.config();

const { expect } = chai;
chai.use(chaiHttp);

let customerToken;

describe('Book a service', () => {
    it('should let a customer signup', (done) => {
        chai.request(server)
            .post('/api/auth/signup')
            .send({
                firstName: 'Emy',
                lastName: 'Rukundo',
                email: 'rukundo@gmail.com',
                password: 'Rukundo1!',
                type: 'customer',
                phone: '0788484885',
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                customerToken = res.body.data.token;
                done();
            });
    });
    it('should let a customer book a service', (done) => {
        chai.request(server)
            .post('/api/customers/bookings')
            .set('Authorization', `Bearer ${customerToken}`)
            .send({
                bookedDate: '12/01/19',
                createdAt: '',
                updateAt: '',
                postId: 1,
            })
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.be.an('object');
                done();
            });
    });
    it('should give an error when the token is not provided', (done) => {
        chai.request(server)
            .post('/api/customers/bookings')
            .send({
                bookedDate: '12/11/19',
                createdAt: '',
                updateAt: '',
                postId: 1,
            })
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body).to.be.an('object');
                done();
            });
    });
    it('should give an error when the date is already booked', (done) => {
        chai
            .request(server)
            .post('/api/customers/bookings')
            .set('Authorization', `Bearer ${customerToken}`)
            .send({
                bookedDate: '12/01/19',
                createdAt: '',
                updateAt: '',
                postId: 1,
            })
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body).to.be.an('object');
                done();
            });
    });
});
