// view class, related to show load state
define(function () {
	var constructor = function (canvasId) {
		this.canvasId = canvasId;
		this.loadingText = 'Loading';

		this.init();
	};

	constructor.prototype = {
		init: function () {
			this.canvas = document.getElementById(this.canvasId);
			this.context = this.canvas.getContext('2d');
		},

		getHeight: function () {
			return this.canvas.height;
		},

		getWidth: function () {
			return this.canvas.width;
		},

		showLoading: function () {
			this.drawText();
		},

		drawText: function () {
			var middle = this.getMiddlePos();

			this.context.fillStyle = '#B4B4BB';
			this.context.font = this.getFontSize() + 'px sans-serif';
			this.context.textBaseline = 'center';
			this.context.textAlign = 'center';
			this.context.fillText(this.getText(), middle.x, middle.y);
		},

		getMiddlePos: function () {
			return {
				y: this.getHeight() / 2,
				x: this.getWidth() / 2
			};
		},

		getFontSize: function () {
			return this.getWidth() / 10;
		},

		getText: function () {
			return this.loadingText;
		}
	};

	return constructor;
});
