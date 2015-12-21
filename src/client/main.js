'use strict'

require("./styles/style.css");

let Backbone = require('backbone');
let Router = require('./router/router.js');
new Router;
Backbone.history.start();