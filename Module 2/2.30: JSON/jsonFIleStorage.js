import { readFile, writeFile } from "fs";

/**
 * Add a JS Object to an array of Objects in a JSON file
 * @param {string} filename - Name of JSON file
 * @param {object} jsonContentObj - The content to write to the JSON file
 * @param {function} callback - The callback function to execute on error or success
 *                              Callback takes write error as 1st param and JS Object as 2nd param.
 * @returns undefined
 */
export function write(filename, jsonContentObj, callback) {
  // Convert content object to string before writing
  const jsonContentStr = JSON.stringify(jsonContentObj);

  // Write content to DB
  writeFile(filename, jsonContentStr, (writeErr) => {
    if (writeErr) {
      console.error("Write error", jsonContentStr, writeErr);
      // Allow each client app to handle errors in their own way
      callback(writeErr, null);
      return;
    }
    console.log("Write success!");
    // Call client-provided callback on successful write
    callback(null, jsonContentStr);
  });
}

function sayHello(error, contentString, string) {
  console.log("i hate callbacks");
}

write("data.json", { hello: "liam" }, sayHello);

/**
 * Add a JS Object to an array of Objects in a JSON file
 * @param {string} filename - Name of JSON file
 * @param {function} callback - The callback function to execute on error or success
 *                              Callback takes read error as 1st param and JS Object as 2nd param.
 * @returns undefined
 */
export function read(filename, callback) {
  const handleFileRead = (readErr, jsonContentStr) => {
    if (readErr) {
      console.error("Read error", readErr);
      // Allow client to handle error in their own way
      callback(readErr, null);
      return;
    }

    // Convert file content to JS Object
    const jsonContentObj = JSON.parse(jsonContentStr);

    // Call client callback on file content
    callback(null, jsonContentObj);
  };

  // Read content from DB
  readFile(filename, "utf-8", handleFileRead);
}

/**
 * Add a JS Object to an array of Objects in a JSON file
 * @param {string} filename - Name of JSON file
 * @param {function} callback - The callback function to execute on error or success
 *                              Callback takes read error as 1st param and JS Object as 2nd param.
 * @returns undefined
 */
export function edit(filename, readCallback, writeCallback) {
  // Read contents of target file and perform callback on JSON contents
  read(filename, (readErr, jsonContentObj) => {
    // Exit if there was a read error
    if (readErr) {
      console.error("Read error", readErr);
      readCallback(readErr, null);
      return;
    }

    // Perform custom edit operations here.
    // jsonContentObj mutated in-place because object is mutable data type.
    readCallback(null, jsonContentObj);

    // Write updated content to target file.
    write(filename, jsonContentObj, writeCallback);
  });
}

/**
 * Add a JS Object to an array of Objects in a JSON file
 * @param {string} filename - Name of JSON file
 * @param {string} key - The key in the JSON file whose value is the target array
 * @param {string} input - The value to append to the target array
 * @param {function} callback - The callback function to execute on error or success
 *                              Callback takes read or write error as 1st param and written string as 2nd param.
 * @returns undefined
 */
export function add(filename, key, input, callback) {
  edit(
    filename,
    (err, jsonContentObj) => {
      // Exit if there was an error
      if (err) {
        console.error("Edit error", err);
        callback(err);
        return;
      }

      // Exit if key does not exist in DB
      if (!(key in jsonContentObj)) {
        console.error("Key does not exist");
        // Call callback with relevant error message to let client handle
        callback("Key does not exist");
        return;
      }

      // Add input element to target array
      jsonContentObj[key].push(input);
    },
    // Pass callback to edit to be called after edit completion
    callback
  );
}

// const readCallback = (err, jsonContentObj) => {
//   // Exit if there was an error
//   if (err) {
//     console.error("Edit error", err);
//     callback(err);
//     return;
//   }

//   // Exit if key does not exist in DB
//   if (!(key in jsonContentObj)) {
//     console.error("Key does not exist");
//     // Call callback with relevant error message to let client handle
//     callback("Key does not exist");
//     return;
//   }

//   // Add input element to target array
//   jsonContentObj[key].push(input);
// };

// const handleClick = (event) => {
//   console.log("i clicked");
// };

// addEventListener("click", handleClick);

// addEventListener("click", (event) => console.log("i clicked"));
