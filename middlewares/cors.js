const cors = require("cors");
const whitelist = new Set([
  "https://example1.com",
  "https://example2.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://vetflowstaging.vetport.com/",
]);
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.has(origin)) {
      callback(null, true);
    } else {
      callback(null, true); 	    
      //callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 202, // send a status when OPTIONS request is supported
  // To findout which request method server supports
};

module.exports = cors(corsOptions);
