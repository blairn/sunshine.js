var globals = {};

// Stash old global.
if ("sunshine" in global) globals.sunshine = global.sunshine;

module.exports = require("./sunshine");

// Restore old global.
if ("sunshine" in globals) global.sunshine = globals.sunshine; else delete global.sunshine;