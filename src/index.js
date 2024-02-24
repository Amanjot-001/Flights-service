const express = require('express');
const app = express();

const apiRoutes = require('./routes')

const { ServerConfig, Logger } = require('./config');

app.use(express.json()) //bodyparser
app.use(express.urlencoded({ extended: true })); // using qs insted of querystring

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Sucessfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", "root", {});
});
