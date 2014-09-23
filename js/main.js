// app enter
requirejs.config({
    baseUrl: 'js/',
});

require(['controller/mainController'], function (Main) {
	var game = new Main({
		height: 500,
		width: 500,
		id: 'game',
		renderTo: 'game-wrapper',
		resourceUrl: 'assets/resourceList.json'
	});
});
