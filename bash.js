//output prompt
process.stdout.write("prompt > ");

//stdin data event fires after a user types in a line
process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();

	if (cmd === "pwd") {
		const path = require("path");
		process.stdout.write(path.resolve());
	} else {
		process.stdout.write("You typed: " + cmd);
		process.stdout.write("\nprompt > ");
	}
});
