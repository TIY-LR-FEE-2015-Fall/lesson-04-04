// Node
var http = require(`http`);
var visitor = 1;

// Callback to be run on every HTTP request
var app = (req, res) => {
  // Log in terminal that there was a new incoming request
  console.log(`Incoming Request: ${req.url}`);

  // Check to see if Request url is `favicon.ico`
  if (req.url === `/favicon.ico`) {
    return res.end();
  }

  res.end(`
    <h1>Welcome to our site</h1>
    <h2>You are the ${visitor} visitor</h2>
  `);

  // Make visitor increase by 1
  visitor += 1;
};

// Create our HTTP Server Responder
var s = http.createServer(app);

// Start server listening to PORT 3000
s.listen(9000);
