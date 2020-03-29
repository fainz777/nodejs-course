const isInRange = (charCode, range) => {
  return charCode >= range[0] && charCode <= range[1];
};

module.exports = {
  isInRange
};
