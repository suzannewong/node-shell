const curl = function (weburl) {
	const request = require("request");

	const http = require("http");

	const path = weburl.slice(6);
	callback = function (response) {
		var str = "";

		//another chunk of data has been received, so append it to `str`
		response.on("data", function (chunk) {
			str += chunk;
		});

		//the whole response has been received, so we just print it out here
		response.on("end", function () {
			console.log(str);
		});
	};

	http.request(options, callback).end();
};

module.exports = curl;
