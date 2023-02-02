require("./db/connection");

const express = require("express");
const userRouter = require("./user/userRoutes");

const cors = require ("cors");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter);

app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});