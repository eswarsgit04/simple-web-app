const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Jenkins Web App 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
