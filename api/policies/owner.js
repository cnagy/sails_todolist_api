/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Allow user to acces the API.
 */
module.exports = function (req, res, ok) {

	var id = req.headers["x-api-token"];
  
  if (Client.checkClient(id)) {
  	return ok();
  }
  else {
  	return res.send(App.formatOutput("ko", "Nothing to do here", ""));
  }

};