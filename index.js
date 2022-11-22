const express = require('express');
const app = express();

// adding routes
app.get('/book', (req, res) => {
    res.send([
        {
            name: 'Harry Potter',
            id: 1,
        },
        {
            name: 'Percy Jackson',
            id: 2,
        }

    ]);
});

// port
const port = process.env.PORT || 5500;
app.listen(port, () => `listening on port ${port}`);