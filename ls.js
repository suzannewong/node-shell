const ls = function () {
  const fs = require("fs");

  // files will be an array of filenames
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      process.stdout.write("prompt > ");
    }
  });
};

module.exports = ls;
