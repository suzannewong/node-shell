const curl = require("./curl");

//stdin data event fires after a user types in a line
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();

	//cat is for contents of js file
	if (cmd.includes("cat")) {
		const cat = require("./cat");
		const fileName = cmd.split(" ")[1];
		cat(fileName);
	} else if (cmd === "pwd") {
		const pwd = require("./pwd");
		pwd();
	} else if (cmd === "ls") {
		const ls = require("./ls");
		ls();
	}
	//curl is for html of webpage
	else if (cmd.includes("curl")) {
		const curl = require("./curl");
		const webUrl = cmd.split(" ")[1];
		curl(webUrl);
	} else {
		process.stdout.write("You typed: " + cmd);
		process.stdout.write("\nprompt > ");
	}
});
