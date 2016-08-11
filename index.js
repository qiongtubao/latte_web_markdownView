var latte_lib  = require("latte_lib")
	, markdown = require("markdown");
module.exports = function(path, options) {
	options = options || {};
	var data = latte_lib.fs.readFileSync(path);
	var mark = latte_lib.format.templateStringFormat(data, options);
	return markdown.parse(mark);
}