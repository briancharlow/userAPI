const express = require('express');

const { router } = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/', router);


app.use("*", (req, res) => {
    res.status(404).json(
        {
            success: false,
            message: "404 not found",
        }

    )
});
const port = 5000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });