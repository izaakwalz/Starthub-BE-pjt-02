/**
 * Returns payload object
 * @param {string} message Response message
 * @param {*} data Data to be returned
 */

const payload = (message, data, success) => {
  return {
    message: message,
    success: success == null ? true : success,
    data: data || null,
  };
};

module.exports = payload;
