/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * App
 *
 * @module      :: Model
 * @description :: App related functions and constants.
 *
 */

var App = {};

App.formatOutput = function(value, message, data, page) {

    if (page) {
        return {status: {value: value, message: message}, response: data ? data : "", links: {next: page}};
    } else {
        return {status: {value: value, message: message}, response: data ? data : ""};
    }

}

App.MAX_RESULTS_PERPAGE = 20;

module.exports = App;