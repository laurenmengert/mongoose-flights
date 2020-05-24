const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.body, 'info on creating the destination')
    console.log(req.params.id, 'flight id')
    Flight.findById(req.params.id, function(err, flight) {
        console.log(flight, 'this is the flight document');
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}