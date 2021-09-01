
// ↓ require express - gives us a function
const express = require('express');

// ↓ call that function - express();
const app = express();
const PORT = 5000;

// app.use helps us redirect traffic.
// express.static 'serves' our files
app.use(express.static('server/public'));

// ↓ now we tell the server to start listening...
// ↓ without this, server will be like "something came in, who cares"
// ↓ "A request came in...I know what to do with that! I RETURN HTML"
// ↓ this is called an "arrow function"...shortcut for writing a function
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});