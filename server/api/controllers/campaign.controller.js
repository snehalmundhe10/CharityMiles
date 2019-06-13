
'use strict';
//import sticky service.
const campaignservice = require('../services/campaign.service');

exports.post = function (request, response) {
console.log("In post method");
    let newCampaign = Object.assign({}, request.body),
        callback = function (campaign) {
        response.status(200);
        response.json(campaign);
    };
    campaignservice.save(newCampaign, callback);
};
//returns a campaign object
exports.get = function (request, response) {
    let callback = function (campaign) {
        response.status(200);
        response.json(campaign);
    };
    campaignservice.get({}, callback);
};

exports.put = function (request, response) {
    let campaign = Object.assign({}, request.body),
        callback = function (campaign) {
        response.status(200);
        response.json(campaign);
    };
    campaign._id = request.params.campaignId;
    campaignservice.update(campaign, callback);
};


exports.delete = function (request, response) {
    let callback = function (campaign) {
        response.status(200);
        response.json({
            message: 'Campaign Successfully deleted'
        });
    };
    campaignservice.delete(request.params.campaignId, callback);
};

