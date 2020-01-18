const express = require("express");
const mysql = require("mysql");
const router = express.Router();

module.exports = function(app) {
    router.post("/api/inventory", function(req, res) {
        db.inventory.create({
            foodItemDescription: req.body.firstName,
            amount: req.body.lastName,
            donationsComments: req.body.donationsComments,
            storageReqs: req.body.storageReqs,
            pickUpDeadline: req.body.pickUpDeadline,
            vendorId: req.body.vendorId,
            dollarValue: req.body.dollarValue
        })
        .then(function() {
            res.redirect("/confirmation");
        })
        .catch(function(err) {
            console.log(err);
            res.status(401).json(err);
        });
    });


    // get request to pull all available donations
    router.get('/api/inventory', function(req, res) {
        db.inventory.findOne({
            where: {
                isClaimed: false
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });

    // get request to retrieve single donation submission
    router.get("api/inventory/:id", function(req, res) {
        db.inventory.findOne({
            where: {
                id:req.params.id
            }
        }).then(function(inventory) {
            res.json(inventory);
        });
    });

    // get request to pull information for specific NP's pickups
    router.get('/api/inventory/pickups', function(req, res) {
        db.inventory.findOne({
            where: {
                isClaimed: true,
                claimedBy: userID
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    })


    // get request to pull information for specific donor's pickups
    router.get('/api/inventory/pickups', function(req, res) {
        db.inventory.findOne({
            where: {
                isClaimed: true,
                claimedBy: userID
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    })

    // PUT route to update donation when it has been claimed
    router.put("api/inventory", function(req, res) {
        db.inventory.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(inventory) {
                res.json(inventory);
        });
    });

}




