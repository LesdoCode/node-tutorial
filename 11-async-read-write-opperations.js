const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Error", err);
    return;
  }
  const firstFile = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    secondFile = result;
    const writeString = `Async result: The following is the first and second file info\n\n${firstFile}\n\n${secondFile}`;

    writeFile("./content/async-read-write.txt", writeString, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    });
  });
});

//when we read, the result is the file content. When we write, the result is undefined.
