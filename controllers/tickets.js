const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create: createTicket
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {title: 'Add Ticket', flight});
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        req.body.flight = flight._id
        Ticket.create(req.body, function(err) {
            res.redirect(`/flights/${flight._id}`);
        })
    })
}
