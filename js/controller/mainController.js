// main controller of the game
define(['controller/loadController'], function (LoadController) {
	var constructor = function (config) {
		this.init(config);
	};

	constructor.prototype = {
		init: function (config) {
			var self = this;

			self.canvas = self.createCanvas(config);
			self.render(config.renderTo);
			self.loadController = new LoadController({
				resourceUrl: config.resourceUrl,
				canvasId: config.id
			});
			this.loadController.loadResource(this.onResourceLoaded, this);
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

		onResourceLoaded: function (data) {
			console.log(data);
		}
	};

	return constructor;
});
