//stdin data event fires after a user types in a line
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();

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
  } else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
