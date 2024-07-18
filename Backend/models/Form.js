const mongoose = require('mongoose');
const Schema = mongoose.Schema
const formSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        // type: Schema.Types.Mixed,
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

    },
    description: {
        type: String,
        // type: Schema.Types.Mixed,
        required: true
    },
    userType: {
        type: String,
        enum: ['individual', 'organization'],
        required: true
    },
    bookingReason: {
        type: String,
        enum: ['parking', 'function', 'other'],
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
