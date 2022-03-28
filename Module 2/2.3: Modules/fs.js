import { writeFile, readFile } from "fs";

const tweakNumber = 100;
const content = "Some content!\n";
const repeatedContent = content.repeat(tweakNumber);

const handleReadFile = (err, content) => {
  console.log("read file runs");
  if (err) {
    console.log(err);
    return;
  }

  console.log("read file!");
};

readFile("mystuff.txt", "utf8", handleReadFile);

const handleWriteFile = (err) => {
  console.log("write file runs");

  if (err) {
    console.log(err);
    return;
  }
  // If no error, file written successfully
  console.log("write file!");
};

writeFile("mystuff.txt", repeatedContent, handleWriteFile);
