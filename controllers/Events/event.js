const { _gb } = require("../../utils/helper/Global");
const { clients, userEvent } = _gb;
const dayjs = require("dayjs");
// D = The day of the month
// H = The hour
// m = The minute
// s = The second
// SSS = The millisecond, 3-digits
exports.notify = (req, res) => {
  try {
    const uniqueId = dayjs().format("DHmsSSS");
    const eventObj = {
      request: req,
      response: res,
      client: uniqueId,
    };
    eventObj.response.writeHead(200, {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    });
    eventObj.response.write(`200`);
    clients.set(uniqueId, eventObj);
    eventObj.request.on("close", () => {
      console.log(`Connection closed ${eventObj.client}`);
      clients.delete(uniqueId);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.userevent = (req, res) => {
  try {
    const uniqueId = dayjs().format("DhmsSSS");
    const eventObj = {
      request: req,
      response: res,
      client: uniqueId,
    };
    eventObj.response.writeHead(200, {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    });
    eventObj.response.write(`200`);
    userEvent.set(uniqueId, eventObj);
    eventObj.request.on("close", () => {
      console.log(`Connection closed ${eventObj.client}`);
      userEvent.delete(uniqueId);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
