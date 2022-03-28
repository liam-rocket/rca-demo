import { writeFile } from "fs";
// readfile is now extracted to the bottom

// WRITE
/**
 * Overwrite contents of the target JSON file
 * @param {string} filename - The name of the target JSON file
 * @param {object} content - The content to write to the file.
 * @returns undefined
 */
export function write(filename, jsonContentObj) {
  // Convert the data from JS Object to string
  const jsonContentStr = JSON.stringify(jsonContentObj);
  // Write JSON string to target file
  writeFile(filename, jsonContentStr, (writeErr) => {
    if (writeErr) {
      console.error("Writing error", writeErr);
    }
  });
}
import { readFile } from "fs";
// READ
/**
 * Read and log the contents of the target JSON file
 * @param {string} filename - The name of the target JSON file
 * @returns undefined
 */
export function read(filename) {
  const handleFileRead = (readErr, jsonContentStr) => {
    if (readErr) {
      console.error("Reading error", readErr);
      return;
    }
    // We only log the value of jsonContentStr. We could also parse it
    // into a JS Object to access specific keys and values.
    console.log(jsonContentStr);
  };

  readFile(filename, "utf-8", handleFileRead);
}

// ADD
// The following code builds on the imports, write and read functions above.
// We omit the above code here for brevity.

/**
 * Add a key-value pair to the JSON object in the relevant file
 * @param {string} filename - The name of the target JSON file
 * @param {string} key - The name of the key we wish to add
 * @param {*} value - The data that corresponds to the given key
 * @returns undefined
 */
export function add(filename, key, value) {
  const handleFileRead = (readErr, jsonContentStr) => {
    if (readErr) {
      console.error("Reading error", readErr);
      return;
    }

    // Parse the JSON string from the file into a JS Object.
    const jsonContentObj = JSON.parse(jsonContentStr);

    // Add the new key and value to the content object.
    jsonContentObj[key] = value;

    // Transform the updated content object back into a JSON string.
    const updatedJsonContentStr = JSON.stringify(jsonContentObj);

    // Write updated JSON to original file, overwriting original contents.
    writeFile(filename, updatedJsonContentStr, (writeErr) => {
      if (writeErr) {
        console.error("Writing error", writeErr);
        return;
      }
      console.log("Success!");
    });
  };

  // Read the file called filename and call handleFileRead on its contents.
  readFile(filename, "utf-8", handleFileRead);
}
