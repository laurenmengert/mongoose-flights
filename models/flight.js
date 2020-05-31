const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    arrival: {
        type: Date
    },
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        max: 9999,
        min: 10,
        required: true
    },
    departs: {
        type: Date,
        default: function () {
            const dt = new Date();
            console.log(dt.getFullYear());
            return dt.setFullYear(dt.getFullYear() + 1);
        }
    },
    destinations: [destinationSchema]
}, { 
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);