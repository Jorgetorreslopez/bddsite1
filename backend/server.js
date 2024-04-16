const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); //TODO: Update with deployed sites
app.use(express.json());

app.use('/', contactRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
