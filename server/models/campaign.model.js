const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var campaignSchema = new mongoose.Schema({
    goal: {
        type: String,
        required:  'goal is required',
    },
    campaignTitle: {
        type: String,
        required: 'Campaign Title is required',
      
    },
    reason: {
        type: String,
        required: 'reason is required',
      
    },
    raiseMoneyFor: {
        type: String,
        required:  'raiseMoneyFor is required',
       
    },
    category: {
        type: String,
        required :  'Category is required'
        
    }
   
});

module.exports = mongoose.model('CreateCampaign', campaignSchema);

