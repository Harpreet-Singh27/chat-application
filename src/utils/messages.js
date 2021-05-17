const generateMessage = (username, msg) => {
  return {
    username,
    text: msg,
    createdAt: new Date().getTime(),
  };
};

const generateLocationMessage = (username, msg) => {
  return {
    username,
    text: msg,
    createdAt: new Date().getTime(),
  };
};

module.exports = {
  generateMessage,
  generateLocationMessage,
};
