/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Client
 *
 * @module      :: Model
 * @description :: The API client model.
 *
 */

var Client = {
  attributes: {
    token: {
      type: 'STRING',
      'minLength': 5,
      'maxLength': 150,
      required: true
    }
  }
};

Client.checkClient = function (token) {
	var bool = false;
	
	this.findOne({ token: token }, function(err, client) {
	  if (client) {
	  	bool = true;
	  }
	});

	return bool;
}

module.exports = Client;
