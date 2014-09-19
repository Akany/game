require('js/controller/gameController.js', function () {
	var game = new Game({
		height: 500,
		width: 500,
		id: 'game',
		renderTo: 'game-wrapper',
		resourceUrl: 'assets/resourceList.json'
	});
});
