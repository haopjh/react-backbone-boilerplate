'use strict'

let Backbone = require('backbone');
const React = require('react');
const ReactDom = require('react-dom');
let PageA = require('../../app/components/PageA.jsx');
let PageB = require('../../app/components/PageB.jsx');

let Router = Backbone.Router.extend({

	initialize: function() {
		console.log("router initialized");
	},

	routes: {
		'a': 'renderA',
		'b': 'renderB',
	},

	// Normal
	renderA: function() {
		ReactDom.render(<PageA />, document.getElementById('main-app'));
	},

	// ES6
	renderB() {
		ReactDom.render(<PageB />, document.getElementById('main-app'));
	}
});





module.exports = Router;