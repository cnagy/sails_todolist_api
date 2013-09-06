/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * ClientController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling API requests.
 */

module.exports = {

  me: function (req, res) {
    var id = req.headers["x-api-token"];
    
    Client.findOne({ token: id }, function(err, client) {
      if (err) {
        res.send(App.formatOutput("ko", "Nothing to do here", err));
      } else {
        console.log("Client:" + client);
        res.send(App.formatOutput("ok", "", client, null))
      }
    });
  },

  create: function (req, res) {
    var id = req.param('token');

    Client.findOne({ token: id }, function(err, client) {
      if (client) {
        res.send(App.formatOutput("ok", "", client, null))
      } else {
        Client.create({ 
          token: id
        }).done(function(err, client) {
          if (err) {
            return res.send(App.formatOutput("ko", "Nothing to do here", err));
          } else {
            res.send(App.formatOutput("ok", "", client, null))
          }
        });
      }
    });
  },

  update: function (req, res) {
    var id = req.headers["x-api-token"];
    var newId = req.param('token');
    
    Client.findOne({ token: id }, function(err, client) {
      if (err) {
        res.send(App.formatOutput("ko", "Nothing to do here", err));
      } else {
        client.token = newId;

        client.save(function(err, client) {
          if (err) {
            return res.send(App.formatOutput("ko", "Nothing to do here", err));
          } else {
            res.send(App.formatOutput("ok", "", client, null))
          }
        });
      }
    });
  },

	search: function (req, res) {

    var limit = parseInt(req.param('limit')) > 0 ? parseInt(req.param('limit')) : App.MAX_RESULTS_PERPAGE
    var page = parseInt(req.param('page')) > 1 ? parseInt(req.param('page')) : 1
    var nextPage = page + 1;
    var fullURL;

		if (limit) {
			fullURL = "/client/search?page=" + nextPage + "&limit=" + limit;
		}
		else {
			fullURL = "/client/search?page=" + nextPage;	
		}
    
  	var sortfield = "id";
  	var sortmode = "DESC";
  	if (req.query["sortfield"] && req.query["sortmode"]) {
  		sortfield = unescape(req.query["sortfield"]);
  		sortmode = unescape(req.query["sortmode"]);
  		console.log("Sortfield found:", sortfield , sortmode);
  	}

    var clientsCount = Client.count();
    
    Client.find({
      skip: (page - 1) * limit,
      limit: limit,
      sort: sortfield+" "+sortmode
    }).done(function(err, clients) {
	  	if (err) {
		    res.send(App.formatOutput("ko", "Nothing to do here", err));
		  } else {
        if (clients.length < limit || page * limit == clientsCount) {
          fullURL = null;
        }
		    res.send(App.formatOutput("ok", "", clients, fullURL))
		  }
		});
  }

};