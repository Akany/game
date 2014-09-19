var LoadController = function (resourceUrl) {
	this.resourceUrl = resourceUrl;

	this.init();
};

LoadController.prototype = {
	init: function () {
		require('js/proxy.js', this.onProxyCreated, this);
	},

	onProxyCreated: function () {
		this.initProxy();

		this.loadResource();
	},

	initProxy: function () {
		this.proxy = new Proxy();
	},

	loadResource: function () {
		this.proxy.load(this.resourceUrl, this.onResourceLoaded, this);
	},

	onResourceLoaded: function (data) {
		
	}

};