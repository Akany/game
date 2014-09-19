var require;

(function () {
	function createScript () {
		return document.createElement('script');
	}

	function appendScript (script) {
		var head = document.getElementsByTagName('head')[0];

		head.appendChild(script);
	}

	require = function (src, callback, scope, args) {
		var script = createScript();

		function onLoad () {
			script.removeEventListener('load', onLoad, false);

			callback.apply(scope || window, Array.prototype.concat(args));
		}

		script.addEventListener('load', onLoad, false);
		script.src = src;
		appendScript(script);
	}

})();