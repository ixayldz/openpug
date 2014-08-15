/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	joinpw: {
		type: 'string'
	},
	steamid: {
		type: 'string'
	},
	openId: {
		type: 'string'
	},
	toJSON: function() {
		var obj = this.toObject();
		delete obj.joinpw;	
  		return obj;
		}
	}
};

