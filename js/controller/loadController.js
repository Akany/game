define([
	'view/loadView',
	'proxy'
], function (LoadView, Proxy) {
	var constructor = function (config) {
		this.config = config;
		this.init();
	};

	constructor.prototype = {
		init: function () {
			this.initProxy();
			this.initView();
		},

		initProxy: function () {
			this.proxy = new Proxy();
		},

		initView: function () {
			this.view = new LoadView(this.config.canvasId);
		},

		loadResource: function (callback, scope) {
			this.view.showLoading();
			this.proxy.load(this.config.resourceUrl, callback, scope);
		}

	};

	return constructor;
});