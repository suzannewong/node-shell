const pwd = function () {
  //output prompt
  //process.stdout.write("prompt > ");

  const path = require("path");
  process.stdout.write(path.resolve());
};

module.exports = pwd;
