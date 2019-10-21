const express = require('express');
const multer = require('multer');
const SessioController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessioController.store);

routes.get('/dashboard', DashboardController.show);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;