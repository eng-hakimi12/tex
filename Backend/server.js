const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Tusaale Route ah
app.get('/', (req, res) => {
    res.send('Backend-ka waa uu shaqeynayaa!');
});

// Dhegayso
app.listen(PORT, () => {
    console.log(`Server-ka ayaa ka soconaya: http://localhost:${PORT}`);
});
