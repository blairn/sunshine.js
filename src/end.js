  if (typeof define === "function" && define.amd) define(sunshine);
  else if (typeof module === "object" && module.exports) module.exports = sunshine;
  this.sunshine = sunshine;
}();