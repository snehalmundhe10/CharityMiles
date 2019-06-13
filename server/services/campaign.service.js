'use strict';
const mongoose = require('mongoose'),
 newCampaign = mongoose.model('CreateCampaign');
const passport = require('passport');
const _ = require('lodash');



let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (campaign, callback) {
    console.log("in service ");
    var campaignSchema = new newCampaign();
    campaignSchema.goal = campaign.goal;
    campaignSchema.campaignTitle = campaign.campaignTitle;
    campaignSchema.reason = campaign.reason;
    campaignSchema.raiseMoneyFor =campaign.raiseMoneyFor;
    campaignSchema.category = campaign.category;
    console.log("in schema "+campaignSchema.goal);
    console.log("in request "+campaign.goal);


    campaignSchema.save((err, campaign) =>{
            throwError(err);
            callback(campaign);
    }
    );
};

exports.get = function (campaignId, callback) {
    let resultCallback = function (err, sticky) {
        throwError(err);
        callback(sticky);
    };
    campaignSchema.findById(campaignId, resultCallback);
};

exports.update = function (campaign, callback) {
    let resultCallback = function (err, campaign) {
        throwError(err);
        callback(campaign);
    };

    campaignSchema.findOneAndUpdate({
        _id: campaign._id
    }, campaign, {
        new: true
    }, resultCallback);
};

exports.delete = function (campaignId, callback) {
    let resultCallback = function (err, campaign) {
        throwError(err);
        callback();
    };
    campaignSchema.remove({
        _id: campaignId
    }, resultCallback);
};
