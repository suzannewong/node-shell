const cat = function (fileName) {
  const fs = require("fs");

  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
};

module.exports = cat;
