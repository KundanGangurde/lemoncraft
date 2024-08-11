const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/dbConfig');
const app = express();
dotenv.config();


app.use(express.json());
app.use('/auth', require('./src/routes/authRoutes'));
app.use('/assets', require('./src/routes/assetRoutes'));
app.use('/marketplace', require('./src/routes/marketplaceRoutes'));

app.use(require('./src/middleware/errorHandler'));
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
