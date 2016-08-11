(function() {
	this.get = function(req, res) {
		res.sendView("markdown", "./view/read.md", {});
	}
	this.path = "/markdown";
}).call(module.exports);