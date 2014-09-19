var Proxy = function () {

};

Proxy.prototype = {
	load: function (url, callback, scope, args) {
		var xhr = this.getXhr();

		function onLoad () {
			var respJson = JSON.parse(this.responseText);

			callback.apply(scope || window, Array.prototype.concat(respJson, args));
		}

		xhr.addEventListener('load', onLoad, false);
        xhr.open('GET', url, true);
        xhr.send();
	},

	getXhr: function () {
		// support only latest browsers
        return new XMLHttpRequest();
	}
};