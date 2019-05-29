import moment from 'moment';
import models, { sequelize } from '../models';


const data = {
    async createUser() {
        await models.Users.create(
            {
                username: 'Kay',
                firstName: 'Mireille',
                lastName: 'Niwemuhuza',
                email: 'kay@gmail.com',
                type: 'customer',
                phone: '0788484848',
                createdAt: moment(new Date()),
                updatedAt: moment(new Date()),

            },
        );
    },
    async createPackage() {
        await models.Packages.create(
            {
                name: 'Hall',
                createdAt: moment(new Date()),
                updatedAt: moment(new Date()),

            },
        );
    },
    async createService() {
        await models.Services.create(
            {
                name: 'Classic',
                numberOfPost: 3,
                period: '30 days',
                price: 13,
                createdAt: moment(new Date()),
                updatedAt: moment(new Date()),

            },
        );
    },
    async createPost() {
        await models.Posts.create(
            {
                header: 'Sundowner',
                description: ' Resto ',
                location: 'Kimihurura',
                pic1: '',
                pic2: '',
                pic3: '',
                pic4: '',
                pic5: '',
                pic6: '',
                pic7: '',
                pic8: '',
                pic9: '',
                pic10: '',
                views: 30,
                createdAt: moment(new Date()),
                updatedAt: moment(new Date()),
                userId: 1,
                packageId: 1,
                serviceId: 1,


            },
        );
    },
    async createBookings() {
        await models.Bookings.create(
            {
                bookedDate: moment(new Date()),
                createdAt: moment(new Date()),
                updatedAt: moment(new Date()),
                userId: 1,
                postId: 1,


            },
        );
    },
};

const createData = async () => {
    try {
        await data.createUser();
        await data.createPackage();
        await data.createService();
        await data.createPost();
        await data.createBookings();
    } catch (err) {
        console.log(err);
    }
};
export default createData();
