const EventEmitter = require("events");
const emitter = new EventEmitter();
const { _gb } = require("../utils/helper/Global");
const { clients } = _gb;

emitter.on("notification", (data) => {
  for (let values of clients.values()) {
    values.response.write(`data: ${JSON.stringify({ num: data })}\n\n`);
  }
});

module.exports = emitter;
