const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true // Assuming you have some identifier for users
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    phoneNumber: {
        type: String,
        required: true
        // You can add validation for phone number format if needed
    },
    description: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['individual', 'organization'], // Assuming these are the only two options
        required: true
    },
    bookingReason: {
        type: String,
        enum: ['parking', 'function', 'other'], // Assuming these are the only options
        required: true
    },
    agreeToContact: {
        type: Boolean,
        required: true
    },
    agreeToTerms: {
        type: Boolean,
        required: true
    }

});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
