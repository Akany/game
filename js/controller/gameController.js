var Game = function (config) {
	this.init(config);
};

Game.prototype = {
	init: function (config) {
		var self = this;

		self.canvas = self.createCanvas(config);
		self.render(config.renderTo);

		require('js/controller/loadController.js', self.onLoadPhase, self, config.resourceUrl);
	},

	createCanvas: function (config) {
		var canvas = document.createElement('canvas');

		canvas.height = config.height;
		canvas.width = config.width;
		canvas.id = config.id;

		return canvas;
	},

	render: function (appendTo) {
		var wrapper = document.getElementById(appendTo);

		return wrapper.appendChild(this.canvas);
	},

	onLoadPhase: function (resourceUrl) {
		this.loadController = new LoadController(resourceUrl);
	}
};