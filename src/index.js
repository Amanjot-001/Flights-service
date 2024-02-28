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



// bad code alert
//  const { City, Airport } = require('./models');
// const bengaluru = await City.findByPk(1, {include: {model: Airport}});
// console.log(bengaluru);
// const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR', cityId: 1});
// const dbpairport = await bengaluru.createAirport({name: 'Huballi Airport', code: 'HBL'});
// console.log(dbpairport);
// const airportsInBlr = await bengaluru.getAirports();
// console.log(airportsInBlr);
// const hbairport = await Airport.findByPk(3);
// console.log(hbairport);
// await bengaluru.removeAirports(hbairport);
// const mumbai = await City.findByPk(2);
// const sh = mumbai.createAirport({name: 'CSI airport', code: 'MUM'});
// await City.destroy({
//     where: {
//         id: 2
//     }
// });
// const sh = await Airport.findByPk(2);
// mumbai.removeAirport(sh)
// const city = await City.findByPk(4);
// await city.createAirport({name: 'Indore airport', code: 'IND'});
//  await City.destroy({
//      where: {
//          id: 4
//      }
//  });