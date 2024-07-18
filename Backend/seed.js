const mongoose = require('mongoose');
const Form = require('./models/Form');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/test');


async function seedDatabase() {
    try {

        const seedData = [];


        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * 1000000000);
            const randomPhoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
            const randomEmail = `user${i}@example.com`;
            const randomUserType = i % 2 === 0 ? 'individual' : 'organization';
            const randomBookingReason = ['parking', 'function', 'other'][i % 3];
            const randomDescription = "Hello how are you doing";

            seedData.push({
                userId: randomNumber.toString(),
                name: `User ${i}`,
                email: randomEmail,
                phoneNumber: randomPhoneNumber.toString(),
                description: randomDescription,
                userType: randomUserType,
                bookingReason: randomBookingReason,
                agreeToContact: true,
                agreeToTerms: true
            });
        }


        await Form.create(seedData);
        console.log('Database seeded successfully.');

    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {

        mongoose.disconnect();
    }
}

// Call the seeding function
seedDatabase();
